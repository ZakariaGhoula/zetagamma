import React       from 'react';
import { render }  from 'react-dom';
import { Router }  from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes      from '../shared/routes';
import {calculateResponsiveState} from './../shared/actions/index'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { Provider }                     from 'react-redux';
import {ReduxRouter} from 'redux-router';
import { fromJS }                       from 'immutable';
import configureStore from './../shared/store/configureStore';
const history = createBrowserHistory();
let initialState = window.__INITIAL_STATE__;



// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux
Object
    .keys(initialState)
    .forEach(key => {
        initialState[key] = fromJS(initialState[key]);

    });
const store = configureStore(initialState);
store.dispatch(showLoading())
store.dispatch(calculateResponsiveState());
render(
    <Provider store={store}>
        <ReduxRouter>
            {routes}
        </ReduxRouter>
    </Provider>,
    document.getElementById('react-view')
);


// do long running stuff
store.dispatch(hideLoading())