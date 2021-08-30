const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const { ZERO_ADDRESS } = constants;

function shouldBehaveLikeFactory (tsin, symbol, senderAddress) {

  describe('deploy', function () {
    describe('when the deployer wants to create a new token', function () {
      it('deploys a BEPlus contract', async function () {
        await this.token.deploy(tsin, symbol, { from: senderAddress });

        expect(await this.token.getAddress(tsin)).to.be.not.equal(ZERO_ADDRESS);
      });
    });
  });
}


module.exports = {
  shouldBehaveLikeFactory,
};