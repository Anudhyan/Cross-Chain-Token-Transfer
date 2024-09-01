require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

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
      accounts: [`0xadc8974cb28c93f85a0ed2f6e15957b1257fa14ae7341c24e3ac595aa4d3e0b6`]
    },
    polygonCardona: {
      url: `https://rpc.cardona.zkevm-rpc.com`,
      accounts: [`0xadc8974cb28c93f85a0ed2f6e15957b1257fa14ae7341c24e3ac595aa4d3e0b6`]
    }
  }
  ,
  polygonscan: {
    apiKey: "1HPB3QZN585C2ZNQVK9J9QTDE45RSXMMDH"
  }
};
