import React from 'react'
import { shallow } from 'enzyme'
import UserMenuItem from 'layouts/CoreLayout/components/Header/Navbar/UserMenu/UserMenuItem'
import { UserIcon } from 'components/Icons'
import Dropdown from 'react-bootstrap/lib/Dropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

describe('(Component) UserMenuItem', function () {
  let _wrapper

  it('should require `isAuthenticated` prop', function () {
    sinon.stub(console, 'error')
    _wrapper = shallow(<UserMenuItem />)
    expect(console.error.lastCall.args[0].indexOf('The prop `isAuthenticated` is marked as required')).to.be.at.least(0)
    console.error.restore()
  })

  context('if not authenticated', function () {
    before(function () {
      _wrapper = shallow(<UserMenuItem isAuthenticated={false} />)
    })

    it('should render link pointing to `/user/auth`', function () {
      expect(_wrapper.find('a').prop('href')).to.contain('/user/auth')
    })

    it('should render user icon inside link', function () {
      expect(_wrapper.find('a').find(UserIcon)).to.have.length(1)
    })
  })

  context('if authenticated', function () {
    before(function () {
      _wrapper = shallow(<UserMenuItem isAuthenticated />)
    })

    it('should render dropdown menu', function () {
      expect(_wrapper.find(Dropdown)).to.have.length(1)
      expect(_wrapper.find(Dropdown).find(Dropdown.Menu)).to.have.length(1)
      expect(_wrapper.find(Dropdown).find(Dropdown.Menu).find(MenuItem)).to.have.length.at.least(1)
    })

    it('should render highlighted user icon as a toggle', function () {
      expect(_wrapper.find(Dropdown).find(Dropdown.Toggle).find(UserIcon)).to.have.length(1)
      expect(_wrapper.find(Dropdown).find(Dropdown.Toggle).find(UserIcon).prop('active')).to.be.ok
    })

    it('should render `profile` menu item', function () {
      expect(_wrapper.find(Dropdown).find(Dropdown.Menu).render().text()).to.contain('Profile')
    })

    it('should render `history` menu item', function () {
      expect(_wrapper.find(Dropdown).find(Dropdown.Menu).render().text()).to.contain('History')
    })

    it('should render `logout` menu item', function () {
      expect(_wrapper.find(Dropdown).find(Dropdown.Menu).render().text()).to.contain('Logout')
    })
  })
})
