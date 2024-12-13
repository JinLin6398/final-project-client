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
    borderRadius: '5px 5px 0px 0px',
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

  return (
    <div>
      <h1>Edit Campus</h1>
      <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', 
            fontSize: '20px', color: '#11153e' }}>
            Edit Campus
          </Typography>
        </div>

        <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Name: </label>
            <input 
              type="text" 
              name="name" 
              value={campus.name || ''} 
              onChange={handleChange}
              className={classes.inputField}
            />
            {errors.name && <div className={classes.errorText}>{errors.name}</div>}
            <br />
            <br />
          <div>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image Url: </label>
            <input 
              type="text" 
              name="imageUrl" 
              value={campus.imageUrl || ''} 
              onChange={handleChange}
              className={classes.inputField}
            />
          </div>
          <br />
          <div>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Address: </label>
            <input 
              type="text" 
              name="address" 
              value={campus.address || ''} 
              onChange={handleChange}
              className={classes.inputField}
            />
            {errors.address && <div className={classes.errorText}>{errors.address}</div>}
          </div>
          <br />
          <div>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description: </label>
            <textarea 
              name="description" 
              value={campus.description || ''} 
              onChange={handleChange}
              className={classes.inputField}
              rows="4"
            />
          </div>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
      </div>
    </div>    
  );
};

export default EditCampusView;
