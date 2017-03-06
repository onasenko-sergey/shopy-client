import React, { PropTypes } from 'react'
import './UserMenuItem.scss'
import Dropdown from 'react-bootstrap/lib/Dropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import { UserIcon } from 'components/Icons'

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export const UserMenuItem = ({ isAuthenticated }) => (isAuthenticated
  ? (
    <Dropdown
      className='user-menu-item_auth'
      id='user-menu-item-dropdown'
    >
      <Dropdown.Toggle noCaret>
        <UserIcon active />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <MenuItem>Profile</MenuItem>
        <MenuItem>History</MenuItem>
        <MenuItem divider />
        <MenuItem>Logout</MenuItem>
      </Dropdown.Menu>
    </Dropdown>
    )
  : (
    <a
      className='user-menu-item_no-auth'
      href='/user/auth'
      onClick={(e) => { e.preventDefault() }}
    >
      <UserIcon />
    </a>
    )
)

UserMenuItem.propTypes = propTypes

export default UserMenuItem
