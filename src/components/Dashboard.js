import React, {Component} from "react";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./Header";
import Charts from "./Charts";

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class='container-fluid'>
                <Router>
                    <Route path={"/Dashboard"} component={Dashboard}/>
                    <Header/>
                    <Charts/>
                </Router>
            </div>
        )
    }

}

export default Dashboard;
