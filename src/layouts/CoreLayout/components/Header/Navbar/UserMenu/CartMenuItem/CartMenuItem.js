import React, { PropTypes } from 'react'
import './CartMenuItem.scss'
import { Link } from 'react-router'
import { CartIcon } from 'components/Icons'
import Badge from 'react-bootstrap/lib/Badge'

const propTypes = {
  count: PropTypes.number.isRequired
}

const defaultProps = {
  count: 0
}

export const CartMenuItem = ({ count }) => (
  <Link
    className='cart-menu-item'
    to='/user/cart'
  >
    <CartIcon active={!!count} />
    {!!count && <Badge>{count}</Badge>}
  </Link>
)

CartMenuItem.propTypes = propTypes
CartMenuItem.defaultProps = defaultProps

export default CartMenuItem
