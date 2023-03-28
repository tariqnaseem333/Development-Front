import React, { Fragment } from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./component/Navbar";
import AddEmployee from "./component/AddEmployee";
import ViewEmployee from "./component/ViewEmployee";
import Dialog from "./component/Dialog";
function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/add' component={AddEmployee} />
            <Route exact path='/view' component={ViewEmployee} />
            <Route exact path='/dialog' component={Dialog} />
            <Route path='*' render={() => <Redirect push to='/add' />} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;