import { injectReducer } from 'store/reducers'

describe('(Store) injectReducer helper function', function () {
  it('should replace store reducer with new one', function () {
    const store = {
      asyncReducers: {},
      replaceReducer: sinon.stub()
    }
    injectReducer(store, { key: 'test', reducer: () => {} })
    expect(store.replaceReducer).to.be.calledOnce
  })

  it('should skip if reducer already exists', function () {
    const store = {
      asyncReducers: { 'test': () => {} },
      replaceReducer: sinon.stub()
    }
    injectReducer(store, { key: 'test', reducer: () => {} })
    expect(store.replaceReducer).has.not.been.called
  })
})
