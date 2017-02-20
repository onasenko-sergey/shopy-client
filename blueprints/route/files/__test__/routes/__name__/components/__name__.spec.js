import React from 'react'
import { shallow } from 'enzyme'
import <%= pascalEntityName %> from 'routes/<%= pascalEntityName %>/components/<%= pascalEntityName %>'

describe('(Route) <%= pascalEntityName %>: (Component) <%= pascalEntityName %>', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<<%= pascalEntityName %> />)
  })

  it('should exist', function () {
    expect(_wrapper.find(<%= pascalEntityName %>)).to.be.ok
  })
})
