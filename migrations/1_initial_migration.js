const Migrations = artifacts.require("Migrations");
const Factory = artifacts.require("Factory");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Factory);
};
