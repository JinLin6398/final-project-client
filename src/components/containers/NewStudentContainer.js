/*==================================================
NewStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk } from '../../store/thunks';

class NewStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      imageUrl: "",
      gpa: null,
      campusId: props.campusId || null,
      redirect: false,
      redirectId: null,
      errors: {} // New field to track validation errors
    };
  }

  // Validation logic for input fields
  validateFields = () => {
    const errors = {};
    if (!this.state.firstname.trim()) {
      errors.firstname = "First name is required.";
    }
    if (!this.state.lastname.trim()) {
      errors.lastname = "Last name is required.";
    }
    if (!this.state.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      errors.email = "Invalid email format.";
    }
    if (this.state.gpa !== null && (this.state.gpa < 0.0 || this.state.gpa > 4.0)) {
      errors.gpa = "GPA must be between 0.0 and 4.0.";
    }
    return errors;
  };

  // Handle form input changes
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload


    const errors = this.validateFields();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    let student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      imageUrl: this.state.imageUrl.trim() ? this.state.imageUrl : undefined,
      gpa: this.state.gpa,
      campusId: this.state.campusId,
    };

      let newStudent = await this.props.addStudent(student);

      this.setState({
        firstname: "",
        lastname: "",
        email: "",
        imageUrl: "",
        gpa: null,
        campusId: null,
        redirect: true,
        redirectId: newStudent.id,
        errors: {}, // Clear errors on success
      });

  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <Header />
        <NewStudentView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors} // Pass errors to the view
         />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student)),
  };
};

export default connect(null, mapDispatch)(NewStudentContainer);
