import React     from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './template/index';
import {requireContainer} from './template/AppContainer';
import Home from './components/home/home';
import Expert from './components/home/expert';
import Study from './components/home/study';
import StudyCase from './components/home/studyCase';
import error404 from './template/error/error404';
import {ROUTING} from './constants/DefaultConstants';

//Comment faire pour rajouter une route:
// 1) Rajouter la route ici
// 2) Rajouter la route correspondante dans DefaultConstants, variable ROUTING

//Pour rajouter une langue:
// 1) Créer toutes les URLS associées dans DefaultConstants.
// 2) Placer ensuite ici les routes correspondantes.

export default (
    <Route name="app" component={(App)} path="/">
        <IndexRoute phrase="ES6" component={requireContainer(Home)}/>

        <Route path="/" locale="fr" component={requireContainer(Home)}/>

        <Route path="/fr" locale="fr" component={requireContainer(Home)}/>
        <Route path="/en" locale="en" component={requireContainer(Home)}/>
        <Route path="/es" locale="es" component={requireContainer(Home)}/>

        <Route path={ROUTING.expert['fr']} locale="fr" component={requireContainer(Expert)}/>
        <Route path={ROUTING.expert['en']} locale="en" component={requireContainer(Expert)}/>
        <Route path={ROUTING.expert['es']} locale="es" component={requireContainer(Expert)}/>

        <Route path={ROUTING.study['fr']} locale="fr" component={requireContainer(Study)}/>
        <Route path={ROUTING.study['en']} locale="en" component={requireContainer(Study)}/>
        <Route path={ROUTING.study['es']} locale="es" component={requireContainer(Study)}/>
        <Route path={ROUTING.study['fr'] + "/:studyname"} locale="fr" component={requireContainer(StudyCase)}/>
        <Route path={ROUTING.study['en'] + "/:studyname"} locale="en" component={requireContainer(StudyCase)}/>
        <Route path={ROUTING.study['es'] + "/:studyname"} locale="es" component={requireContainer(StudyCase)}/>
        <Route path="*" locale="fr" component={requireContainer(error404)}/>

    </Route>
);

/*
 Le composant LocText permet de créer des zones de textes éditables, liens, div, etc...
 Il réagit en fonction de la langue.

 Quelques exemples:
 <LocText tagtype="div" page="home" textzone="une_id_unique" />                       //Si le tagtype n'est pas précisé, le type est div.

 <LocText tagtype="link" to="Expert" page="menubar" textzone="une_id_unique" />       //Crée le lien vers Expert (en fonction de la langue).
 A noter que dans ce dernier exemple, on utilise une "page" qui est présente PARTOUT (menubar) donc qui doit être chargée tout le temps.
 Il faut penser à rajouter dans le composant Localise son chargement par défaut.



 */