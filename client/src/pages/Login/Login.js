import React, { Component } from "react";
import { InputElement } from "../../components/InputElement/InputElement";
import API from "../../utils/API";
import Nav from "../../components/Nav/Nav";
import "../../components/App.css";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authenticated: false,
            email: "",
            password: ""
        };
    }

    componentDidMount(){
        this.isAuthenticated({})
    }

    isAuthenticated(auth) {
        if (auth.status === 200) {
            console.log(auth.config.data);
            sessionStorage.setItem('token', auth.config.data);
            window.location.href = "/home";
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.password && this.state.email) {
            API.getUser({
                email: this.state.email,
                password: this.state.password,
            })
            .then(res => this.isAuthenticated(res))
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
            <Nav />
            <div><h1>Your Movie Is About to Start</h1></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Login</h2>

                        <form className="login">
                            <InputElement
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email"
                                label="Email Address"
                                type="email" 
                                required />
                            <InputElement
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Enter Password"
                                label="Password"
                                type="password" 
                                required />
                            <button
                                onClick={this.handleFormSubmit}
                                className="btn btn-default"
                                disabled={!(this.state.email && this.state.password)}>Login</button>
                        </form>

                        <br />
                        <p>Or sign up <a href="/signup">here</a></p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Login;