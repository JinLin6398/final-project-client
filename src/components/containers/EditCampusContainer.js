import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView'; // Rename to EditCampusView
import { editCampusThunk, fetchCampusThunk } from '../../store/thunks';

class EditCampusContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "", 
      imageUrl: "",
      address: "",
      description: "",
      redirect: false, 
      redirectId: null
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

  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Submit the form data to update campus details
  handleSubmit = async event => {
    event.preventDefault();

    const campus = {
      id: this.props.match.params.id, // Use the campus ID from the URL
      name: this.state.name,
      imageUrl: this.state.imageUrl,
      address: this.state.address,
      description: this.state.description
    };

    // Update the campus via Redux Thunk
    let updatedCampus = await this.props.editCampus(campus);

    // Redirect to the updated campus page
    this.setState({
      redirect: true,
      redirectId: campus.id
    });
  }

  // Render the edit campus form
  render() {
    if(this.state.redirect) {
      return <Redirect to={`/campus/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <Header />
        <EditCampusView 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          campus={this.state} // Pass the state as 'campus' prop
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
