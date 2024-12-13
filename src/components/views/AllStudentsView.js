/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import whitebg from '../../images/whiteBackground.jpg';

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
    );
  }
  
  // If there is at least one student, render All Students view 
  return (
    <div style={mainViewStyle}>
      <h1>All Students</h1>
      <div style={secondViewStyle}>
        {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
            return (
              <div key={student.id} style={studentElementStyle}>
                <Link to={`/student/${student.id}`} style={buttonStyle}>
                  <Button variant="contained" color="primary" style={linkStyle}>{name}</Button>
                </Link>
                <h2>Student ID: <div style={{color: 'lightgreen'}}>{`${student.id}`}</div></h2>
                <img 
                  src={student.imageUrl} 
                  alt={`${name}`} 
                  style={{ width: "150px", height: "150px", borderRadius: "50%", borderStyle: 'solid', borderWidth: '2px', borderColor: '#090909',}} 
                />
                <br/>
                <Button onClick={() => deleteStudent(student.id)} variant="outlined" color="secondary">Delete</Button>
                <hr/>
              </div>
            );
          }
        )}
      </div>
      <br/>
      <hr style={{width: '80%', marginBottom: '3rem'}}></hr>
      <Link to={`/newstudent`}><Button variant="contained" color="inherit" size="large">Add New Student</Button></Link>
    </div>
  );
};

const mainViewStyle = {
  backgroundImage:  `url(${whitebg})`,
  backgroundSize: 'auto',
  textAlign: 'center',
  width: '100vw',
  height: '100%',
  paddingTop: '6rem',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(240, 240, 240)',
  paddingBottom: '3rem'
}

const secondViewStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
}

const studentElementStyle = {
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '0.5rem',
  backgroundColor: 'white',
  border: '1px solid #000000',
  boxShadow: '3px 3px 8px rgb(195, 195, 195)',
  padding: '1rem 2rem 1rem 2rem',
  margin: '1rem 3rem 1rem 3rem',
  minWidth: '17rem',
}

const buttonStyle = {
  marginRight: '20px',
  marginLeft: '20px',
}

const linkStyle = {
  textDecoration: 'none',
  padding: '10px 15px 10px 15px',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
}

export default AllStudentsView;