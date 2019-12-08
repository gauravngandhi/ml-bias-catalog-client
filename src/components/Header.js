import React from 'react';
import {BrowserRouter as Router, Link, Redirect}
    from 'react-router-dom';
const Header =() =>
    <div className='col-12' style={{backgroundColor: 'black'}}>
        <nav className="navbar navbar-default" style={{width:"100%"}}>
            <div className="col-4">
                <a className="navbar-brand fa fa-bars">
                </a>
                {/* <Link to={'/Dashboard'} ><h2 className="navbar-brand">Candor</h2> </Link> */}
            </div>
            <ul className={'col-4 list-group list-group-horizontal'}>
            <li className="nav-item">
                <a className="nav-link" href="https://db-bias-ui.herokuapp.com">Incident Table</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://db-bias-ui.herokuapp.com/createcase">Create Case</a>
            </li>
            </ul>
        </nav>
    </div>

export default Header;
