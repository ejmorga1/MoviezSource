import React, {
    Component
} from 'react';

class Wishlist extends Component {
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
                <div className="wishlist">
                    <h3 id="wishlist" align="center">Wishlist</h3><hr/>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody id="wishlist-table">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        )
    }
};

export default Wishlist;