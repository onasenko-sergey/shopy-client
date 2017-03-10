import React from 'react'
import { shallow } from 'enzyme'
import Header from 'layouts/CoreLayout/components/Header'
import ContactInfo from 'layouts/CoreLayout/components/Header/ContactInfo'
import Navbar from 'layouts/CoreLayout/components/Header/Navbar'

describe('(Component) Header', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  it('should render contact info', function () {
    expect(_wrapper.find(ContactInfo)).to.have.length(1)
  })

  it('should render navbar', function () {
    expect(_wrapper.find(Navbar)).to.have.length(1)
  })
})
