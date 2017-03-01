import React from 'react'
import { shallow } from 'enzyme'
import Address from 'layouts/CoreLayout/components/Header/ContactInfo/Address'

describe('(Component) Address', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Address />)
  })

  it('should render mail link', function () {
    expect(_wrapper.find('a[href="mailto:info@shopy.com"]')).to.have.length(1)
    expect(_wrapper.find('a[href="mailto:info@shopy.com"]').text()).to.contain('info@shopy.com')
  })

  it('should render phone number link', function () {
    expect(_wrapper.find('a[href="callto:4535553996"]')).to.have.length(1)
    expect(_wrapper.find('a[href="callto:4535553996"]').text()).to.contain('453 - 5553 - 996')
  })
})
