import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles(() => ({
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
  errorText: {
    color: 'red',
    fontSize: '0.875rem',
    marginTop: '5px',
  },

}));

const EditCampusView = (props) => {
    const { handleChange, handleSubmit, campus, errors } = props;
    const classes = useStyles();
  
    // Render the form with campus details pre-filled
    return (
      <div style={{paddingTop: '10rem',}}>
        <h1 style={{fontStyle: 'italic', fontSize: '2.5rem',}}>Edit Campus</h1>
  
        <div className={classes.root}>
          <div className={classes.formContainer}>
            <div className={classes.formTitle}>
              <Typography style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#11153e' }}>
                Edit Campus
              </Typography>
            </div>
            <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
              <label style={{ color:'#11153e', fontWeight: 'bold' }}>Name: </label>
              <input 
                type="text" 
                name="name" 
                value={campus.name || ''} 
                onChange={(e) => handleChange(e)} 
                className={classes.inputField}
              />
              {errors.name && <div className={classes.errorText}>{errors.name}</div>}
              <br/><br/>
              <div>
                <label style={{ color:'#11153e', fontWeight: 'bold' }}>Image Url: </label>
                <input 
                  type="text" 
                  name="imageUrl" 
                  value={campus.imageUrl || ''} 
                  onChange={(e) => handleChange(e)} 
                  className={classes.inputField}
                />
              </div>
              <br/><br/>
              <div>
                <label style={{ color:'#11153e', fontWeight: 'bold' }}>Address: </label>
                <input 
                  type="text" 
                  name="address" 
                  value={campus.address || ''} 
                  onChange={(e) => handleChange(e)} 
                  className={classes.inputField}
                />
                {errors.address && <div className={classes.errorText}>{errors.address}</div>}
              </div>
              <br/><br/>
              <div>
                <label style={{ color:'#11153e', fontWeight: 'bold' }}>Description: </label>
                <textarea 
                  type="text" 
                  name="description" 
                  value={campus.description || ''} 
                  onChange={(e) => handleChange(e)} 
                  className={classes.inputField}
                  rows="4"
                />
              </div>
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
};

export default EditCampusView;
