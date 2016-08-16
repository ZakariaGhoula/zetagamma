import rootReducer from '../reducers/index';
import routes from '../routes';
import {routerStateReducer} from 'redux-router';
import {reduxReactRouter} from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import {applyMiddleware, compose, createStore,combineReducers} from 'redux';
import multireducer from 'multireducer';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware  from 'redux-promise-middleware';
import {responsiveStateReducer,responsiveStoreEnhancer,createResponsiveStateReducer} from 'redux-responsive';
import {loadingBarMiddleware, loadingBarReducer} from 'react-redux-loading-bar'
import {default as home} from '../../shared/reducers/HomeReducer';
import {default as menubar} from '../../shared/reducers/MenubarReducer';
import {default as localise} from '../../shared/reducers/LocaliseReducer';

export default function configureStore(initialState) {

    let createStoreWithMiddleware;
    const logger = createLogger();
    const reducer = combineReducers({  // can be mounted as any property. Later you can use this prop to access state slices in mapStateToProps
            home,
            menubar,
            localise,
            loadingBar: loadingBarReducer,
            browser: createResponsiveStateReducer({
                extraSmall: 450,
                small: 700,
                medium: 1000,
                large: 1280,
                extraLarge: 1400,
            }),
            router: routerStateReducer
        })
        ;

    const middleware = applyMiddleware(thunkMiddleware, promiseMiddleware({
        promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
    }), loadingBarMiddleware({
        promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
    }), logger);

    createStoreWithMiddleware = compose(
        middleware,
        responsiveStoreEnhancer,
        reduxReactRouter({routes, createHistory})
    );

    const store = createStoreWithMiddleware(createStore)(reducer, initialState);

    if (module.hot) {
        module.hot
            .accept('../reducers/index', () => {
                const nextRootReducer = require('../reducers/index');
                store.replaceReducer(nextRootReducer);
            });
    }

    return store;

}