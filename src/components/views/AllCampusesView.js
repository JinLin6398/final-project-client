/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const {campuses, deleteCampus} = props;
  // If there is no campus, display a message
  if (!campuses.length) {
    return (
    <div>
      <p>There are no campuses.</p>
      <Link to={`newcampus`}>
        <button>Add New Campus</button>
      </Link>
    </div>
    );
  }
  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      {campuses.map((campus) => {
          return (
            <div key={campus.id}>
              <Link to={`/campus/${campus.id}`}>
                <h2>{campus.name}</h2>
              </Link>
              <h2>Campus ID: {`${campus.id}`}</h2>
              <img 
                src={campus.imageUrl} 
                alt={`${campus.name}`} 
                style={{ width: "150px", height: "150px", borderRadius: "50%" }} 
              />
              <br/>
              <button onClick={() => deleteCampus(campus.id)}>Delete</button>

              <hr/>
            </div>
          );
        }
      )}
      <br/>
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      <br/><br/>
    </div>
  );
};

export default AllCampusesView;