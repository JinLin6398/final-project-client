/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link, useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import whitebg from '../../images/whiteBackground.jpg';

const StudentView = (props) => {
  let history = useHistory();
  const { student, deleteStudent } = props;

  if (!student) {
    return <p>Loading student information...</p>;
  }

  const handleClick = () => {
    deleteStudent(student.id);
    history.goBack()
  };

  const { firstname, lastname, email, imageUrl, gpa, campusId, campus } = student;


  // Render a single Student view 
  return (
    <div style={mainViewStyle}>
      <div style={studentInfoStyle}>
        <div style={leftSideStyle}>
          <h1 style={{fontStyle: 'italic', fontSize: '2.5rem', marginBottom: '0.1rem', }}>{`${firstname} ${lastname}`}</h1>
          <img 
            src={imageUrl} 
            alt={`${firstname} ${lastname}`} 
            style={{ width: "10rem", height: "10rem", borderRadius: "50%", borderStyle: 'solid', borderWidth: '2px', borderColor: '#090909', marginBottom: '2rem', marginTop: '2rem',}} 
          />
        </div>
        <div style={rightSideStyle}>
          <p style={{fontSize: '1.5rem'}}><strong style={{fontSize: '1.5rem'}}>Email:</strong> {email}</p>
          <p style={{fontSize: '1.5rem'}}><strong style={{fontSize: '1.5rem'}}>GPA:</strong> {gpa ? gpa : "N/A"}</p>
          <p>
            <strong style={{fontSize: '1.5rem'}}>Attends:</strong>{" "}
            <p></p>
            {campus ? (
              <Link to={`/campus/${campusId}`}><Button variant="contained" color="primary" size="large" style={{fontSize: '1.25rem', fontWeight: '600'}}>{campus.name}</Button></Link>
            ) : (
              "This student is not enrolled in any campus."
            )}
          </p>
          <hr style={{width: '80%', marginBottom: '0.5rem', marginTop: '0.5rem'}}></hr>
          <Link to={`/editstudent/${student.id}`}><Button variant="contained" color="inherit" size="medium" >Edit Student</Button></Link>
          <br/><br/>
          <Button onClick={handleClick} variant="outlined" color="secondary" size="small">Delete Student</Button>
        </div>
      </div>
    </div>
  );
};

const mainViewStyle = {
  display: 'flex',
  backgroundImage:  `url(${whitebg})`,
  backgroundSize: 'auto',
  textAlign: 'center',
  width: '100vw',
  height: '100%',
  paddingTop: '15rem',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(240, 240, 240)',
  paddingBottom: '3rem'
}

const studentInfoStyle = {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'white',
  border: '2px solid #000000',
  borderRadius: '2rem',
  padding: '3rem',
}

const leftSideStyle = {
  marginRight: '4rem'
}

const rightSideStyle = {
  marginLeft: '4rem',
}

export default StudentView;