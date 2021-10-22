// Import this so that the hardhat runtime is extended with an ethers property (see below)
import "@nomiclabs/hardhat-ethers";
import hre from "hardhat";

// The Provider handles the connection to an ethereum node. You can configure
// this in the hardhat.config.js.
export const { provider } = hre.ethers;

(async function () {
  // Your code here, have fun!
})();
