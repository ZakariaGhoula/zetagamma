import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Radium, { Style } from 'radium'
import {PUBLIC_VIDEOS_PATH, PUBLIC_IMAGES_PATH} from './../../constants/DefaultConstants';
import color from "color";
import Menubar from './menubar';

@Radium
export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header >
                <Menubar />
            </header>
        );
    }

}


const mapStateToProps = (state) => (

{
    browser: state.browser
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);