import axios from 'axios'

const BASE_URL = 'https://api.etherscan.io/api'

export const checkDeposit = async (address, apiKey) => {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        module: 'account',
        action: 'txlist',
        address,
        page: 1,
        offset: 10,
        sort: 'desc',
        apikey: apiKey,
      },
    })
    return res.data.result || []
  } catch (err) {
    console.error('Blockchain check error:', err)
    return []
  }
}

export const formatCrypto = (value, decimals = 4) => {
  return parseFloat(value).toFixed(decimals)
}