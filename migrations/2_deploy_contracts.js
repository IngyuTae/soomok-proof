var SoomokProof = artifacts.require("SoomokProof");

module.exports = function(deployer) {
  // Deploy the SoomokProof contract as our only task
  deployer.deploy(SoomokProof, "0xa5409ec958c83c3f309868babaca7c86dcb077c1");
};