import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import TransactionHistoryComponent from './component/TransactionHistoryComponent';
import HistoryItemComponent from './component/HistoryItemComponent';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <>
            <Switch>
              <Route path="/" exact={true} component={TransactionHistoryComponent} />
              <Route path="/history" exact={true} component={TransactionHistoryComponent} />
              <Route path="/historyItem/:id" component={HistoryItemComponent} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
