import React     from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './template/index';
import {requireContainer} from './template/AppContainer';
import Home from './components/home/home';
import error404 from './template/error/error404';




export default (
    <Route name="app" component={(App)} path="/">
        <IndexRoute phrase="ES6" component={requireContainer(Home)}/>

        <Route path="/"  locale="fr" component={requireContainer(Home)}/>
        <Route path="/fr"  locale="fr" component={requireContainer(Home)}/>
        <Route path="/en"  locale="en" component={requireContainer(Home)}/>
        <Route path="/es"  locale="es" component={requireContainer(Home)}/>



        <Route path="*"  locale="fr" component={requireContainer(error404)} />

    </Route>
);