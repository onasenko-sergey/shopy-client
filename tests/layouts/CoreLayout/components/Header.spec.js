import React from 'react'
import { shallow } from 'enzyme'
import Header from 'layouts/CoreLayout/components/Header'
import ContactInfo from 'layouts/CoreLayout/components/Header/ContactInfo'

describe('(Component) Header', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  it('should render contact info', function () {
    expect(_wrapper.find(ContactInfo)).to.have.length(1)
  })
})
