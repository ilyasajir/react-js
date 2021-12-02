import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {Route} from 'react-router'
// import './assets/dist/css/style.css'
import './assets/scss/main.css'
import 'antd/dist/antd.css'
import store from './redux/store';
import Views from './views'
function App() {
  return (
      <Provider store={store}>
          <Router>
              <Switch>
                  <Route path="/" component={Views}/>
              </Switch>
          </Router>
      </Provider>
  );
}

export default App;
