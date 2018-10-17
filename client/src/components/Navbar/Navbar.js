import React from "react";
import { withRouter } from "react-router-dom";
import Auth from "../../utils/Auth";
import image from '../../components/reel.png';
import image2 from '../../components/movie.jpg';

const AuthButton = withRouter(({ history }) => (
  Auth.isUserAuthenticated() ? (
    <button className="logout" onClick={() => {
        Auth.deAuthenticateUser(() => history.push('/'));window.location.href = "/";
    }}>Sign out</button>
  ) : (
      <p>You are not logged in.</p>
    )
));

const Navbar = () => (
  <nav className="navbar">
    
    <a className="navbar-brand text-light"><img src={image} className="App-logo" alt="logo" />MoviezSource</a>    
    <ul className="inline">
      <AuthButton />
      <li className="nav-item">
        <a className="Navlink" href="/home">Home</a>
      </li>
      <li className="nav-item">
        <a className="Navlink" href="/profile">Profile</a>
      </li>
      {/* <img src={image2} className="nav-logo" alt="logo" /> */}
    </ul>
  </nav>
);

export default Navbar;
