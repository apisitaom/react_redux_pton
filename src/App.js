import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const EmployeeList = React.lazy(() => import('./View/Page/Employee/List'))

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/" name = "Employee Page" render={props => <EmployeeList {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}
