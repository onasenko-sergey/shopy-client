import TestReducer from 'routes/Test/modules/Test'

describe('(Route) Test: (Redux Module) Test', function () {
  context('(Reducer)', function () {
    it('should be a function', function () {
      expect(TestReducer).to.be.a('function')
    })

    it('should return previous state if action is not handled', function () {
      const previousState = { val: 5 }
      expect(TestReducer(previousState, {})).to.eql(previousState)
    })
  })

  context('(Action Creator)', function () {

  })

  context('(Constants)', function () {

  })
})
