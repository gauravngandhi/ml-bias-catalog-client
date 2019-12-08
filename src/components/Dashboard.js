import React, {Component} from "react";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./Header";
import Charts from "./Charts";
import TopMLModelsTable from "./TopMLModelsTable";
import TopCompanyCountTable from "./TopCompanyCountTable";

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container-fluid'>
                <Router>
                    <Route path={"/Dashboard"} component={Dashboard}/>
                    <div className='row'>
                    <Header/>
                    </div>
                    <div className='row'>
                    <Charts/>
                    </div>
                    <div className={'row'}>
                        <div className={'col-6'}>
                            <TopMLModelsTable/>
                        </div>
                        <div className={'col-6'}>
                            <TopCompanyCountTable/>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }

}

export default Dashboard;
