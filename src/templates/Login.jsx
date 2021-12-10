import React, { useEffect, useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import { loginWithGoogle, getUserLogged } from '../services/auth'
import LinearProgress from '@mui/material/LinearProgress';
import '../sass/login.scss';

function App() {
    let history = useHistory();
    let [load, setLoad] = useState(false)
    let [logged, setLogged] = useState(false)

    useEffect(_ => {
        getUserLogged() && setLogged(true) 

    }, [])

    const login = () => {
        setLoad(true)
        loginWithGoogle()
            .then(({ user }) => {
                console.log(user)
                history.push('/home')
                setLoad(false)
            })
            .catch(err => {
                console.log(err.code)
                setLoad(false)
            })
    }

    return (
        <>
            { logged && <Redirect to="/home" /> }
            {
                !logged && 

                <div className="container vh-100 login d-flex flex-column justify-content-center align-items-center">
                    <div className="row">
                        <div className="col">
                            <h1 style={{ fontWeight: '700' }}>Direct Chat</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4>Faça login com </h4>
                            <img className="img-fluid btn btn-google rounded" onClick={login} src="./images/google.png" alt="google" />
                            { load && <LinearProgress className="mt-2" /> }
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default App;
