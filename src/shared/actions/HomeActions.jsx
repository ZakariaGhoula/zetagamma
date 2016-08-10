import { checkHttpStatus, parseJSON } from './../utils/toto';
import { HomeConstants } from './../constants/HomeConstants';
import { pushState,replaceState } from 'redux-router';
import ReactRouter from 'react-router';


var history = ReactRouter.history;

/*-------- */
/*---- JOB */
export function retrieveAjaxDataJob(token,id_job) {
    return fetch(HomeConstants.APIEndpoints.DATA_HOME+"?id_job="+id_job, {
        method: 'get',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token token="' + token + '"'
        }
    })
        .then(parseJSON)
        .then(response => {
            return (response.data);
        })
}
export function retrieveDataJob(token,id_job) {
    const p = retrieveAjaxDataJob(token,id_job);
    return {
        type: [HomeConstants.ActionTypes.DATA_HOME_REQUEST, HomeConstants.ActionTypes.DATA_HOME_SUCCESS, HomeConstants.ActionTypes.DATA_HOME_FAILURE],
        promise: p
    }
}