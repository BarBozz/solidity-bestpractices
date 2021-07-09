import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter"


/**
* @type import('hardhat/config').HardhatUserConfig
*/
export default {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      }
    ]
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 25
  }
};
