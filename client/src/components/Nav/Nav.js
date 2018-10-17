import React from "react";
import { withRouter } from "react-router-dom";
import Auth from "../../utils/Auth";
import image from '../../components/reel.png';
import image2 from '../../components/movie.jpg';

const AuthButton = withRouter(({ history }) => (
  Auth.isUserAuthenticated() ? (
    <p>
      Welcome to this amazing content! <button onClick={() => {
        Auth.deAuthenticateUser(() => history.push('/'));window.location.href = "/";
      }}>Sign out</button>
    </p>
  ) : (
      <p>You are not logged in.</p>
    )
));

const Nav = () => (
  <nav className="navbar">
    
    <a className="navbar-brand text-light"><img src={image} className="App-logo" alt="logo" />MoviezSource</a>
  </nav>
);

export default Nav;
