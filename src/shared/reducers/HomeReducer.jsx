import {createReducer} from './../utils/toto';
import { HomeConstants } from './../constants/HomeConstants';


const initialState = {
    data_job: null,
    isRequesting: true,
    statusText: null
};

 function DATA_HOME_REQUEST(state, action) {
    return Object.assign({}, state, {
        'isRequesting': true
    });
}
function DATA_HOME_FAILURE(state, action) {
    return Object.assign({}, state, {
        'isRequesting': false,
        'statutText':'Erreur'
    });

}
function DATA_HOME_SUCCESS(state, action) {

    return Object.assign({}, state, {
        'isRequesting': false,
        'data_job': action.result
    });

}
const handlers =
{
    [HomeConstants.ActionTypes.DATA_HOME_REQUEST]: DATA_HOME_REQUEST,
    [HomeConstants.ActionTypes.DATA_HOME_FAILURE]: DATA_HOME_FAILURE,
    [HomeConstants.ActionTypes.DATA_HOME_SUCCESS]: DATA_HOME_SUCCESS

}
export default createReducer(initialState, handlers);