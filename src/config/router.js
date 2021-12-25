import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import ChartOfAccounts from '../Pages/ChartOfAccounts';
import About from "../Pages/About";
import Taccounts from "../Pages/Taccounts";
import Login from "../Pages/Login";

function AppRouter() {

    return (
        <Router>
            <Route exact path="/" component={Taccounts} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/v2" component={Taccounts} />
        </Router>
    )
}
export default AppRouter;