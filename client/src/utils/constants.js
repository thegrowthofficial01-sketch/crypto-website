export const PLATFORM_WALLET = {
  ethereum: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e', // Replace with your real platform wallet
  usdt: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  usdc: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
}

export const NETWORKS = {
  sepolia: {
    name: 'Sepolia Testnet',
    chainId: 11155111,
    explorer: 'https://sepolia.etherscan.io',
  },
  mainnet: {
    name: 'Ethereum Mainnet',
    chainId: 1,
    explorer: 'https://etherscan.io',
  },
}

export const SIP_PLANS = [
  {
    id: 'sip-1',
    name: 'Bitcoin Accumulation Plan',
    crypto: 'BTC',
    minInvestment: 10,
    apy: '8.5%',
    duration: '12 months',
    risk: 'Medium',
    icon: '₿',
    color: 'text-yellow-400',
    description: 'Accumulate Bitcoin systematically with monthly auto-investment.',
    image: 'https://images.unsplash.com/photo-1518297971208-df23b7f301f5?w=800&q=80',
  },
  {
    id: 'sip-2',
    name: 'Ethereum Yield SIP',
    crypto: 'ETH',
    minInvestment: 25,
    apy: '12.0%',
    duration: '6 months',
    risk: 'Medium',
    icon: 'Ξ',
    color: 'text-white',
    description: 'Earn yield on Ethereum through systematic staking investments.',
    image: 'https://images.unsplash.com/photo-1639772677661-2e97d2a9c610?w=800&q=80',
  },
  {
    id: 'sip-3',
    name: 'USDT Stable Growth',
    crypto: 'USDT',
    minInvestment: 50,
    apy: '6.2%',
    duration: '3 months',
    risk: 'Low',
    icon: '$',
    color: 'text-green-400',
    description: 'Low-risk stablecoin investment with consistent monthly returns.',
    image: 'https://images.unsplash.com/photo-1621761181077-705807204863?w=800&q=80',
  },
  {
    id: 'sip-4',
    name: 'Solana Growth Plan',
    crypto: 'SOL',
    minInvestment: 15,
    apy: '15.5%',
    duration: '9 months',
    risk: 'High',
    icon: '◎',
    color: 'text-purple-400',
    description: 'High-growth Solana ecosystem systematic investment plan.',
    image: 'https://images.unsplash.com/photo-1640266789739-5226e552400a?w=800&q=80',
  },
]