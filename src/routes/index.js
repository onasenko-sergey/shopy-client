import CoreLayout from 'layouts/CoreLayout'

export const createRoutes = (store) => {
  let routes = [
    {
      path: '/',
      component: CoreLayout
    }
  ]

  // use test page only in development
  /* istanbul ignore if */
  if (__DEV__) {
    const Test = require('./Test').default
    // do not use core layout for test
    const testRoute = {
      path: '/',
      childRoutes: [
        Test(store)
      ]
    }
    routes.push(testRoute)
  }

  return routes
}

export default createRoutes
