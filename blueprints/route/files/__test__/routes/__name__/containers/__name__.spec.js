describe('(Route) <%= pascalEntityName %>: (Container) <%= pascalEntityName %>', () => {
  let testModuleInjector
  let reactReduxMock, connectResultMock, componentMock

  before(function () {
    testModuleInjector = require('inject!routes/<%= pascalEntityName %>/containers/<%= pascalEntityName %>')
    connectResultMock = sinon.stub()
    reactReduxMock = { connect: sinon.stub().returns(connectResultMock) }
    componentMock = 'routeComponent'
    testModuleInjector({
      'react-redux': reactReduxMock,
      '../components/<%= pascalEntityName %>': componentMock
    })
  })

  it('should wrap `<%= pascalEntityName %>` component', () => {
    expect(connectResultMock).to.be.calledOnce
    expect(connectResultMock).to.be.calledWith(componentMock)
  })

  it('should not provide any state prop', () => {
    expect(reactReduxMock.connect).to.be.calledOnce
    const mapStateToProps = reactReduxMock.connect.args[0][0]
    const testState = {}
    const providedState = mapStateToProps(testState)
    expect(providedState).to.eql({})
  })
})
