import data from '../data/tickers.json'


export const getTicker = async (searchedTicker) => { 
  //mock API call to simulate .getTicker() from SDK
  console.log('Making an API request ') 
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return data.filter((ticker) => ticker.currency.toLowerCase().includes(searchedTicker.toLowerCase())
  )
}
