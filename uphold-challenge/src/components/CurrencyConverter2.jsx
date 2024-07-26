import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import { useState, useEffect } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useDebounce } from '../customHooks/useDebounce'

const CurrencyConverter2 = () => {
  const freecurrencyapi = new Freecurrencyapi('fca_live_muEUAhQKoGi1yjtGQkSVWe3by3LGkfYsbqyVHaFs')
  const queryClient = useQueryClient()
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




  if(isLoading) return <h1>Loading...</h1>

  if (isError){
    return <pre>{JSON.stringify(error)}</pre>
  }
  
  return (
      <div className='flex flex-col w-full h-full mx-auto bg-pink-400 text-center'>
        <div className='flex justify-center my-4'>
          <input type="number" value={inputValue} placeholder='0.00' onChange={handleOnChangeInput} className='p-2'/>
          <select name="currency" id="currency" onChange={handleOnChangeSelect} defaultValue={selectedCurrency} className='max-w-[100px] p-2 text-center bg-blue-600'>
            <option>USD</option>
            {currencysList?.map((currency, i)=> (
              <option value={currency} key={currency+i} >
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h1 className='text-2xl font-bold'>Conversion Results</h1>
          {conversionResults?.filter(c => c[0] !== selectedCurrency).map((pair, i)=> (
            <div key={pair+i}>
              <p>{` ${pair[1]} ${pair[0]}`}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default CurrencyConverter2