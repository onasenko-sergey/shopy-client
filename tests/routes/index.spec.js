import createRoutes from 'routes'

describe('(Routes) createRoutes function', function () {
  let routes

  before(function () {
    routes = createRoutes({})
  })

  it('should return array of route configuration objects', function () {
    expect(routes).to.be.an('array')
    routes.forEach(function (route) {
      expect(route).to.contain.all.keys('path')
    })
  })
})
