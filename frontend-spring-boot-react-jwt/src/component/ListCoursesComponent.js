import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CourseDataService from '../service/CourseDataService';

const propTypes = {
  history: PropTypes.instanceOf(Object),
};

class ListCoursesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      message: null,
    };
  }

  componentDidMount() {
    this.refreshCourses();
  }

  updateCourseClicked(id) {
    this.props.history.push(`/courses/${id}`);
  }

  addCourseClicked = () => {
    this.props.history.push(`/courses/${-1}`);
  }

  deleteCourseClicked(id) {
    CourseDataService.deleteCourse(id)
      .then(
        () => {
          this.setState({ message: `Delete of course ${id} Successful` });
          this.refreshCourses();
        }
      );
  }

  refreshCourses() {
    CourseDataService.retrieveAllCourses()
      .then(
        (response) => {
          this.setState({ courses: response.data });
        }
      );
  }

  render() {
    return (
      <div className="container">
        <h3>All Courses</h3>
        {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {
                            this.state.courses.map(
                              (course) =>
                                <tr key={course.id}>
                                  <td>{course.id}</td>
                                  <td>{course.description}</td>
                                  <td><button type="button" className="btn btn-warning" onClick={() => this.deleteCourseClicked(course.id)}>Delete</button></td>
                                  <td><button type="button" className="btn btn-success" onClick={() => this.updateCourseClicked(course.id)}>Update</button></td>
                                </tr>
                            )
                        }
            </tbody>
          </table>
        </div>
        <div className="row">
          <button type="button" className="btn btn-success" onClick={this.addCourseClicked}>Add</button>
        </div>
      </div>
    );
  }
}

ListCoursesComponent.propTypes = propTypes;

export default ListCoursesComponent;
