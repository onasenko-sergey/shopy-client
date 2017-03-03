import React, { PropTypes } from 'react'
import './Logo.scss'
import classnames from 'classnames'
import LogoImg from './assets/logo.png'

const propTypes = {
  className: PropTypes.string
}

export const Logo = ({ className }) => (
  <img
    alt='Shopy brand'
    className={classnames(className, 'logo', 'img-responsive')}
    src={LogoImg} />
)

Logo.propTypes = propTypes

export default Logo
