import React from 'react'
import { shallow } from 'enzyme'
import DisabledLink from 'components/DisabledLink'

describe('(Component) DisabledLink', function () {
  let _wrapper

  it('should render anchor tag with `disabled-link` class', function () {
    _wrapper = shallow(<DisabledLink>test</DisabledLink>)
    expect(_wrapper.find('a').hasClass('disabled-link')).to.be.ok
  })

  it('should render children elements', function () {
    _wrapper = shallow(<DisabledLink><span>test</span></DisabledLink>)
    expect(_wrapper.find('a').text()).to.equal('test')
    expect(_wrapper.find('a').find('span').text()).to.equal('test')
  })

  it('should throw an exception if no children specified', function () {
    sinon.stub(console, 'error')
    _wrapper = shallow(<DisabledLink />)
    expect(console.error.lastCall.args[0].indexOf('The prop `children` is marked as required')).to.be.at.least(0)
    console.error.restore()
  })

  it('should join provided with props class', function () {
    _wrapper = shallow(<DisabledLink className='test'>test</DisabledLink>)
    expect(_wrapper.find('a').hasClass('test')).to.be.ok
  })

  it('should transit props', function () {
    _wrapper = shallow(<DisabledLink href='test'>test</DisabledLink>)
    expect(_wrapper.find('a').prop('href')).to.equal('test')
  })

  it('should execute provided `onClick` handler', function () {
    const clickHandler = sinon.stub()
    _wrapper = shallow(<DisabledLink onClick={clickHandler}>test</DisabledLink>)
    const event = { test: 'test' }
    _wrapper.simulate('click', event)
    expect(clickHandler).to.be.calledOnce
    expect(clickHandler).to.be.calledWith(event)
  })

  it('should prevent redirect if click handler not specified', function () {
    _wrapper = shallow(<DisabledLink>test</DisabledLink>)
    const event = { preventDefault: sinon.stub() }
    _wrapper.simulate('click', event)
    expect(event.preventDefault).to.be.calledOnce
  })
})
