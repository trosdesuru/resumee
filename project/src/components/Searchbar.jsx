import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  console.debug('search bar -> call')

  const [query, setQuery] = useState()

  const handleSearch = (event, query) => {
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
        placeholder="currículum de Edua..."
        className="w-2/4 text-black text-sm px-3 py-1 rounded-md bg-gray"
      />
    </form>
  )
}

export default SearchBar

// TODO hover, search icon and window on focus
// TODO onSearch is not a function