import React from 'react'
import { shallow } from 'enzyme'
import Header from 'layouts/CoreLayout/components/Header'

describe('(Component) Header', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  it('should exist', function () {
    expect(_wrapper.find(Header)).to.be.ok
  })
})
