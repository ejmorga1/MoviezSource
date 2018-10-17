import React from "react";
import { withRouter } from "react-router-dom";
import Auth from "../../utils/Auth";


export const AuthButton = withRouter(({ history }) => (
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