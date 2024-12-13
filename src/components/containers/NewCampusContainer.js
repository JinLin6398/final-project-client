/*==================================================
NewCampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { addCampusThunk } from '../../store/thunks';
class NewCampusContainer extends Component {
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

  // Validate input fields
  validate = (field, value) => {
    const errors = {};
    if (field === "name" && (!value || value.trim() === "")) {
      errors.name = "Campus name is required.";
    }
    if (field === "address" && (!value || value.trim() === "")) {
      errors.address = "Address is required.";
    }
    // Add additional field validations as needed
    return errors;
  };

  handleChange = (event) => {
    // Validate the field and update error state
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

    let campus = { 
      name: this.state.name, 
      imageUrl: this.state.imageUrl.trim() ? this.state.imageUrl : undefined, // Undefined triggers the defaultValue in Sequelize
      address: this.state.address, 
      description: this.state.description
    };

    let newCampus = await this.props.addCampus(campus);
      
    this.setState({
      name: "",
      imageUrl: "",
      address: "",
      description: "",
      redirect: true,
      redirectId: newCampus.id,
      errors: {} // Clear errors
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/campus/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <Header />
        <NewCampusView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors} // Pass errors to the view
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  addCampus: (campus) => dispatch(addCampusThunk(campus)),
});

export default connect(null, mapDispatch)(NewCampusContainer);
