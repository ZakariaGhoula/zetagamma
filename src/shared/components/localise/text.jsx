import React                  from 'react';
import {bindActionCreators} from 'redux';
import {connect}            from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import   ReactDom               from 'react-dom';
import {calculateResponsiveState} from './../../actions/index'
import * as HomeActions    from './../../actions/HomeActions';
import {PUBLIC_VIDEOS_PATH, PUBLIC_IMAGES_PATH} from './../../constants/DefaultConstants';
import {Button} from 'react-bootstrap';
import Video from 'react-html5video';
import Radium, {Style} from 'radium'

@Radium
class LocText extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.localise != nextProps.localise)
    }

    render() {
        var textinherit = "";
        if (typeof this.props.localise.last_result !== 'undefined' && this.props.localise.last_result != null) {
            textinherit = this.props.localise.last_result[this.props.textzone];
        }

        return (
            <div>{textinherit}</div>
        );
    }
}


const mapStateToProps = (state) => (

{
    localise: state.localise,
});

const mapDispatchToProps = (dispatch) => ({});


export default connect(mapStateToProps, mapDispatchToProps)(LocText);