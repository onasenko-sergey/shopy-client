import React from 'react'
import './SecondaryMenu.scss'
import DisabledLink from 'components/DisabledLink'

const propTypes = {
}

export const SecondaryMenu = () => (
  <ul className='secondary-menu'>
    <li className='secondary-menu__item'>
      <DisabledLink className='secondary-menu__link'>about us</DisabledLink>
    </li>
    <li className='secondary-menu__item'>
      <DisabledLink className='secondary-menu__link'>contact us</DisabledLink>
    </li>
    <li className='secondary-menu__item'>
      <DisabledLink className='secondary-menu__link'>support</DisabledLink>
    </li>
    <li className='secondary-menu__item'>
      <DisabledLink className='secondary-menu__link'>our feed</DisabledLink>
    </li>
    <li className='secondary-menu__item'>
      <DisabledLink className='secondary-menu__link'>terms and conditions</DisabledLink>
    </li>
    <li className='secondary-menu__item'>
      <DisabledLink className='secondary-menu__link'>our privacy</DisabledLink>
    </li>
    <li className='secondary-menu__item'>
      <DisabledLink className='secondary-menu__link'>join us</DisabledLink>
    </li>
    <li className='secondary-menu__item'>
      <DisabledLink className='secondary-menu__link'>live support</DisabledLink>
    </li>
  </ul>
)

SecondaryMenu.propTypes = propTypes

export default SecondaryMenu
