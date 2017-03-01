import React from 'react'
import './Header.scss'
import ContactInfo from './ContactInfo'

const propTypes = {
}

export const Header = () => (
  <header className='header'>
    <ContactInfo />
    <h3>Header</h3>
  </header>
)

Header.propTypes = propTypes

export default Header
