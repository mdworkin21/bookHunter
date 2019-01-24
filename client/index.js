import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './components/App'
import SingleView from './components/SingleView'
import Title from './components/Title'

ReactDOM.render(
  <Provider store={store}>
    <Title/>
    <Router>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/details/:id' exact component={SingleView} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)