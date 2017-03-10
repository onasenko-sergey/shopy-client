import React from 'react'
import { shallow } from 'enzyme'
import SecondaryMenu from 'layouts/CoreLayout/components/Footer/SecondaryMenu'
import DisabledLink from 'components/DisabledLink'

describe('(Component) SecondaryMenu', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<SecondaryMenu />)
  })

  it('should render set of disabled links', function () {
    expect(_wrapper.find(DisabledLink)).to.have.length.at.least(5)
  })
})
