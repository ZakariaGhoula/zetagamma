import keyMirror from 'keymirror';
import {APIRoot} from './DefaultConstants';


// Todo constants
export const HomeConstants = {


    APIEndpoints: {
        DATA_HOME: APIRoot + "/textzones",

    },

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    }),

    ActionTypes: keyMirror({

        // Routes
        REDIRECT: null,
        //USER
        DATA_HOME_REQUEST: null,
        DATA_HOME_SUCCESS: null,
        DATA_HOME_FAILURE: null

    })
};
