import React, {
    Component
} from 'react';

class Welcome extends Component {
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
                first_name: body.first_name
            });
            return body.first_name;
        })
    }

    render() {
        return ( 
            <div>
                <h2 className="helloUser">Hello {this.state.first_name},</h2>
                <h1 className="helloUser">Welcome to MoviezSource!</h1> 
            </div>
        )
    }
};

export default Welcome;