import <%= pascalEntityName %>Reducer from 'routes/<%= pascalEntityName %>/modules/<%= pascalEntityName %>'

describe('(Route) <%= pascalEntityName %>: (Redux Module) <%= pascalEntityName %>', function () {
  context('(Reducer)', function () {
    it('should be a function', function () {
      expect(<%= pascalEntityName %>Reducer).to.be.a('function')
    })

    it('should return previous state if action is not handled', function () {
      const previousState = { val: 5 }
      expect(<%= pascalEntityName %>Reducer(previousState, {})).to.eql(previousState)
    })
  })

  context('(Action Creator)', function () {

  })

  context('(Constants)', function () {

  })
})
