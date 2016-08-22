import {checkHttpStatus, parseJSON} from './../utils/toto';
import {LocaliseConstants} from './../constants/LocaliseConstants';
import {pushState, replaceState} from 'redux-router';
import ReactRouter from 'react-router';
import fetch from 'isomorphic-fetch';

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
            return ({data: response, page: page, lang: lang});
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
export function switchPage(new_page) {
    return {
        type: LocaliseConstants.ActionTypes.SWITCH_PAGE,
        new_page: new_page
    }
}
export function logAdmin(pwd) {
    return {
        type: LocaliseConstants.ActionTypes.LOG_ADMIN,
        pwd: pwd
    }
}


export function sendChangeElement(lang, page, element, content) {
    console.log(content);
    return fetch(LocaliseConstants.APIEndpoints.DATA_LANG + '/update', {
        method: 'post',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "lang": lang,
            "id_page": page,
            "id_textzone": element,
            "content": content
        })
    })
        .then(parseJSON)
        .then(response => {
            return (response);
        })
}

export function changeElement(lang, page, element, content) {
    const p = sendChangeElement(lang, page, element, content);
    return {
        type: "DATA_CHANGE",
        payload: p,
        meta: {
            promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE']
        }
    }
}