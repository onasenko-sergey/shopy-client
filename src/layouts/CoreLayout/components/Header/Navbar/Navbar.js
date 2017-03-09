import React, { PropTypes } from 'react'
import './Navbar.scss'
import Nav from 'react-bootstrap/lib/Navbar'
import { Link } from 'react-router'
import Logo from 'components/Logo'
import PrimaryMenu from './PrimaryMenu'
import Collapse from 'react-bootstrap/lib/Collapse'
import Searchbar from '../../../forms/Searchbar'
import UserMenu from './UserMenu'

const propTypes = {
  searchbarOpened: PropTypes.bool.isRequired
}

export const Navbar = ({ searchbarOpened }) => (
  <Nav collapseOnSelect>
    <Nav.Brand className='navbar__brand'>
      <Link to='/'><Logo /></Link>
    </Nav.Brand>
    <Nav.Toggle className='navbar__toggle' />
    <UserMenu className='navbar__user-menu' />
    <Nav.Collapse className='navbar__primary-menu'>
      <PrimaryMenu className='nav navbar-nav' />
    </Nav.Collapse>
    <Collapse in={searchbarOpened} className='navbar__searchbar'>
      <Searchbar />
    </Collapse>
  </Nav>
)

Navbar.propTypes = propTypes

export default Navbar
