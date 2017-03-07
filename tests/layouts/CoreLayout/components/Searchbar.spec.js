import React from 'react'
import { shallow, mount } from 'enzyme'
import Searchbar from 'layouts/CoreLayout/components/Header/Navbar/Searchbar'
import { reduxForm } from 'redux-form'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

describe('(Component) Searchbar', function () {
  before(function () {
    sinon.stub(console, 'error')
  })

  after(function () {
    console.error.restore()
  })

  beforeEach(() => {
    shallow(<Searchbar />)
  })

  it('should require submit and reset handlers', function () {
    expect(console.error.firstCall.args[0].indexOf('The prop `handleSubmit` is marked as required')).to.be.at.least(0)
    expect(console.error.secondCall.args[0].indexOf('The prop `reset` is marked as required')).to.be.at.least(0)
  })
})

describe('(Component) Searchbar', function () {
  let _wrapper, handleSubmit, reset

  beforeEach(() => {
    handleSubmit = sinon.stub()
    reset = sinon.stub()
    _wrapper = shallow(<Searchbar className='test' handleSubmit={handleSubmit} reset={reset} />)
  })

  it('should render search form', function () {
    expect(_wrapper.find('form').find('.form-group').prop('role')).to.equal('search')
  })

  it('should join classNames', function () {
    expect(_wrapper.find('form').hasClass('test')).to.be.ok
  })

  it('should call handleSubmit on submit', function () {
    _wrapper.find('form').simulate('submit', null)
    expect(handleSubmit).to.be.calledOnce
  })

  it('should call reset on `x` click', function () {
    const node = _wrapper.find('form').find('.form-group').find('.input-group-addon')
    expect(node.text()).to.equal('x')
    node.simulate('click', null)
    expect(reset).to.be.calledOnce
  })
})

describe('(Component) Searchbar', function () {
  let _wrapper, handleSubmit, reset

  beforeEach(() => {
    handleSubmit = sinon.stub()
    reset = sinon.stub()
    // as far as "Field must be inside a component decorated with reduxForm()"
    const SearchForm = reduxForm({ form: 'SearchForm' })(Searchbar)
    const store = configureStore([])({})
    _wrapper = mount(
      <Provider store={store}>
        <SearchForm handleSubmit={handleSubmit} reset={reset} />
      </Provider>
    )
  })

  it('should submit form on `Enter`', function () {
    // in a form with no submit buttons, implicit submission will be done if only one input is present
    expect(_wrapper.find('input')).to.have.length(1)
  })
})

