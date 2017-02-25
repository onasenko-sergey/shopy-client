import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'

class AppContainer extends Component {
  static propTypes = {
    routes: React.PropTypes.array.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate /* istanbul ignore next */ () {
    return false
  }

  render /* istanbul ignore next */ () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <Router history={browserHistory} children={routes} />
      </Provider>
    )
  }
}

export default AppContainer
