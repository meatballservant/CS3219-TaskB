import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Enter from "./Enter";
import All from "./All";

class Main extends Component {

    render() {
        return (
            <HashRouter>
                <div>
                <h1>User Account Tracker CS3219 Task B</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/enter">Create User</NavLink></li>
                    <li><NavLink to="/all">All Accounts</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/enter" component={Enter}/>
                    <Route path="/all" component={All}/>
                </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;