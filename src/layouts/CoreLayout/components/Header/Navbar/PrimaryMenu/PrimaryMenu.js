import React, { PropTypes } from 'react'
import './PrimaryMenu.scss'
import { Link, IndexLink } from 'react-router'
import DisabledLink from 'components/DisabledLink'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string
}

export const PrimaryMenu = ({ className }) => (
  <ul className={classnames(className, 'primary-menu list-inline')}>
    <li>
      <IndexLink
        activeClassName='active'
        className='not-decorated-link'
        to='/'
      >
        Home
      </IndexLink>
    </li>
    <li>
      <Link
        activeClassName='active'
        className='not-decorated-link'
        to='/products'
      >
        Products
      </Link>
    </li>
    <li><DisabledLink href='/hot-deals'>Hot Deals</DisabledLink></li>
    <li><DisabledLink href='/about'>About</DisabledLink></li>
    <li><DisabledLink href='/contact'>Contact</DisabledLink></li>
  </ul>
)

PrimaryMenu.propTypes = propTypes

export default PrimaryMenu
