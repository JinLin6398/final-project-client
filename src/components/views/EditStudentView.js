/*==================================================
EditStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '1rem 1rem 0rem 0rem',
    padding: '3px'
  },
}));

const EditStudentView = (props) => {
    const { handleChange, handleSubmit, student } = props;
    const classes = useStyles();
  
    // Render the form with student details pre-filled
    return (
      <div style={{paddingTop: '10rem',}}>
        <h1 style={{fontStyle: 'italic', fontSize: '2.5rem',}}>Edit Student</h1>
  
        <div className={classes.root}>
          <div className={classes.formContainer}>
            <div className={classes.formTitle}>
              <Typography style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#11153e' }}>
                Edit Student
              </Typography>
            </div>
            <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
              <label style={{ color:'#11153e', fontWeight: 'bold' }}>Firstname: </label>
              <input 
                type="text" 
                name="firstname" 
                value={student.firstname || ''} 
                onChange={(e) => handleChange(e)} 
              />
              <br/><br/>

              <label style={{ color:'#11153e', fontWeight: 'bold' }}>Lastname: </label>
              <input 
                type="text" 
                name="lastname" 
                value={student.lastname || ''} 
                onChange={(e) => handleChange(e)} 
              />
              <br/><br/>
  
              <label style={{ color:'#11153e', fontWeight: 'bold' }}>Email: </label>
              <input 
                type="text" 
                name="email" 
                value={student.email || ''} 
                onChange={(e) => handleChange(e)} 
              />
              <br/><br/>

              <label style={{ color:'#11153e', fontWeight: 'bold' }}>Image Url: </label>
              <input 
                type="text" 
                name="imageUrl" 
                value={student.imageUrl || ''} 
                onChange={(e) => handleChange(e)} 
              />
              <br/><br/>
  
              <label style={{ color:'#11153e', fontWeight: 'bold' }}>GPA: </label>
              <input 
                type="text" 
                name="gpa" 
                value={student.gpa || ''} 
                onChange={(e) => handleChange(e)} 
              />
              <br/><br/>

              <label style={{ color:'#11153e', fontWeight: 'bold' }}>Campus ID: </label>
              <input 
                type="text" 
                name="campusId" 
                value={student.campusId || ''} 
                onChange={(e) => handleChange(e)} 
              />
              <br/><br/>
  
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
              <br/><br/>
            </form>
          </div>
        </div>
      </div>    
    );
  }
  
  export default EditStudentView;