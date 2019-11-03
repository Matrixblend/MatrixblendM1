import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import Components from "./Components/Components.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import ProfilePage from "./ProfilePage/ProfilePage.jsx";
import LoginPage from "./LoginPage/LoginPage.jsx";
import MatrixPage from "./MatrixPage/MatrixPage.jsx";
import MusicPage from "./MusicPage/MusicPage.jsx";
import AboutPage from "./AboutPage/AboutPage.jsx";
import ContactPage from "./ContactPage/ContactPage.jsx";
let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/about-us" component={AboutPage} />
      <Route path={`accounts/:accountId`} component={ProfilePage} />
      <Route path="/contact-us" component={ContactPage}/>
      <Route path="/login-page" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="/" component={MatrixPage} />
      <Route path="/music-page" component={MusicPage} />
  
    </Switch>
  </Router>
);
