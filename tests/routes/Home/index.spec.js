describe('(Route) Home', () => {
  let testModule, testModuleInjector, _route
  let storeReducersMock, routeContainerMock, routeModuleMock
  let testStore = {}

  before(function () {
    testModuleInjector = require('inject!routes/Home')
    storeReducersMock = { injectReducer: sinon.stub() }
    routeContainerMock = { default: 'routeContainer' }
    routeModuleMock = { default: 'routeModule' }
    testModule = testModuleInjector({
      'store/reducers': storeReducersMock,
      './containers/Home': routeContainerMock,
      './modules/Home': routeModuleMock
    })
  })

  beforeEach(() => {
    _route = testModule.default(testStore)
  })

  it('should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  it('configuration route should be asynchronous', () => {
    expect(_route.getComponent).to.exist
    expect(_route.getComponent).to.be.a('function')
  })

  it('should return `Home` container', function (done) {
    _route.getComponent({}, function (err, container) {
      if (err) done()
      expect(container).to.equal(routeContainerMock.default)
      done()
    })
  })

  it('should inject `Home` module reducer', function (done) {
    _route.getComponent({}, function (err, container) {
      if (err) done()
      expect(storeReducersMock.injectReducer).to.have.been.calledWith(
        testStore,
        {
          key: 'home_page',
          reducer: routeModuleMock.default
        }
      )
      done()
    })
  })
})
