import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()

    onSearch(query)
    setQuery('')
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Currículum de Edua..."
        className="w-2/4 bg-VSInput text-white text-sm px-3 py-1 rounded-md border-VSBorder"
      />
    </form>
  )
}

export default SearchBar

// TODO hover, search icon and window on focus