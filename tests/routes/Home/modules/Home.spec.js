import HomeReducer from 'routes/Home/modules/Home'

describe('(Route) Home: (Redux Module) Home', function () {
  context('(Reducer)', function () {
    it('should be a function', function () {
      expect(HomeReducer).to.be.a('function')
    })

    it('should return previous state if action is not handled', function () {
      const previousState = { val: 5 }
      expect(HomeReducer(previousState, {})).to.eql(previousState)
    })
  })

  context('(Action Creator)', function () {

  })

  context('(Constants)', function () {

  })
})
