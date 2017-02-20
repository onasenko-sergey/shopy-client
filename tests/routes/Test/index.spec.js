describe('(Route) Test', () => {
  let testModule, testModuleInjector, _route
  let storeReducersMock, routeContainerMock, routeModuleMock
  let testStore = {}

  before(function () {
    testModuleInjector = require('inject!routes/Test')
    storeReducersMock = { injectReducer: sinon.stub() }
    routeContainerMock = { default: 'routeContainer' }
    routeModuleMock = { default: 'routeModule' }
    testModule = testModuleInjector({
      'store/reducers': storeReducersMock,
      './containers/Test': routeContainerMock,
      './modules/Test': routeModuleMock
    })
  })

  beforeEach(() => {
    _route = testModule.default(testStore)
  })

  it('should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  it('configuration should contain path `test`', () => {
    expect(_route.path).to.equal('test')
  })

  it('configuration route should be asynchronous', () => {
    expect(_route.getComponent).to.exist
    expect(_route.getComponent).to.be.a('function')
  })

  it('should return `Test` container', function (done) {
    _route.getComponent({}, function (err, container) {
      if (err) done()
      expect(container).to.equal(routeContainerMock.default)
      done()
    })
  })

  it('should inject `Test` module reducer', function (done) {
    _route.getComponent({}, function (err, container) {
      if (err) done()
      expect(storeReducersMock.injectReducer).to.have.been.calledWith(
        testStore,
        {
          key: 'test_page',
          reducer: routeModuleMock.default
        }
      )
      done()
    })
  })
})
