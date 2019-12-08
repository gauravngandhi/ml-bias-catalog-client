import React from 'react';
import CaseRow from './CaseRow'
import {BrowserRouter as Link} from 'react-router-dom'

const DataSetTable = ({abcs, companyFilter, biasFilter}) =>
    <div>
<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Candor</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <select  onChange={(event)=>{biasFilter(event.target.value)}}>
                            <option  value="Gender" >Gender</option>
                            <option  value="Racial">Racial</option>
                            <option  value="Regional">Racial</option>
                            <option  value="Facial">Racial</option>
                            <option  value="All">All</option>
                        </select>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://db-bias-ui.herokuapp.com/dashboard">DashBoard</a>
                    </li>
                </ul>




                <form className="form-inline my-2 my-lg-0">
                    <input onChange={(event)=>{companyFilter(event.target.value)}} className="form-control mr-sm-2" type="search" placeholder="Company Name" aria-label="Search" />
                </form>


            </div>
        </nav>
</div>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Year</th>
                <th scope="col">Company</th>
                <th scope="col">Industry</th>
                <th scope="col">Type Of Bias</th>
                <th scope="col">Link</th>

            </tr>
            </thead>

            <tbody>
            {
                abcs.map(
                    abc => <CaseRow abc={abc}/>
                )
            }

            </tbody>
        </table>
    </div>




export default DataSetTable;