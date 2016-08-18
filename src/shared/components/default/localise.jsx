import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Radium, {Style} from 'radium'
import {PUBLIC_VIDEOS_PATH, PUBLIC_IMAGES_PATH} from './../../constants/DefaultConstants';
import color from "color";
import * as LocaliseActions    from './../../actions/LocaliseActions';


@Radium
export default class Localise extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        if (typeof this.props.localise.last_result !== 'undefined' && this.props.localise.last_result == null) {
            this.props.localise_actions.loadLanguage(this.props.localise.localise_lang, this.props.localise.page_displayed);

            //Here must appear every components that have to be reloaded on each page:
            this.props.localise_actions.loadLanguage(this.props.localise.localise_lang, 'footer');
            this.props.localise_actions.loadLanguage(this.props.localise.localise_lang, 'menubar');
        }
    }


    componentWillUpdate(nextProps, nextState) {
        this.props.localise_actions.loadLanguage(nextProps.localise.localise_lang, nextProps.localise.page_displayed);

        //Here must appear every components that have to be reloaded on each page:
        this.props.localise_actions.loadLanguage(nextProps.localise.localise_lang, 'footer');
        this.props.localise_actions.loadLanguage(nextProps.localise.localise_lang, 'menubar');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.localise.localise_lang != this.props.localise.localise_lang)
    }

    render() {
        return (<div></div>);
    }

}


const mapStateToProps = (state) => (

{
    browser: state.browser,
    localise: state.localise
});

const mapDispatchToProps = (dispatch) => ({
    localise_actions: bindActionCreators(LocaliseActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Localise);