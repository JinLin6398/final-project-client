import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView'; 
import { editStudentThunk, fetchStudentThunk } from '../../store/thunks';

class EditStudentContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    firstname: "",
    lastname: "",
    email: "",
    imageUrl: "",
    gpa: null,
    campusId: null,
    redirect: false,
    redirectId: null,
    errors: {} // Add error state
    };
  }

  // Fetch student data when the component is mounted
  async componentDidMount() {
    const studentId = this.props.match.params.id; // Assuming the id is in the URL
    await this.props.fetchStudent(studentId);

    // Pre-populate state with the fetched student data
    const { student } = this.props;
    if (student) {
      this.setState({
        firstname: student.firstname,
        lastname: student.lastname,
        email: student.email,
        imageUrl: student.imageUrl,
        gpa: student.gpa,
        campusId: student.campusId
      });
    }
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

  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Submit the form data to update student details
  handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    const errors = this.validateFields();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    let student = {
      id: this.props.match.params.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      imageUrl: this.state.imageUrl.trim() ? this.state.imageUrl : undefined,
      gpa: this.state.gpa,
      campusId: this.state.campusId,
    };

      await this.props.editStudent(student);

      this.setState({
        redirect: true,
        redirectId: student.id,
        errors: {}, // Clear errors on success
      });

  };

  // Render the edit student form
  render() {
    if(this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <Header />
        <EditStudentView 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          student={this.state}
          errors={this.state.errors} // Pass errors to the view
        />
      </div>          
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student // Assuming you store the fetched student in the Redux state
  };
};

const mapDispatch = (dispatch) => {
  return {
    editStudent: (student) => dispatch(editStudentThunk(student)),
    fetchStudent: (id) => dispatch(fetchStudentThunk(id))
  };
}

export default connect(mapState, mapDispatch)(EditStudentContainer);
