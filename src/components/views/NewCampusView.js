/*==================================================
NewCampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new campus page.
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
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));
const NewCampusView = (props) => {
  const { handleChange, handleSubmit, errors } = props; // Destructure errors
  const classes = useStyles();

  // Render a New Campus view with an input form
  return (
    <div>
      <h1>New Campus</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography
              style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', 
                fontSize: '20px', color: '#11153e',
              }}
            >
              Add a Campus
            </Typography>
          </div>
          <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>

            <div>
              <label htmlFor="name" style={{ color: '#11153e', fontWeight: 'bold' }} > Name:
              </label>
              <input id="name" type="text" name="name" onChange={(e) => handleChange(e)} 
              style={{ borderColor: errors?.name ? 'red' : 'initial', }} />
              {errors?.name && (
                <Typography color="error" variant="body2">
                  {errors.name}
                </Typography>
              )}
            </div>
            <br />

            <div>
            <label htmlFor="imageUrl" style={{ color: '#11153e', fontWeight: 'bold' }}> Image URL: 
            </label>
              <input id="imageUrl" type="text" name="imageUrl" onChange={(e) => handleChange(e)}
              />
            </div>
            <br />

            <div>
              <label htmlFor="address" style={{ color: '#11153e', fontWeight: 'bold' }}>Address:
              </label>
              <input id="address" type="text" name="address" onChange={(e) => handleChange(e)} 
              style={{ borderColor: errors?.address ? 'red' : 'initial', }} />
              {errors?.address && (
                <Typography color="error" variant="body2">
                  {errors.address}
                </Typography>
              )}
            </div>
            <br />

            <div>
              <label htmlFor="description" style={{ color: '#11153e', fontWeight: 'bold' }}>
                Description:</label>
              <textarea id="description" type="text" name="description" rows = "4"
              onChange={(e) => handleChange(e)}
              />
            </div>

            <br />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCampusView;
