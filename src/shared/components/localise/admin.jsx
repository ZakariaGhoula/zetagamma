import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Radium, {Style} from 'radium'
import {PUBLIC_VIDEOS_PATH, PUBLIC_IMAGES_PATH} from './../../constants/DefaultConstants';
import color from "color";
import LoadingBar from 'react-redux-loading-bar'
import * as LocaliseActions    from './../../actions/LocaliseActions';


@Radium
export default class Admin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            konamiCodePosition: 0
        };
        this.cofunc = this.cofunc.bind(this);
        this.spyKey = this.spyKey.bind(this);
    }

    cofunc(adminpwd) {
        this.props.localise_actions.logAdmin(adminpwd);
    };

    spyKey(e) {

        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            65: 'a',
            66: 'b'
        };
        var konamiCode = ['up', 'left', 'down', 'right', 'a', 'b'];


        var theCofunc = this.cofunc;
        // get the value of the key code from the key map
        var key = allowedKeys[e.keyCode];
        // get the value of the required key from the konami code
        var konamiCodePosition = this.state.konamiCodePosition;
        var requiredKey = konamiCode[konamiCodePosition];

        // compare the key with the required key
        if (key == requiredKey) {

            // move to the next key in the konami code sequence
            konamiCodePosition++;

            // if the last key is reached, activate cheats
            if (konamiCodePosition == konamiCode.length) {
                konamiCodePosition = 0;
                var adminpwd = prompt("Veuillez entrer le mot de passe administrateur :");
                theCofunc(adminpwd);
            }
        } else
            konamiCodePosition = 0;

        this.setState({konamiCodePosition: konamiCodePosition});
    };

    componentDidMount() {
        window.addEventListener('keydown', this.spyKey);
    }


    componentWillUnmount() {
        window.removeEventListener('keydown', this.spyKey);
    }

    render() {

        return (
            <div></div>
        );
    }

}


const mapStateToProps = (state) => (

{
    localise: state.localise
});

const mapDispatchToProps = (dispatch) => ({
    localise_actions: bindActionCreators(LocaliseActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

