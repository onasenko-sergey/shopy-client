import React from 'react'
import { shallow } from 'enzyme'
import Logo from 'components/Logo'

describe('(Component) Logo', function () {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Logo />)
  })

  it('should render brand image', function () {
    expect(_wrapper.find('img')).to.have.length(1)
    expect(_wrapper.find('img').prop('alt')).to.equal('Shopy brand')
  })
})
