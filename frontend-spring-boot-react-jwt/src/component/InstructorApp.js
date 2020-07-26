import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import ListCoursesComponent from './ListCoursesComponent';
import CourseComponent from './CourseComponent';

class InstructorApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <h1>Instructor Application</h1>
          <Switch>
            <Route path="/" exact={true} component={ListCoursesComponent} />
            <Route path="/courses" exact={true} component={ListCoursesComponent} />
            <Route path="/courses/:id" component={CourseComponent} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default InstructorApp;
