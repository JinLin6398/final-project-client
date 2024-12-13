/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link, useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';
import whitebg from '../../images/whiteBackground.jpg';

// Take in props data to construct the component
const CampusView = (props) => {
  let history = useHistory();
  const {campus, deleteCampus, deleteStudent } = props;
  
  const handleClick = () => {
    deleteCampus(campus.id);
    history.goBack()
  };
  // Render a single Campus view with list of its students
  return (
    <div style={mainViewStyle}>
      <div style={campusInfoStyle}>
        <img 
          src={campus.imageUrl} 
          alt={`${campus.name}`} 
          style={{ width: "150px", height: "150px", borderRadius: "50%", borderStyle: 'solid', borderWidth: '2px', borderColor: '#090909',}} 
        />
        <h1 style={{fontStyle: 'italic', fontSize: '2.5rem', marginBottom: '0.1rem', }}>{campus.name}</h1>
        <p style={{fontStyle: 'italic'}}>{campus.address}</p>
        <p>{campus.description}</p>
        <br/>
        <Link to={`/editcampus/${campus.id}`}><Button variant="contained" color="primary" size="large">Edit Campus</Button></Link>
        <br/>
        <Button onClick={handleClick} variant="outlined" color="secondary" size="large">Delete Campus</Button>
        <br/>
        <Link to={`/newstudent`}><Button variant="outlined" color="primary" size="small">Add New Student</Button></Link>
      </div>
      <hr style={{width: '80%', marginBottom: '2rem', marginTop: '2rem'}}></hr>
      <div style={studentDisplayStyle}>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id} style={indvStudentStyle}>
              <Link to={`/student/${student.id}`}>
                  <Button variant="contained" color="primary" size="large" style={{fontSize: '1rem', fontWeight: '600'}}>{name}</Button>
              </Link>
              <br/>
              <img 
                  src={student.imageUrl} 
                  alt={`${name}`} 
                  style={{ width: "100px", height: "100px", borderRadius: "50%", borderStyle: 'solid', borderWidth: '2px', borderColor: '#090909', marginBottom: '2rem', marginTop: '2rem',}} 
              />
              <br/>
              <Button onClick={() => deleteStudent(student.id)} variant="outlined" color="secondary" size="medium">Delete Student</Button>         
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mainViewStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundImage:  `url(${whitebg})`,
  backgroundSize: 'auto',
  textAlign: 'center',
  width: '100vw',
  height: '100%',
  paddingTop: '10rem',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: 'rgb(240, 240, 240)',
  paddingBottom: '3rem'
}

const campusInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  border: '2px solid #000000',
  borderRadius: '1rem',
  padding: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
}

const studentDisplayStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  padding: '2rem',
}

const indvStudentStyle = {
  backgroundColor: 'white',
  border: '2px solid #000000',
  borderRadius: '0.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  margin: '2rem',
  minWidth: '13rem',
}

export default CampusView;