import { checkHttpStatus, parseJSON } from './../utils/toto';
import { HomeConstants } from './../constants/HomeConstants';
import {APIRoot} from './../constants/DefaultConstants';
import { pushState,replaceState } from 'redux-router';
import ReactRouter from 'react-router';
import fetch from 'isomorphic-fetch';


var history = ReactRouter.history;

/*-------- */
/*---- JOB */

//--- Requête vers l'API
export function sendMailContact(name, mail, denomination, subject, message) {
    return fetch(APIRoot + '/contact', {
        method: 'post',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "mail": mail,
            "denomination": denomination,
            "subject": subject,
            "message": message,

        })
    })
        .then(parseJSON)
        .then(response => {
            return (response);
        })
}

export function contactMail(name = "No Name", mail = "nomail@nomail.com", denomination = "Pas de dénomination/société", subject = "Sujet vide", message = "Aucun message.") {
    const p = sendMailContact(name, mail, denomination, subject, message);
    return {
        type: "DATA_HOME",
        payload: p,
        meta: {
            promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE']
        }
    }
}