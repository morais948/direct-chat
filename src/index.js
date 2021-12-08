import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import store from './store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Routes />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

