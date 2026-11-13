const FIRST_NAMES = ['Alex', 'Sarah', 'Marcus', 'Elena', 'David', 'Sophie', 'James', 'Maya', 'Lucas', 'Zara', 'Omar', 'Lina', 'Noah', 'Aria', 'Ethan']
const LAST_NAMES = ['Crypto', 'Trader', 'Investor', 'Hodler', 'Whale', 'Nakamoto', 'Silva', 'Rossi', 'Chen', 'Kim', 'Singh', 'Ali', 'Hassan']
const CRYPTOS = ['BTC', 'ETH', 'USDT', 'SOL', 'ADA']
const STATUSES = ['Investing Now', 'Completed', 'Active']

export const generateFakeInvestor = (id) => {
  const first = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)]
  const last = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)]
  const crypto = CRYPTOS[Math.floor(Math.random() * CRYPTOS.length)]
  const amount = (Math.random() * 50 + 5).toFixed(2)
  const minutesAgo = Math.floor(Math.random() * 60) + 1
  return {
    id,
    name: `${first} ${last}`,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${first}${last}`,
    crypto,
    amount,
    time: `${minutesAgo} min ago`,
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  }
}

export const generateLeaderboard = (count = 8) => {
  return Array.from({ length: count }, (_, i) => generateFakeInvestor(i + 1))
}