import rootReducer from '../reducers/index';
import routes from '../routes';
import {routerStateReducer} from 'redux-router';
import {reduxReactRouter} from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import {applyMiddleware, compose, createStore,combineReducers} from 'redux';
import multireducer from 'multireducer';
import createLogger from 'redux-logger';
import promiseMiddleware  from '../lib/promiseMiddleware';
import {responsiveStateReducer,responsiveStoreEnhancer,createResponsiveStateReducer} from 'redux-responsive';
import { loadingBarReducer } from 'react-redux-loading-bar'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import {default as home} from '../../shared/reducers/HomeReducer';
import {default as menubar} from '../../shared/reducers/MenubarReducer';

export default function configureStore(initialState) {

    let createStoreWithMiddleware;
    const logger = createLogger();
    const reducer = combineReducers({  // can be mounted as any property. Later you can use this prop to access state slices in mapStateToProps
            home,
            menubar,
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
    const middleware = applyMiddleware(promiseMiddleware, logger, loadingBarMiddleware({
        promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
    }));

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