import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from './ListPage.js';
import CreatePage from './CreatePage.js';
import Header from './Header.js';
import DetailPage from './DetailPage.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/cpuData"
              exact
              render={(routerProps) => <ListPage {...routerProps} />}
            />
            <Route
              path="/create"
              exact
              render={(routerProps) => <CreatePage {...routerProps} />}
            />
            <Route
              path="/cpuData/:cpuId"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}