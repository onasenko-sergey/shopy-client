import React from 'react'
import { shallow } from 'enzyme'
import UserMenu from 'layouts/CoreLayout/components/Header/Navbar/UserMenu'
import SearchMenuItem from 'layouts/CoreLayout/components/Header/Navbar/UserMenu/SearchMenuItem'
import UserMenuItem from 'layouts/CoreLayout/components/Header/Navbar/UserMenu/UserMenuItem'
import CartMenuItem from 'layouts/CoreLayout/components/Header/Navbar/UserMenu/CartMenuItem'

describe('(Component) UserMenu', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<UserMenu className='test' />)
  })

  it('should render inline list of items', function () {
    expect(_wrapper.find('ul').hasClass('list-inline')).to.be.ok
  })

  it('should render search menu item', function () {
    expect(_wrapper.find(SearchMenuItem)).to.have.length(1)
  })

  it('should render user menu item', function () {
    expect(_wrapper.find(UserMenuItem)).to.have.length(1)
  })

  it('should render cart menu item', function () {
    expect(_wrapper.find(CartMenuItem)).to.have.length(1)
  })

  it('should join classNames', function () {
    expect(_wrapper.find('ul').hasClass('test')).to.be.ok
  })
})
