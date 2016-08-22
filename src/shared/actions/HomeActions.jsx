import { checkHttpStatus, parseJSON } from './../utils/toto';
import { HomeConstants } from './../constants/HomeConstants';
import { pushState,replaceState } from 'redux-router';
import ReactRouter from 'react-router';
import fetch from 'isomorphic-fetch';


var history = ReactRouter.history;

/*-------- */
/*---- JOB */

//--- Requête vers l'API
export function retrieveAjaxDataHome() {
    return fetch(HomeConstants.APIEndpoints.DATA_HOME, {
        method: 'get',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(parseJSON)
        .then(response => {
            return (response);
        })
}

//--- Action que le composant appelle
export function retrieveDataHome() {
    const p = retrieveAjaxDataHome();
    return {
        type: "DATA_HOME", //[HomeConstants.ActionTypes.DATA_HOME_REQUEST, HomeConstants.ActionTypes.DATA_HOME_SUCCESS, HomeConstants.ActionTypes.DATA_HOME_FAILURE],
        payload: p,
        meta: {
            promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE']
        }
    }
}