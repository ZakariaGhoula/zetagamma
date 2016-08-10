import express                   from 'express';
import React                     from 'react';
import { renderToString }        from '../../node_modules/react-dom/server'
import { RoutingContext, match } from 'react-router';
import createLocation            from '../../node_modules/history/lib/createLocation';
import routes                    from './../shared/routes';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware  from '../shared/lib/promiseMiddleware';
import { Provider }                     from 'react-redux';
import * as reducers                    from '../shared/reducers';
import {routerStateReducer} from 'redux-router';
import bodyParser from 'body-parser';
const app = express();
var access_token ="";
const finalCreateStore = applyMiddleware(promiseMiddleware)( createStore );

app.use(express.static('public'));
app.use((req, res) => {

    const location = createLocation(req.url);


    const reducer  = combineReducers({home:reducers.home, router: routerStateReducer} );
    const store    = finalCreateStore(reducer);


    match({ routes, location }, (err, redirectLocation, renderProps) => {
        if (err) {
            console.error(err);
            return res.status(500).end('Internal server error');
        }
        if (!renderProps) return res.status(404).end('Not found.');

        const InitialComponent = (
            <Provider store={store}>
                <RoutingContext {...renderProps} />
            </Provider>
        );

        const initialState = store.getState();

        const componentHTML = renderToString(InitialComponent);
        const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Zetagamma</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dosis:400,200,300,600,500,700,800" media="screen" type="text/css">
        <script type="application/javascript">
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
<script type="application/javascript" src="/bundle.js"></script>
      </body>
  </html>
`
        res.end(HTML);
    });
});

export default app;