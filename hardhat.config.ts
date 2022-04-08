import {HardhatUserConfig} from 'hardhat/types'
import 'dotenv/config'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'
import 'hardhat-gas-reporter'
import '@nomiclabs/hardhat-etherscan'

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    milkomeda: {
      url: 'https://rpc-mainnet-cardano-evm.c1.milkomeda.com',
      chainId: 2001,
    },
  },
}

export default config
