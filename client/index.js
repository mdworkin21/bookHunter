import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import {Provider} from 'react-redux'
import {Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './components/App'
import SingleView from './components/SingleView'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import Menu from './components/Menu';


const options = {
  position: 'bottom center',
  offset: '120px',
  transition: 'scale',
  type: 'error',
}

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
  <Provider store={store}>
    <Router>
      <div>
        <Menu width={screen.width}/>
        <Route exact path='/' component={App}/>
        <Route exact path='/details/:id' component={SingleView} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/profile' component={Profile} />
      </div>
    </Router>
  </Provider>
  </AlertProvider>,
  document.getElementById("root")
  )
