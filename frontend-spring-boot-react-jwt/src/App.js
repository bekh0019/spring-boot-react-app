import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import ListCoursesComponent from './component/ListCoursesComponent';
import CourseComponent from './component/CourseComponent';
import TransactionHistoryComponent from './component/TransactionHistoryComponent';
import HistoryItemComponent from './component/HistoryItemComponent';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <>
            <Switch>
              <Route path="/" exact={true} component={ListCoursesComponent} />
              <Route path="/courses" exact={true} component={ListCoursesComponent} />
              <Route path="/history" exact={true} component={TransactionHistoryComponent} />
              <Route path="/courses/:id" component={CourseComponent} />
              <Route path="/historyItem/:id" component={HistoryItemComponent} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
