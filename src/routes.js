import React from 'react';
import Menu from './components/Menu'
import Home from './templates/App'
import Login from './templates/Login'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";



function App() {

    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>                
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
