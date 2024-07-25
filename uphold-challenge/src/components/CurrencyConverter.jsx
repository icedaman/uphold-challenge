import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import { useState, useEffect, useMemo } from 'react'
import Select from 'react-select'

const dummyRatesJson = {
  "AUD": 1.5206703041,
  "BGN": 1.8015902682,
  "BRL": 5.6550908437,
  "CAD": 1.3805101896,
  "CHF": 0.8848601516,
  "CNY": 7.2594810119,
  "CZK": 23.4251829349,
  "DKK": 6.8823009564,
  "EUR": 0.9223401357,
  "GBP": 0.7750901549,
  "HKD": 7.8057309973,
  "HRK": 6.5614810873,
  // "HUF": 362.7068177653,
  // "IDR": 16195.261628305,
  // "ILS": 3.6470304004,
  // "INR": 83.6960808263,
  // "ISK": 138.142761304,
  // "JPY": 153.8537454521,
  // "KRW": 1378.9086300966,
  // "MXN": 18.3528720903,
  // "MYR": 4.6727706427,
  // "NOK": 11.025211834,
  // "NZD": 1.6868103053,
  // "PHP": 58.5765701366,
  // "PLN": 3.9620106894,
  // "RON": 4.5838606515,
  // "RUB": 86.1779135425,
  // "SEK": 10.7736116521,
  // "SGD": 1.3434701595,
  // "THB": 36.1095452648,
  // "TRY": 32.818136452,
  "USD": 1,
  // "ZAR": 18.3543430246
}

const CurrencyConverter = () => {
  // const freecurrencyapi = useMemo(() => new Freecurrencyapi('fca_live_muEUAhQKoGi1yjtGQkSVWe3by3LGkfYsbqyVHaFs'), [])
  const freecurrencyapi = new Freecurrencyapi('fca_live_muEUAhQKoGi1yjtGQkSVWe3by3LGkfYsbqyVHaFs')
  const [latestRates, setLatestRates] = useState()
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [inputValue, setInputValue] = useState('')
  const [conversionResults, setConversionResults] = useState([])
  const [currencysList, setCurrencysList] = useState([])

  useEffect(() => {
    const getRates = async () => {
      const response = await freecurrencyapi.latest({
        base_currency: selectedCurrency,
      })
      if (response.data != undefined) setLatestRates(response.data)
    }

    getRates()
    if (latestRates && latestRates != undefined){
      setCurrencysList(Object.keys(latestRates))
    }
  }, [latestRates, selectedCurrency])


  const handleOnChangeSelect = (event) => {
    setConversionResults([])
    setInputValue('')
    setSelectedCurrency(event.target.value);
  }

  const handleOnChangeInput = (event) => {
    setInputValue(event?.target?.value);
    setConversionResults([]);
  }

  useEffect(() => {
    for (const key in latestRates) {
      if (Object.prototype.hasOwnProperty.call(latestRates, key)) {
        if(inputValue > 0){
          setConversionResults(conversionResults => [
            ...conversionResults,
            [key, latestRates[key] * inputValue]
          ])
          //console.log(`Conversion: ${inputValue} ${selectedCurrency} = ${latestRates[key] * inputValue} ${key}`);
        }
      }
    }
  },[inputValue, selectedCurrency, latestRates])

  return (
    <div className='flex flex-col w-full h-full mx-auto bg-pink-400 text-center'>
      <div className='flex justify-center my-4'>
        <input type="number" value={inputValue} placeholder='0.00' onChange={handleOnChangeInput} className='p-2'/>

        <select name="currency" id="currency" onChange={handleOnChangeSelect} defaultValue={selectedCurrency} className='max-w-[100px] p-2 text-center bg-blue-600'>
          <option>USD</option>
          {currencysList.map((currency, i)=> (
            <option value={currency} key={currency+i} >
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h1 className='text-2xl font-bold'>Conversion Results</h1>
        {conversionResults.map((pair, i)=> (
          <div key={pair+i}>
            <p>{` ${pair[1]} ${pair[0]}`}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default CurrencyConverter