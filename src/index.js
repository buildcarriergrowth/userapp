import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import UserDetails from './containers/UserDetails';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore} from 'redux';
import UserReducer from './reducers/UserReducer';

const store = createStore(
    UserReducer
);
ReactDOM.render(
                   <Provider store={store} >
                            <UserDetails />
                    </Provider> , document.getElementById('root'));
registerServiceWorker();
