/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import bgImage from '../../images/CUNY_Logo.jpg';
import nycImage from '../../images/nycBackground.jpeg';

const HomePageView = () => {
  // Render Home page view
  return (
    <div style={mainHomeStyle}>
      <div style={overlayStyle}></div>
      <div style={centerDivStyle}>
        <img src={bgImage} alt="CUNY Logo" style={imageStyle} />
        <div style={buttonSectionStyle}>
          <Link style={buttonStyle} to={'/'} ><Button variant="contained" color="primary" style={linkStyle}>Home</Button></Link>

          <Link style={buttonStyle} to={'/campuses'} ><Button variant="contained" color="primary" style={linkStyle}>All Campuses</Button></Link>

          <Link style={buttonStyle} to={'/students'} ><Button variant="contained" color="primary" style={linkStyle}>All Students</Button></Link>
        </div>
      </div>
      <div style={infoSectionStyle}>
        <div style={infoTitleStyle}>
          <strong style={{color: 'rgb(18,50,155)', textDecorationLine: 'none', fontSize:'1.6rem'}}>INFORMATION FOR</strong>
          <br/>
          Future Students<br/>
          Current Students<br/>
          Alumni<br/>
          Undocumented Students<br/>
          International Students<br/>
          The LGBTQI Community<br/>
          Students with Conviction<br/>
          Records<br/>
          Students with Disabilities<br/>
        </div>
        <div style={infoTitleStyle}>
          <strong style={{color: 'rgb(18,50,155)', textDecorationLine: 'none', fontSize:'1.6rem'}}>ENROLLMENT</strong>
          <br/>
          Apply Now<br/>
          Undergraduate Admissions<br/>
          Financial Aid<br/>
          Graduate Studies<br/>
          Reenroll at CUNY<br/>
          Transfer to CUNY<br/>
          Transfer Explorer<br/>
          Dont Contact us<br/>
        </div>
        <div style={infoTitleStyle}>
          <strong style={{color: 'rgb(18,50,155)', textDecorationLine: 'none', fontSize:'1.6rem'}}>RESOURCES</strong>
          <br/>
          CUNY Student Guide<br/>
          CUNY Citzenship Now<br/>
          Discrimination and Retaliation<br/>
          Reporting Portal<br/>
          Professional Resources<br/>
          Register to Vote<br/>
          Emergency Preparedness<br/>
        </div>
        <div style={infoTitleStyle}>
          <strong style={{color: 'rgb(18,50,155)', textDecorationLine: 'none', fontSize:'1.6rem'}}>QUICKLINKS</strong>
          <br/>
          Donate<br/>
          Subscribe<br/>
          Communications & Marketing<br/>
          Freedom of Info Law<br/>
          CUNY News<br/>
          Buy CUNY Merch<br/>
          Employment at CUNY<br/>
          Sell to CUNY<br/>
        </div>
      </div>
      <div style={copyRightStyle}>
        NOT Copyright 2024  |  Privacy  |  Security  |  Accessibility  |  Terms of Use  |  CUNY Alert  |  Contact Us
      </div>
    </div>
  );    
}

const mainHomeStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundImage:  `url(${nycImage})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  zIndex: 0,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(240, 240, 240, 0.5)',
  width: '100vw',
  height: '100vh',
  paddingTop: '18rem',
}

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust transparency
  zIndex: 1,
};

const centerDivStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  boxShadow: '10px 10px 8px rgb(195, 195, 195)',
  borderRadius: '0.5rem',
  backgroundColor: 'rgb(230, 230, 230)',
  minHeight: '60%',
  width: '56rem',
  paddingBottom: '3rem',
  zIndex: 3,
}

const imageStyle = {
  objectFit: 'contain',
  width: '100%',
  borderRadius: '0.5rem',
}

const buttonSectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
  marginDown: '30px'
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

const infoSectionStyle = {
  zIndex: 4,
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '100vw',
  height: '19rem',
  marginTop: '6rem',
  paddingTop: '2rem',
  paddingBottom: '3rem',
  backgroundColor: 'rgb(220, 220, 225)',
  fontSize: '1.25rem', /* 16px */
  lineHeight: '1.5rem', /* 24px */
}

const infoTitleStyle = {
  display: 'flex',
  backgroundColor: 'rgb(240, 240, 240)',
  boxShadow: '10px 10px 7px rgb(170, 170, 180)',
  borderRadius: '0.5rem',
  padding: '15px 10px 15px 10px',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'flex-start',
  textAlign: 'left',
  color: 'blue',
  textDecorationLine: 'underline',
  textUnderlineOffset: '2px',
  cursor: 'pointer',
}

const copyRightStyle = {
  zIndex: 5,
  display: 'flex',
  backgroundColor: 'rgb(18,50,155)',
  color: 'white',
  width: '100vw',
  height: '10rem',
  paddingLeft: '3rem',
  paddingTop: '3rem',
  paddingBottom: '3rem',
  fontSize: '1.25rem', /* 16px */
}

export default HomePageView;