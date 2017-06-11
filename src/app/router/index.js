import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import store from '../redux/store';

import WithNotification from '../containers/Notification';
import Home from '../containers/Home';
import Users from '../containers/Users';

const RenderLink = ({ url, name }) =>
  <li className="navigation-link">
    <NavLink
      to={{ pathname: url }}
      activeStyle={{ color: '#363636' }}
    >
      { name }
    </NavLink>
  </li>;

injectTapEventPlugin();

export default class AppRouter extends React.Component {
  render() {
    return (
    <MuiThemeProvider>
      <Provider store={store}>
        <WithNotification>
          <Router>
            <div className="app">
              <div className="navigation-wrapper">
                <ul className="app-navigation-list">
                  <RenderLink url="/" name="Home"/>
                  <RenderLink url="/users" name="Users"/>
                </ul>
              </div>

              <div className="app-wrapper">
                <div className="app-content-wrapper">
                  <div className="app-content">
                    <Route exact path={`/`} component={Home}/>
                    <Route path={`/users`} component={Users}/>
                  </div>
                </div>
              </div>
            </div>
          </Router>
        </WithNotification>
      </Provider>
    </MuiThemeProvider>
    );
  }
}

