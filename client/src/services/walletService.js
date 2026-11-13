import Web3Provider from '@walletconnect/web3-provider'

let provider = null

export const initWalletProvider = () => {
  if (!provider) {
    provider = new Web3Provider({
      rpc: {
        1: 'https://eth-mainnet.g.alchemy.com/v2/demo', // replace with your Alchemy/Infura key
        11155111: 'https://eth-sepolia.g.alchemy.com/v2/demo',
      },
    })
  }
  return provider
}

export const connectWallet = async () => {
  const web3Provider = initWalletProvider()
  await web3Provider.enable()
  const web3 = new (require('ethers')).Web3Provider(web3Provider)
  const accounts = await web3.listAccounts()
  return accounts[0] || null
}

export const disconnectWallet = async () => {
  if (provider) {
    await provider.disconnect()
    provider = null
  }
}

export const getProvider = () => provider