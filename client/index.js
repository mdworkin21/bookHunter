import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './components/App'
import SingleView from './components/SingleView'
import SignUp from './components/SignUp'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/details/:id' component={SingleView} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
  )
