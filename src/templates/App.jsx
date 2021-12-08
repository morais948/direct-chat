import React from 'react';
import '../assets/sass/app.scss';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";
import configFirebase from '../config/firebase'

import { useSelector } from 'react-redux'


const app = initializeApp(configFirebase);
const database = getDatabase(app);

function App() {
    const count = useSelector((state) => state.counter.value)

    const criarDados = () => {
        set(ref(database, 'grupos/' + 45646), {
            name: 'só os boys'
        }).then(_ => alert('tudo feito'))
    }

    return (
        <div className="App">
            <h1>inicio de tudo</h1>
            <span>Counter: {count}</span>
            <br />
            <button onClick={criarDados} type="button">criar dados</button>
        </div>
    );
}

export default App;
