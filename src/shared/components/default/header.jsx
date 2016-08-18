import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Radium, { Style } from 'radium'
import {PUBLIC_VIDEOS_PATH, PUBLIC_IMAGES_PATH} from './../../constants/DefaultConstants';
import color from "color";
import Menubar from './menubar';
import Localise from './localise';
import Admin from '../localise/admin';
import LoadingBar from 'react-redux-loading-bar'
@Radium
export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextStates) {
        return ( this.props.loading !== nextProps.loading);
    }
    render() {
        return (
            <header >
                <LoadingBar />
                <Localise />
                <Menubar />
                <Admin />
            </header>
        );
    }

}


const mapStateToProps = (state) => (

{
    browser: state.browser,
    loading: state.loadingBar
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);