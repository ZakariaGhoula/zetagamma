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
        var styles = {
            base: {
                color: '#fff',

                // Adding interactive state couldn't be easier! Add a special key to your
                // style object (:hover, :focus, :active, or @media) with the additional rules.
                ':hover': {
                    background: '#222'
                }
            },

            primary: {
                background: 'none',
                width:'100%',
                zIndex: 101,
                border: 0,
                borderRadius: '0px',
                padding: '0px',
                margin: '0px',
                marginTop: '-15px',
                opacity: '1'
            },
            primaryWrapper: {
                background: 'none',
                position: 'fixed',
                width:'100%',
                zIndex: 100,
                border: 0,
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '0px',
                boxShadow: 'none',
                overflow: 'hidden',
                opacity: '1'
            },
            warning: {
                background: '#FF4136'
            },
            menuButton:{
              color:'#fff',
                fontWeight: 'bold',
                margin: '10px'
            }
        };
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