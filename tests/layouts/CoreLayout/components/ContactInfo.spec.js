import React from 'react'
import { shallow } from 'enzyme'
import ContactInfo from 'layouts/CoreLayout/components/Header/ContactInfo'
import Address from 'layouts/CoreLayout/components/Header/ContactInfo/Address'
import SocialMedia from 'layouts/CoreLayout/components/Header/ContactInfo/SocialMedia'

describe('(Component) ContactInfo', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<ContactInfo />)
  })

  it('should render "address" block', function () {
    expect(_wrapper.find(Address)).to.be.ok
  })

  it('should render "social media" block', function () {
    expect(_wrapper.find(SocialMedia)).to.be.ok
  })
})
