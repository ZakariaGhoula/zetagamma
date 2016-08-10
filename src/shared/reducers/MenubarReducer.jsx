import {createReducer} from './../utils/toto';
import { MenubarConstants } from './../constants/MenubarConstants';


const initialState = {
    is_shown: true
};


function MENUBAR_CHANGE(state, action) {
    return Object.assign({}, state, {
        'is_shown': action.new_bool_value
    });
}

const handlers =
{
    [MenubarConstants.ActionTypes.MENUBAR_CHANGE]: MENUBAR_CHANGE

}
export default createReducer(initialState, handlers);