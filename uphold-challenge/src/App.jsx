import { useState, useEffect } from 'react'
import './App.css'
import { getTicker } from './api/utils'
import { useDebounce } from './customHooks/useDebounce'

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

    handleSearch();
  }, [debouncedSearchValue])


  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Results</h3>
        {loading && 'Loading...'}
        {search && !loading && searchResults.map((result, i) => (
          <div key={i}>
            <h5>{result.pair}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
