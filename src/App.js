import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./Login";
import DataSetTable from "./DataSetTable";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import CaseService from './services/CaseService'
import Dashboard from './components/Dashboard'

class App extends React.Component{

    constructor() {
        super();
        this.caseService = new CaseService()
        this.state = {
            loggedIn:"no",
            showbutton: "no",
            company:'',
            bias:''
        }
        this.caseService.findAllCases().then((cases)=>{
            this.setState({cases: cases})
        })
    }

    login = (username, password) => {
        var x = this;
        new Promise(function(resolve, reject) {
            if(username.valueOf() === 'a' && password.valueOf() === 'a'){
                x.setState({
                    "user": '5200',
                    "loggedIn": 'yes'
                },)
            }
            else{
                alert("Incorrect user ID and password..<br/> Mock Username = John Password = Ford ")
            }
        }).then(this.caseService.findAllCases())
    }

    companyFilter = (filter) =>{
        this.setState({
            company: filter
        })
        this.findResults(filter, this.state.bias)
    }

    findResults = (company, bias) => {
        this.caseService.findCasesByFilter(company, bias)
            .then(res => this.setState({cases: res}))
    }

    biasFilter = (filter) =>{
        console.log(filter +"bias")
            this.setState({
                bias: filter
            })
         this.findResults(this.state.company, filter)
    }

    helpLogin = (user) => {}

    register = (username, password, fname, lname) => {}

  render() {
    return (
        this.state.loggedIn === "no" &&
        <Router>
          <div>
            <Route path='/' exact
                   render={() =>
                       <Login doLogin={this.login} />}/>
              <Route path={"/dashboard"} render={()=> <Dashboard />} />
          </div>

        </Router>
        ||
        <Router>
            <div>
                <Route path='/' exact
                       render={() =>
                           <DataSetTable abcs={this.state.cases}
                                         companyFilter={this.companyFilter}
                                         biasFilter={this.biasFilter}/>}/>
                <Route path={"/dashboard"} render={()=> <Dashboard />} />
            </div>
            {/*<div></div>*/}
        </Router>
    )
  }
}

export default App;
