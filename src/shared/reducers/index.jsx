import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';

/*
export default combineReducers({
    session:session,
    router: routerStateReducer
});*/
export { default as Home } from './HomeReducer';
export { default as Menubar } from './MenubarReducer';
