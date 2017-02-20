import React from 'react'
import { shallow } from 'enzyme'
import Test from 'routes/Test/components/Test'

describe('(Route) Test: (Component) Test', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Test />)
  })

  it('should exist', function () {
    expect(_wrapper.find(Test)).to.be.ok
  })
})
