import React, { Component } from "react";
import API from "../../utils/API";
import Navbar from "../../components/Navbar/Navbar";

class Profile extends Component {
    state = {};

    componentDidMount() {
        const This = this
        const email = JSON.parse(sessionStorage.getItem("token")).email;
        let query;
        var name;
        query = "/api/user/" + email;
        fetch(query).then(results => {
            return results.json();
        }).then(function (body) {
            This.setState({
                first_name: body.first_name,
                last_name: body.last_name,
                favorite_genre: body.favorite_genre,
                email: body.email,
            });
            return body.first_name;
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h3 className="UserName">{this.state.first_name}'s Profile</h3>
                    <hr/>
                    <p>Name: {this.state.first_name} {this.state.last_name}</p>
                    <p>Email: {this.state.email}</p>
                    <p>Favorite Genre: {this.state.favorite_genre}</p>
                    
                </div>
            </div>
        )
    }
}
export default Profile;