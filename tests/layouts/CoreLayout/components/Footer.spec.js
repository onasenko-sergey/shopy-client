import React from 'react'
import { shallow } from 'enzyme'
import Footer from 'layouts/CoreLayout/components/Footer'

describe('(Component) Footer', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Footer />)
  })

  it('should exist', function () {
    expect(_wrapper.find(Footer)).to.be.ok
  })
})
