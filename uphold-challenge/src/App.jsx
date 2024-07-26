import { useState, useEffect } from 'react'
import { getTicker } from './api/utils'
import { useDebounce } from './customHooks/useDebounce'
import CurrencyConverter from './components/CurrencyConverter'

function App() {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const debouncedSearchValue = useDebounce(search)

  useEffect(() =>{
    const handleSearch = async () => {
      setLoading(true);

      const results = await getTicker(debouncedSearchValue);
      setSearchResults(results);

      setLoading(false);
    }

    //handleSearch();
  }, [debouncedSearchValue])


  return (
    <div>

      <CurrencyConverter />

{/*       

      <input type="text" onChange={(e) => setSearch(e.target.value)} value={search}  className='border-2 border-red-600'/>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Results</h3>
        {loading && 'Loading...'}
        {search && !loading && searchResults.map((result, i) => (
          <div key={i}>
            <h5>{result.pair}</h5>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold underline text-purple-700">
        Hello world!
      </h1>
       */}
    </div>
  )
}

export default App
