import React, { PropTypes } from 'react'
import './SocialMedia.scss'
import classnames from 'classnames'
import { FacebookIcon, TwitterIcon, GooglePlusIcon, InstagramIcon } from 'components/Icons'

const propTypes = {
  className: PropTypes.string
}

export const SocialMedia = ({ className }) => (
  <ul className={classnames(className, 'social-media', 'list-inline')}>
    <li className='social-media__item'>
      <a
        href='https://www.facebook.com/'
        target='_blank'
      >
        <FacebookIcon className='social-media__icon' />
      </a>
    </li>
    <li className='social-media__item'>
      <a
        href='https://twitter.com/'
        target='_blank'
      >
        <TwitterIcon className='social-media__icon' />
      </a>
    </li>
    <li className='social-media__item'>
      <a
        href='https://plus.google.com/'
        target='_blank'
      >
        <GooglePlusIcon className='social-media__icon' />
      </a>
    </li>
    <li className='social-media__item'>
      <a
        href='https://www.instagram.com/'
        target='_blank'
      >
        <InstagramIcon className='social-media__icon' />
      </a>
    </li>
  </ul>
)

SocialMedia.propTypes = propTypes

export default SocialMedia
