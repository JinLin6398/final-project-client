import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView'; // Rename to EditStudentView
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
    redirectId: null
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

  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Submit the form data to update student details
  handleSubmit = async event => {
    event.preventDefault();

    const student = {
      id: this.props.match.params.id, // Use the student ID from the URL
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      imageUrl: this.state.imageUrl,
      gpa: this.state.gpa,
      campusId: this.state.campusId
    };

    // Update the student via Redux Thunk
    let updatedStudent = await this.props.editStudent(student);

    // Redirect to the updated student page
    this.setState({
      redirect: true,
      redirectId: student.id
    });
  }

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
          student={this.state} // Pass the state as 'student' prop
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
