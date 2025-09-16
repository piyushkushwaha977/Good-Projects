'use client'
import { useEffect, useState } from 'react'
import useDebounce from '../../../hooks/useDebounce'

function SerachBar() {
    const [ searchQuery, setSearchQuery] = useState('');

    const debouncedValue = useDebounce(searchQuery,5)

    useEffect( () => {
       console.log("SearchBar component")
    },[])


  return (
    <div>
        <h2>SerachBar</h2>

        <div>
            <input 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                className='
                 border-2 border-stone-800 '
            />
        </div>

        <h2>{debouncedValue}</h2>
    </div>
  )
}

export default SerachBar