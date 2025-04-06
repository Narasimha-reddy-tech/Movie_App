import React from 'react'
import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')

    // function to handle the searchTerm
    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)

        // debouncing : making api call to wait for 500 ms

        setTimeout(() => {
            onSearch(e.target.value)
        }, 500)

    }



    return (
        <div className='container my-1'>
            <input className='search-control border' type="text" placeholder='Search a movie...' value={searchTerm} name="search-bar" onChange={handleSearchTerm} />
        </div>
    )
}

export default SearchBar
