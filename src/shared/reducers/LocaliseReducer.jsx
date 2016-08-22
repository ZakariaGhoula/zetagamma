import {createReducer} from './../utils/toto';
import {LocaliseConstants} from './../constants/LocaliseConstants';

const initialState = {
    page_displayed: 'home',
    localise_lang: 'fr',
    last_result: null,
    hasChanged: null,
    isRequesting: true,
    statusText: null,
    isAdmin: false
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
    if (typeof state.last_result == 'undefined' || state.last_result == null) {
        var cache_lang = {};
        var cache_page = {};
        cache_page[action.payload.page] = action.payload.data;
        cache_lang[action.payload.lang] = cache_page;
        return Object.assign({}, state, {
            'isRequesting': false,
            'last_result': cache_lang
        });
    } else {
        var cache_lang = {};
        var cache_page = {};
        cache_page[action.payload.page] = action.payload.data;
        cache_lang[action.payload.lang] = Object.assign({}, cache_page, state.last_result[action.payload.lang]);

        return Object.assign({}, state, {
            'isRequesting': false,
            'last_result': cache_lang
        });
    }

}

function SWITCH_LANG(state, action) {
    return Object.assign({}, state, {
        'localise_lang': action.new_lang
    });
}

function SWITCH_PAGE(state, action) {
    return Object.assign({}, state, {
        'page_displayed': action.new_page
    });
}

function LOG_ADMIN(state, action) {
    if (action.pwd == 'yolo') {
        console.log("You're admin!");
        return Object.assign({}, state, {
            'isAdmin': true
        });
    } else {
        console.log("You're not admin!");
        return Object.assign({}, state, {
            'isAdmin': false
        });
    }
}

function DATA_CHANGE_REQUEST(state, action) {
    return Object.assign({}, state, {
        'isRequesting': true
    });
}

function DATA_CHANGE_FAILURE(state, action) {
    return Object.assign({}, state, {
        'isRequesting': false,
        'statutText': 'Erreur'
    });
}

function DATA_CHANGE_SUCCESS(state, action) {
    return Object.assign({}, state, {
        'isRequesting': false,
        'hasChanged': action.payload
    });
}

const handlers =
{
    [LocaliseConstants.ActionTypes.DATA_LANG_REQUEST]: DATA_LANG_REQUEST,
    [LocaliseConstants.ActionTypes.DATA_LANG_SUCCESS]: DATA_LANG_SUCCESS,
    [LocaliseConstants.ActionTypes.DATA_LANG_FAILURE]: DATA_LANG_FAILURE,
    [LocaliseConstants.ActionTypes.SWITCH_LANG]: SWITCH_LANG,
    [LocaliseConstants.ActionTypes.SWITCH_PAGE]: SWITCH_PAGE,
    [LocaliseConstants.ActionTypes.LOG_ADMIN]: LOG_ADMIN,
    [LocaliseConstants.ActionTypes.DATA_CHANGE_REQUEST]: DATA_CHANGE_REQUEST,
    [LocaliseConstants.ActionTypes.DATA_CHANGE_SUCCESS]: DATA_CHANGE_SUCCESS,
    [LocaliseConstants.ActionTypes.DATA_CHANGE_FAILURE]: DATA_CHANGE_FAILURE,
};
export default createReducer(initialState, handlers);