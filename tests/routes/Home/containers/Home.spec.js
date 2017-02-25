describe('(Route) Home: (Container) Home', () => {
  let testModuleInjector
  let reactReduxMock, connectResultMock, componentMock

  before(function () {
    testModuleInjector = require('inject!routes/Home/containers/Home')
    connectResultMock = sinon.stub()
    reactReduxMock = { connect: sinon.stub().returns(connectResultMock) }
    componentMock = 'routeComponent'
    testModuleInjector({
      'react-redux': reactReduxMock,
      '../components/Home': componentMock
    })
  })

  it('should wrap `Home` component', () => {
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
