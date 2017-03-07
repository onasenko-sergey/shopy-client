import React from 'react'
import { shallow } from 'enzyme'
import PrimaryMenu from 'layouts/CoreLayout/components/Header/Navbar/PrimaryMenu'
import { createMemoryHistory, Router, Route, RouterContext } from 'react-router'
import DisabledLink from 'components/DisabledLink'

describe('(Component) PrimaryMenu', function () {
  let _wrapper

  beforeEach(() => {
    // react-router 'Link' component internally uses some methods depending on router context to build 'href'
    _wrapper = shallow(
      <Router history={createMemoryHistory('/')}>
        <Route path='/' component={() => (<PrimaryMenu className='test' />)} />
      </Router>
    )
  })

  it('should render list of navigation links', function () {
    expect(_wrapper.render().find('ul>li>a')).to.have.length(5)
  })

  it('should contain home route', function () {
    expect(_wrapper.render().find('a[href="/"]')).to.have.length(1)
    expect(_wrapper.render().find('a[href="/"]').text()).to.contain('Home')
  })

  it('should contain products route', function () {
    expect(_wrapper.render().find('a[href="/products"]')).to.have.length(1)
    expect(_wrapper.render().find('a[href="/products"]').text()).to.contain('Products')
  })

  it('should contain 3 disabled links', function () {
    expect(_wrapper.find(RouterContext).dive().dive().dive().find(DisabledLink)).to.have.length(3)
  })

  it('should join class names', function () {
    expect(_wrapper.find(RouterContext).dive().dive().find(PrimaryMenu).hasClass('test')).to.be.ok
  })
})
