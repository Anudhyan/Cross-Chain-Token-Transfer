require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  solidity: "0.8.24",
  networks: {
    polygonAmoy: {
      url: `https://polygon-amoy.drpc.org`,
      accounts: [process.env.ACCOUNT_KEY]
    },
    polygonCardona: {
      url: `https://rpc.cardona.zkevm-rpc.com`,
      accounts: [process.env.ACCOUNT_KEY]
    }
  }
  ,
  polygonscan: {
    apiKey: process.env.POLYGON_SCAN_API
  }
};
