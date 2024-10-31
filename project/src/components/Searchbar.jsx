import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    onSearch(query)
    setQuery('')
  }

  return (
    <form onSubmit={handleSearch} className="search-bar p-2">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Buscar..."
        className="border border-gray-500 p-1"
      />
      <button type="submit" className="ml-2 p-1 bg-blue-600 text-white">Buscar</button>
    </form>
  )
}

export default SearchBar
