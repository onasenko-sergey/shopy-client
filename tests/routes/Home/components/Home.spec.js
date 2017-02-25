import React from 'react'
import { shallow } from 'enzyme'
import Home from 'routes/Home/components/Home'

describe('(Route) Home: (Component) Home', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Home />)
  })

  it('should exist', function () {
    expect(_wrapper.find(Home)).to.be.ok
  })
})
