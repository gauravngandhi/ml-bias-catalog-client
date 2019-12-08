import React, {Component} from "react";
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./Header";
import Charts from "./Charts";

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container-fluid'>
                    <div className='row'>
                    <Header/>
                    </div>
                    <div className='row'>
                    <Charts/>
                    </div>
            </div>
        )
    }

}

export default Dashboard;
