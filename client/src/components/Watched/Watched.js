import React, {
    Component
} from 'react';

class Watched extends Component {
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
            <div className="col-md-3">
                <div className="userBooks">
                    <h3 id="userBooks" align="center">Watched</h3><hr/>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody id="reviews-table">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
};

export default Watched;