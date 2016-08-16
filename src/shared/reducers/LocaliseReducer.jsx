import {createReducer} from './../utils/toto';
import {LocaliseConstants} from './../constants/LocaliseConstants';


const initialState = {
    page_displayed: 'home',
    localise_lang: 'fr',
    last_result: null,
    isRequesting: true,
    statusText: null
};


function DATA_LANG_REQUEST(state, action) {
    return Object.assign({}, state, {
        'isRequesting': true
    });
}

function DATA_LANG_FAILURE(state, action) {
    return Object.assign({}, state, {
        'isRequesting': false,
        'statutText': 'Erreur'
    });
}

function DATA_LANG_SUCCESS(state, action) {
    return Object.assign({}, state, {
        'isRequesting': false,
        'last_result': action.payload
    });
}

function SWITCH_LANG(state, action) {

    return Object.assign({}, state, {
        'localise_lang': action.new_lang
    });
}

const handlers =
{
    [LocaliseConstants.ActionTypes.DATA_LANG_REQUEST]: DATA_LANG_REQUEST,
    [LocaliseConstants.ActionTypes.DATA_LANG_SUCCESS]: DATA_LANG_SUCCESS,
    [LocaliseConstants.ActionTypes.DATA_LANG_FAILURE]: DATA_LANG_FAILURE,
    [LocaliseConstants.ActionTypes.SWITCH_LANG]: SWITCH_LANG
};
export default createReducer(initialState, handlers);