import App from '../containers/App';
import ContactPage from '../containers/ContactPage';
import ProfilePage from '../containers/ProfilePage'
import ProjectsLandingPage from '../containers/ProjectsLandingPage'
import ProjectPage from '../containers/ProjectPage'

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/profile" component={ProfilePage}/>
      <Route path="/contact" component={ContactPage}/>
      <Route path="/projects" component={ProjectsLandingPage}/>
      <Route path="/my-projects/:projectName" component={ProjectPage}/>
    </div>
  </Router>
)


export default Root