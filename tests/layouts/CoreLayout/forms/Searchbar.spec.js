describe('(Form) Searchbar', () => {
  let testModuleInjector, testModule, reduxFormResultMock, reduxFormtMock, componentMock, validate

  before(function () {
    testModuleInjector = require('inject!layouts/CoreLayout/forms/Searchbar')
    reduxFormResultMock = sinon.stub()
    reduxFormtMock = { 'reduxForm': sinon.stub().returns(reduxFormResultMock) }
    componentMock = 'SearchbarView'
    testModule = testModuleInjector({
      'redux-form': reduxFormtMock,
      '../components/Header/Navbar/Searchbar': componentMock
    })
    validate = testModule.validate
  })

  it('should wrap searchbar component', () => {
    expect(reduxFormResultMock).to.be.calledOnce
    expect(reduxFormResultMock).to.be.calledWith(componentMock)
  })

  it('should always pass validation', () => {
    expect(validate()).to.eql({})
  })
})
