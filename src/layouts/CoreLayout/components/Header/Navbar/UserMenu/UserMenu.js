import React, { PropTypes } from 'react'
import './UserMenu.scss'
import SearchMenuItem from './SearchMenuItem'
import UserMenuItem from './UserMenuItem'
import CartMenuItem from './CartMenuItem'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string
}

export const UserMenu = ({ className }) => (
  <ul className={classnames(className, 'user-menu list-inline')}>
    <li className='user-menu__item'>
      <SearchMenuItem />
    </li>
    <li className='user-menu__item'>
      <UserMenuItem isAuthenticated />
    </li>
    <li className='user-menu__item'>
      <CartMenuItem count={5} />
    </li>
  </ul>
)

UserMenu.propTypes = propTypes

export default UserMenu
