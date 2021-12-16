import React from 'react';
import Home from './templates/App'
import TesteEstado from './templates/TesteEstado'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from './templates/Login';

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>    
                <Route exact path="/home">
                    <Home />
                </Route>            
                <Route exact path="/teste-estado">
                    <TesteEstado />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
