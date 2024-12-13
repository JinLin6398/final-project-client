import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import { editCampusThunk, fetchCampusThunk } from '../../store/thunks';

class EditCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      address: "",
      description: "",
      redirect: false,
      redirectId: null,
      errors: {} // Add error state
    };
  }

    // Fetch campus data when the component is mounted
    async componentDidMount() {
      const campusId = this.props.match.params.id; // Assuming the id is in the URL
      await this.props.fetchCampus(campusId);
  
      // Pre-populate state with the fetched campus data
      const { campus } = this.props;
      if (campus) {
        this.setState({
          name: campus.name,
          imageUrl: campus.imageUrl,
          address: campus.address,
          description: campus.description
        });
      }
    }

  // Validate input fields
  validate = (field, value) => {
    const errors = {};
    if (field === "name" && (!value || value.trim() === "")) {
      errors.name = "Campus name is required.";
    }
    if (field === "address" && (!value || value.trim() === "")) {
      errors.address = "Address is required.";
    }
    // Add more validation as needed
    return errors;
  };
  
  // Capture input data when it is entered
  handleChange = (event) => {
    const fieldErrors = this.validate(event.target.name, event.target.value);

    this.setState((prevState) => ({
      [event.target.name]: event.target.value,
      errors: { ...prevState.errors, ...fieldErrors }
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    // Validate all fields before submission
    const errors = {
      ...this.validate("name", this.state.name),
      ...this.validate("address", this.state.address)
    };

    if (Object.keys(errors).length > 0) {
      this.setState({ errors }); // Update errors in state
      return; // Do not submit if there are validation errors
    }

    const campus = {
      id: this.props.match.params.id,
      name: this.state.name,
      imageUrl: this.state.imageUrl.trim() ? this.state.imageUrl : undefined,
      address: this.state.address,
      description: this.state.description
    };

    await this.props.editCampus(campus);

    this.setState({
      redirect: true,
      redirectId: campus.id,
      errors: {} // Clear errors
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/campus/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <Header />
        <EditCampusView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          campus={this.state}
          errors={this.state.errors} // Pass errors to the view
        />
      </div>
    );
  }
}



const mapState = (state) => {
  return {
    campus: state.campus // Assuming you store the fetched campus in the Redux state
  };
};

const mapDispatch = (dispatch) => {
  return {
    editCampus: (campus) => dispatch(editCampusThunk(campus)),
    fetchCampus: (id) => dispatch(fetchCampusThunk(id))
  };
}

export default connect(mapState, mapDispatch)(EditCampusContainer);
