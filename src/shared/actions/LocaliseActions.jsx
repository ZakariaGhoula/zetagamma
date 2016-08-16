import {checkHttpStatus, parseJSON} from './../utils/toto';
import {LocaliseConstants} from './../constants/LocaliseConstants';
import {pushState, replaceState} from 'redux-router';
import ReactRouter from 'react-router';


var history = ReactRouter.history;

/*-------- */
/*---- JOB */



///Méthode qui change le booléen : le menu doit être affiché ou non.

export function retrieveLocalLanguage(lang, page) {
    return fetch(LocaliseConstants.APIEndpoints.DATA_LANG + '/' + lang + '/' + page, {
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

export function loadLanguage(lang, page) {
    const p = retrieveLocalLanguage(lang, page);
    return {
        type: "DATA_LANG", //[HomeConstants.ActionTypes.DATA_HOME_REQUEST, HomeConstants.ActionTypes.DATA_HOME_SUCCESS, HomeConstants.ActionTypes.DATA_HOME_FAILURE],
        payload: p,
        meta: {
            promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE']
        }
    }
}

export function switchLang(new_lang) {
    return {
        type: LocaliseConstants.ActionTypes.SWITCH_LANG,
        new_lang: new_lang
    }
}