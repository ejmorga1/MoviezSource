import React, {Component} from "react";
import { BrowserRouter, Route, withRouter, Link, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./utils/Auth";
import Footer from "./components/Footer";
import Search from "./pages/Home/search";
import "./components/App.css";

// import AuthButton from "./components/AuthButton";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isUserAuthenticated() === true
    ? <Component {...props} />
    : <Redirect to={{
      pathname: '/login',
      state: { from: props.location }
    }} />
  )} />
);

// const AuthButton = withRouter(({ history }) => (
//   Auth.isUserAuthenticated() ? (
//     <p>
//       Welcome to this amazing content! <button onClick={() => {
//         Auth.deAuthenticateUser(() => history.push('/'));window.location.href = "/";
//       }}>Sign out</button>
//     </p>
//   ) : (
//       <p>You are not logged in.</p>
//     )
// ));

class App extends React.Component {
  
  state = {
    authenticated: false
  };

  componentDidMount() {
    console.log(Auth.isUserAuthenticated());
    this.setState({authenticated: Auth.isUserAuthenticated()}, function(){
      console.log(this.state.authenticated);
    });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {/* <AuthButton /> */}
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <ProtectedRoute exact path="/home" component={Home} />
            <ProtectedRoute exact path="/profile" component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  };
  
};

export default App;
