import React, { PropTypes } from 'react'
import './Searchbar.scss'
import { Field } from 'redux-form'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
}

export const Searchbar = ({ className, handleSubmit, reset }) => (
  <form
    className={classnames(className, 'searchbar')}
    onSubmit={handleSubmit}
  >
    <div
      className='form-group'
      role='search'
    >
      <div className='input-group'>
        <a
          className='input-group-addon'
          onClick={reset}
        >
          x
        </a>
        <Field
          className='form-control'
          component='input'
          name='search'
          placeholder='Search'
          type='text'
        />
      </div>
    </div>
  </form>
)

Searchbar.propTypes = propTypes

export default Searchbar
