import React, { Component } from "react";
import { InputElement } from "../../components/InputElement/InputElement";
import API from "../../utils/API";
import { InputDropdown } from "../../components/InputDropdown/InputDropdown";
import Nav from "../../components/Nav/Nav";

class Signup extends Component {
    state = {
        authenticated: false,
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        favorite_genre: "",
        location: "",
    };

    componentDidMount() {
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
        if (this.state.password && this.state.email && this.state.first_name && this.state.favorite_genre) {
            API.saveUser({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
                favorite_genre: this.state.favorite_genre,
                location: this.state.location
            })
            .then(res => this.isAuthenticated(res))
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Sign Up</h2>

                        <form className="login">
                            <InputElement
                                value={this.state.first_name}
                                onChange={this.handleInputChange}
                                name="first_name"
                                placeholder="Enter Your First Name"
                                label="First Name"
                                type="text" />
                            <InputElement
                                value={this.state.last_name}
                                onChange={this.handleInputChange}
                                name="last_name"
                                placeholder="Enter Your Last Name (Optional)"
                                label="Last Name"
                                type="text" />
                            <InputElement
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Enter Your Email Address"
                                label="Email Address"
                                type="email" />
                            <InputElement
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Enter Your Password"
                                label="Password"
                                type="password" />
                            <InputDropdown
                                value={this.state.favorite_genre}
                                onChange={this.handleInputChange}
                                name="favorite_genre"
                                placeholder="Favorite Genre"
                                label="Favorite Genre"
                                type="favorite_genre" />
                            {/* <InputElement
                                value={this.state.location}
                                onChange={this.handleInputChange}
                                name="location"
                                placeholder="Enter Your Location"
                                label="Location"
                                type="location" /> */}
                            <button
                                onClick={this.handleFormSubmit}
                                className="btn btn-default"
                                disabled={!(this.state.email && this.state.password)}>Sign Up</button>
                        </form>

                        <br />
                        <p>Or login <a href="/">here</a></p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Signup;