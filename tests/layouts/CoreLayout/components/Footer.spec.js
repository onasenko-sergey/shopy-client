import React from 'react'
import { shallow } from 'enzyme'
import Footer from 'layouts/CoreLayout/components/Footer'
import SecondaryMenu from 'layouts/CoreLayout/components/Footer/SecondaryMenu'
import Logo from 'components/Logo'
import figure from 'layouts/CoreLayout/components/Footer/assets/payment-methods.png'

describe('(Component) Footer', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Footer />)
  })

  it('should render secondary menu', function () {
    expect(_wrapper.find(SecondaryMenu)).to.have.length(1)
  })

  it('should render hash anchor containing logo', function () {
    const node = _wrapper.find('a')
    expect(node.prop('href')).to.equal('#')
    expect(node.find(Logo)).to.have.length(1)
  })

  it('should render payment options figure', function () {
    expect(_wrapper.find('img').prop('src')).to.eql(figure)
  })
})
