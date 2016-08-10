import keyMirror from 'keymirror';
var APIRoot = "http://api.crossyjob.com";
var APPRoot = "http://www.crossyjob.com";


// Todo constants
export const HomeConstants = {


    APIEndpoints: {
        DATA_HOME:        APIRoot + "/v1/#",

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
