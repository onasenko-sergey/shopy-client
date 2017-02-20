import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'test',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Test = require('./containers/Test').default
      const reducer = require('./modules/Test').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'test_page', reducer })

      /*  Return getComponent   */
      cb(null, Test)

    /* Webpack named bundle   */
    }, 'Test')
  }
})
