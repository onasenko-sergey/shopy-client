import React, { PropTypes } from 'react'
import './DisabledLink.scss'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export const DisabledLink = ({ children, className, onClick, ...rest }) => (
  <a
    className={classnames(className, 'disabled-link', 'not-decorated-link')}
    onClick={e => { onClick ? onClick(e) : e.preventDefault() }}
    {...rest}
  >
    { children }
  </a>
)

DisabledLink.propTypes = propTypes

export default DisabledLink
