import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
import whitebg from './images/whiteBackground.jpg';
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewStudentContainer,
} from './components/containers';

// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here
import EditCampusContainer from "./components/containers/EditCampusContainer";
import EditStudentContainer from "./components/containers/EditStudentContainer";
import NewCampusContainer from "./components/containers/NewCampusContainer";

const App = () => {
  return (
    <div className="App" style={bgImageStyle}>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/newcampus" component={NewCampusContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/editcampus/:id" component={EditCampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        <Route exact path="/editstudent/:id" component={EditStudentContainer} />
      </Switch>        
    </div>
  );
}

const bgImageStyle = {
  backgroundColor: 'rgb(240, 240, 240)',
  backgroundImage:  `url(${whitebg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}
export default App;
