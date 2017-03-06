import React from 'react'
import { shallow } from 'enzyme'
import SearchMenuItem from 'layouts/CoreLayout/components/Header/Navbar/UserMenu/SearchMenuItem'
import { SearchIcon } from 'components/Icons'

describe('(Component) SearchMenuItem', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<SearchMenuItem />)
  })

  it('should render link pointing to `/search`', function () {
    expect(_wrapper.find('a').prop('href')).to.equal('/search')
  })

  it('should display search icon inside of link', function () {
    expect(_wrapper.find('a').find(SearchIcon)).to.have.length(1)
  })
})
