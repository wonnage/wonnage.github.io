import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import logo from "./assets/logo.jpeg";
import "./App.css";
import RSVPForm from "./RSVPForm";

function Nav() {
  const currentPath = useLocation().pathname;
  return (
    <nav>
      <Link to="/" className={currentPath === "/" ? "active" : undefined}>
        Home
      </Link>
      <Link
        to="/rsvp"
        className={currentPath === "/rsvp" ? "active" : undefined}
      >
        RSVP
      </Link>
      <Link
        to="/registry"
        className={currentPath === "/registry" ? "active" : undefined}
      >
        Registry
      </Link>
      <Link
        to="/photos"
        className={currentPath === "/photos" ? "active" : undefined}
      >
        Photos
      </Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
        </header>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <div>
              <p>
                <a href="https://goo.gl/maps/ug2vGGb3RdvpTUGw5">
                  Fairview Crystal Springs 6605 Golf Course Dr, Burlingame, CA
                  94010
                </a>
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.3334651231103!2d-122.37649988468891!3d37.54720657980158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f75301f4d62b3%3A0x8d1e448d66a0cd34!2sFairview%20Crystal%20Springs%20Ceremony%20Site!5e0!3m2!1sen!2sus!4v1581983865380!5m2!1sen!2sus"
                width="600"
                height="450"
                frameBorder="0"
                title="map"
              />
            </div>
          </Route>
          <Route path="/rsvp">
            <div>
              <RSVPForm />
            </div>
          </Route>
          <Route path="/registry">Registry</Route>
          <Route path="/photos">Photos</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
