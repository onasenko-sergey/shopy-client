import React from 'react'
import { shallow } from 'enzyme'
import CartMenuItem from 'layouts/CoreLayout/components/Header/Navbar/UserMenu/CartMenuItem'
import { Link } from 'react-router'
import { CartIcon } from 'components/Icons'
import Badge from 'react-bootstrap/lib/Badge'

describe('(Component) CartMenuItem', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<CartMenuItem />)
  })

  it('should render react router link pointing to `/user/cart`', function () {
    expect(_wrapper.find(Link).prop('to')).to.equal('/user/cart')
  })

  it('should display cart icon inside link', function () {
    expect(_wrapper.find(Link).find(CartIcon)).to.have.length(1)
  })

  it('should not display badge by default', function () {
    expect(_wrapper.find(Link).find(Badge)).to.have.length(0)
  })

  it('should display cart products count if `count` is passed', function () {
    _wrapper = shallow(<CartMenuItem count={5} />)
    expect(_wrapper.find(Link).find(Badge).dive().text()).to.contain('5')
  })

  it('should display cart icon highlighted if `count` is passed', function () {
    _wrapper = shallow(<CartMenuItem count={5} />)
    expect(_wrapper.find(Link).find(CartIcon).prop('active')).to.be.ok
  })
})
