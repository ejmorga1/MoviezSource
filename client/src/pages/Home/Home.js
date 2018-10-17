import React, { Component } from "react";
import API from "../../utils/API";
import Navbar from "../../components/Navbar/Navbar";
import Wishlist from "../../components/WishList";
import Watched from "../../components/Watched";
import Welcome from "../../components/Welcome";

class Home extends Component {
    
    render() {
        return (
            <div>
                <Navbar />
                <Welcome />
                {/* <div className="showbox" id="preloader">
                    <div className="loader">
                        <div align="center" className="fond">
                            <div className="contener_general">
                                <div className="contener_mixte">
                                    <div className="ballcolor ball_1">&nbsp;</div>
                                </div>
                                <div className="contener_mixte">
                                    <div className="ballcolor ball_2">&nbsp;</div>
                                </div>
                                <div className="contener_mixte">
                                    <div className="ballcolor ball_3">&nbsp;</div>
                                </div>
                                <div className="contener_mixte">
                                    <div className="ballcolor ball_4">&nbsp;</div>
                                </div>
                            </div>
                            <p className="loading-text"></p>
                        </div>
                    </div>
                </div> */}
                       
            
                <div className="search" >
                    <form>
                
                        <input id="searchBar" type="text" placeholder="Search..." required autoComplete="off"/>
                        <input id="searchBtn" type="submit" value="Search!" />
                    </form>
                </div>
                
                <br />
                
                <div className="container">
                
                    <div className="row no-gutters">
                        {/* <div className="col-md-3">
                            <div className="wishlist">
                                <h3 id="wishlist" align="center">Wishlist</h3>
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
                        </div> */}

                        <Wishlist />
            
                        <div className="col-md-6">
                            <h3 id="result" align="center">Results</h3><hr/><hr/>
                            {/* <div className="results"> */}
                                {/* <div> */}
                                    {/* <ul className="table"> */}
                                        {/* <thead>
                                            <tr>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead> */}
                                        <div id="results">
                                        </div>
                                    {/* </ul> */}
                                {/* </div> */}
                            {/* </div> */}
                        </div>
            
                        <Watched/>
                        
                        {/* <div className="col-md-3">
                            <div className="userBooks">
                                <h3 id="userBooks" align="center">Movies you've watched</h3>
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
                        </div> */}

                    </div>
                </div>
            
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
                <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                <script type="text/javascript" src="./js/SS"></script>
                
            </div>
        )
    }
}
export default Home;