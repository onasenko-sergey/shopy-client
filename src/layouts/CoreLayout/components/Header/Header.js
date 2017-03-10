import React from 'react'
import ContactInfo from './ContactInfo'
import Navbar from './Navbar'

const propTypes = {
}

export const Header = () => (
  <header className='header'>
    <ContactInfo />
    <Navbar searchbarOpened />
  </header>
)

Header.propTypes = propTypes

export default Header
