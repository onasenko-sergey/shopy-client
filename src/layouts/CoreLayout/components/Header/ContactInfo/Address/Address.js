import React, { PropTypes } from 'react'
import './Address.scss'
import classnames from 'classnames'
import { MailIcon, PhoneIcon } from 'components/Icons'

const propTypes = {
  className: PropTypes.string
}

export const Address = ({ className }) => (
  <address className={classnames(className, 'address')}>
    <ul className='list-inline address__list'>
      <li className='address__list-item'>
        <a
          className='not-decorated-link'
          href='mailto:info@shopy.com'
        >
          <MailIcon className='address__icon-mail' />
          info@shopy.com
        </a>
      </li>
      <li className='address__list-item'>
        <a
          className='not-decorated-link'
          href='callto:4535553996'
        >
          <PhoneIcon className='address__icon-phone' />
          453 - 5553 - 996
        </a></li>
    </ul>
  </address>
)

Address.propTypes = propTypes

export default Address
