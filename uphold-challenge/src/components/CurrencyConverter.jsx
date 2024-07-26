import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from '../customHooks/useDebounce'

const CurrencyConverter = () => {
  const freecurrencyapi = new Freecurrencyapi('fca_live_muEUAhQKoGi1yjtGQkSVWe3by3LGkfYsbqyVHaFs')
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [latestRates, setLatestRates] = useState()
  const [inputValue, setInputValue] = useState('')
  const [conversionResults, setConversionResults] = useState([])
  const [currencysList, setCurrencysList] = useState([])
  const debouncedLatestRatesValue = useDebounce(latestRates)

  const { data: rates, isLoading, isError, error, refetch} = useQuery({
    queryKey: ["rates", selectedCurrency],
    queryFn: async () => await freecurrencyapi.latest({
      base_currency: selectedCurrency,
    })
  })

  useEffect(() => {
    if (rates?.data){
      setCurrencysList(Object.keys(rates?.data))
      setLatestRates(rates?.data)
    }
  }, [rates?.data])

  const handleOnChangeSelect = (event) => {
    refetch()
    setConversionResults([])
    setInputValue('')
    setSelectedCurrency(event.target.value)
  }

  const handleOnChangeInput = (event) => {
    setInputValue(event?.target?.value)
    setConversionResults([])
  }

  useEffect(() => {
    for (const key in debouncedLatestRatesValue) {
      if (Object.prototype.hasOwnProperty.call(debouncedLatestRatesValue, key)) {
        if(inputValue > 0){
          setConversionResults(conversionResults => [
            ...conversionResults,
            [key, debouncedLatestRatesValue[key] * inputValue]
          ])
        }
      }
    }
  },[inputValue, selectedCurrency, debouncedLatestRatesValue])


  if (isError){
    return <pre>{JSON.stringify(error)}</pre>
  }
  
  return (
      <div className='flex flex-col w-full h-full mx-auto text-center'>
        <h1 className='text-3xl font-bold py-6'>Currency Converter</h1>
        <h5 className='text-slate-400 pb-4 w-[500px] mx-auto'>Receive competitive and transparent pricing with no hidden spreads. See how we compare.</h5>
        <div className='flex justify-center my-4 w-[500px] relative mx-auto'>
          <input type="number" value={inputValue} placeholder='0.00' onChange={handleOnChangeInput} className='pl-16 pr-24 py-4 rounded-lg bg-slate-200 text-3xl'/>
          <select name="currency" id="currency" onChange={handleOnChangeSelect} defaultValue={selectedCurrency} 
            className='max-w-[100px] px-2 py-2 text-center bg-white rounded-full absolute top-[15px] right-[10px]'
          >
            <option>USD</option>
            {currencysList?.map((currency, i)=> (
              <option value={currency} key={currency+i} >
                {currency}
              </option>
            ))}
          </select>
        </div>
        {isLoading && <h1>Loading...</h1>}
        <div className='w-[500px] mx-auto'>
          {conversionResults?.filter(c => c[0] !== selectedCurrency).map((pair, i)=> (
            <div key={pair+i} className='flex justify-between m-4 border-2 border-slate-200 rounded-full px-4 text-lg font-semibold hover:bg-slate-200'>
              <span>{pair[1]}</span> <span className=''>{pair[0]}</span>
            </div>
          ))}
        </div>
      </div>
  )
}

export default CurrencyConverter