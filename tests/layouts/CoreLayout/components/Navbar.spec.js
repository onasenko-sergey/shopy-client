import React from 'react'
import { shallow } from 'enzyme'
import Navbar from 'layouts/CoreLayout/components/Header/Navbar'
import { Link } from 'react-router'
import Logo from 'components/Logo'
import PrimaryMenu from 'layouts/CoreLayout/components/Header/Navbar/PrimaryMenu'
import Collapse from 'react-bootstrap/lib/Collapse'
import Searchbar from 'layouts/CoreLayout/forms/Searchbar'
import UserMenu from 'layouts/CoreLayout/components/Header/Navbar/UserMenu'

describe('(Component) Navbar', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Navbar searchbarOpened />)
  })

  it('should render logo pointing to the root', function () {
    expect(_wrapper.find(Link).prop('to')).to.equal('/')
    expect(_wrapper.find(Link).find(Logo)).to.be.ok
  })

  it('should render primary menu', function () {
    expect(_wrapper.find(PrimaryMenu)).to.have.length(1)
  })

  it('should render user menu', function () {
    expect(_wrapper.find(UserMenu)).to.have.length(1)
  })

  it('should render searchbar inside collapse bootstrap component', function () {
    expect(_wrapper.find(Collapse).prop('in')).to.be.true
    expect(_wrapper.find(Collapse).find(Searchbar)).to.have.length(1)
  })
})
