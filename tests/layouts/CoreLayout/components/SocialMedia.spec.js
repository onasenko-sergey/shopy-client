import React from 'react'
import { shallow } from 'enzyme'
import SocialMedia from 'layouts/CoreLayout/components/Header/ContactInfo/SocialMedia'

describe('(Component) SocialMedia', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<SocialMedia />)
  })

  it('should render facebook link', function () {
    expect(_wrapper.find('a[href="https://www.facebook.com/"]')).to.have.length(1)
  })

  it('should render twitter link', function () {
    expect(_wrapper.find('a[href="https://twitter.com/"]')).to.have.length(1)
  })

  it('should render google-plus link', function () {
    expect(_wrapper.find('a[href="https://plus.google.com/"]')).to.have.length(1)
  })

  it('should render instagram link', function () {
    expect(_wrapper.find('a[href="https://www.instagram.com/"]')).to.have.length(1)
  })
})
