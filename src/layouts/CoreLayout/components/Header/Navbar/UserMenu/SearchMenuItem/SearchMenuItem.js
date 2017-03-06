import React from 'react'
import { SearchIcon } from 'components/Icons'

const propTypes = {
}

export const SearchMenuItem = () => (
  <a
    className='search-menu-item'
    href='/search'
    onClick={(e) => { e.preventDefault() }}
  >
    <SearchIcon />
  </a>
)

SearchMenuItem.propTypes = propTypes

export default SearchMenuItem
