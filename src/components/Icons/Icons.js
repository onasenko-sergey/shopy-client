import React, { PropTypes } from 'react'
import './Icons.scss'
import classnames from 'classnames'

const propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  iconType: PropTypes.string.isRequired
}

export const Icon = ({ active, className, iconType, ...rest }) => (
  <span
    className={classnames(className, `icon_${iconType}`, { 'icon_active': active })}
    {...rest}
  />
)

Icon.propTypes = propTypes

export default Icon
