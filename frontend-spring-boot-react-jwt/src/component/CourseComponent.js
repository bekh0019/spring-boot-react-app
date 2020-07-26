import React, { Component } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';

import CourseDataService from '../service/CourseDataService';

const propTypes = {
  history: PropTypes.instanceOf(Object),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

class CourseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      description: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  onSubmit = (values) => {
    const course = {
      id: this.state.id,
      description: values.description,
      targetDate: values.targetDate,
    };

    if (+this.state.id === -1) {
      CourseDataService.createCourse(course)
        .then(() => this.props.history.push('/courses'));
    } else {
      CourseDataService.updateCourse(this.state.id, course)
        .then(() => this.props.history.push('/courses'));
    }
  }

  validate = (values) => {
    const errors = {};
    if (!values.description) {
      errors.description = 'Enter a Description';
    } else if (values.description.length < 5) {
      errors.description = 'Enter atleast 5 Characters in Description';
    }

    return errors;
  }

  componentDidMount() {
    if (this.state.id === -1) {
      return;
    }

    CourseDataService.retrieveCourse(this.state.id)
      .then((response) => this.setState({
        description: response.data.description,
      }));
  }

  render() {
    const { description = '', id = '' } = this.state;

    return (
      <div>
        <h3>Course</h3>
        <div className="container">
          <Formik
            initialValues={{ id, description }}
            onSubmit={this.onSubmit}
            validate={this.validate}
            enableReinitialize={true}
          >
            {
                            () => (
                              <Form>
                                <ErrorMessage
                                  name="description"
                                  component="div"
                                  className="alert alert-warning"
                                />
                                <fieldset className="form-group">
                                  <label>Id</label>
                                  <Field className="form-control" type="text" name="id" disabled={true} />
                                </fieldset>
                                <fieldset className="form-group">
                                  <label>Description</label>
                                  <Field className="form-control" type="text" name="description" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                              </Form>
                            )
                        }
          </Formik>

        </div>
      </div>
    );
  }
}
CourseComponent.propTypes = propTypes;

export default CourseComponent;
