const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const { ZERO_ADDRESS } = constants;

const {
  shouldBehaveLikeFactory,
} = require('./factory.behavior');

const Factory = artifacts.require('Factory');

contract('Factory', function (accounts) {
  const [ sender, anotherAccount ] = accounts;

  const name = 'My Token';
  const symbol = 'MTKN';

  beforeEach(async function () {
    this.token = await Factory.new();
  });


  shouldBehaveLikeFactory(name, symbol, sender);

});