import { checkHttpStatus, parseJSON } from './../utils/toto';
import { MenubarConstants } from './../constants/MenubarConstants';
import { pushState,replaceState } from 'redux-router';
import ReactRouter from 'react-router';


var history = ReactRouter.history;

/*-------- */
/*---- JOB */

///Méthode qui change le booléen : le menu doit être affiché ou non.

export function changeDisplayMenubar(new_bool_value) {
    return {
        type: MenubarConstants.ActionTypes.MENUBAR_CHANGE,
        new_bool_value: new_bool_value
    }
}