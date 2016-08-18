import React                  from 'react';
import {bindActionCreators} from 'redux';
import {connect}            from 'react-redux';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';
import   ReactDom               from 'react-dom';
import {calculateResponsiveState} from './../../actions/index'
import * as HomeActions    from './../../actions/HomeActions';
import {PUBLIC_VIDEOS_PATH, PUBLIC_IMAGES_PATH, ROUTING} from './../../constants/DefaultConstants';
import {Button} from 'react-bootstrap';
import Video from 'react-html5video';
import Radium, {Style} from 'radium'
import * as LocaliseActions    from './../../actions/LocaliseActions';


@Radium
class LocText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    componentDidMount() {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.localise != nextProps.localise)
    }


    setEditable() {
        var textinherit = this.props.localise.last_result[this.props.textzone];
        var textzone = this.props.textzone;
        if (this.state.isEditing == false) {
            document.getElementById('tz-' + textzone).contentEditable = 'true';
            document.getElementById('tz-' + textzone + '-img').src = PUBLIC_IMAGES_PATH + 'admin/valid.png';
            document.getElementById('tz-' + textzone).focus();
            this.setState({isEditing: true});
        } else {
            document.getElementById('tz-' + textzone).contentEditable = 'false';
            document.getElementById('tz-' + textzone + '-img').src = PUBLIC_IMAGES_PATH + 'admin/edit.png';
            this.setState({isEditing: false});
            this.props.localise_actions.changeElement(this.props.localise.localise_lang, this.props.page, textzone, document.getElementById('tz-' + textzone).innerText);
        }
    };

    render() {
        var styles = {
            picker: {
                position: 'absolute',
                width: '20px',
                height: '20px',
                marginTop: '-15px',
                cursor: 'pointer'
            },
        };

        var textinherit = "";
        var textzone = "";

        if (typeof this.props.localise.last_result !== 'undefined' && this.props.localise.last_result != null) {
            if (typeof this.props.localise.last_result[this.props.localise.localise_lang] !== 'undefined') {
                if (typeof this.props.localise.last_result[this.props.localise.localise_lang][this.props.page] !== 'undefined') {
                    textinherit = this.props.localise.last_result[this.props.localise.localise_lang][this.props.page][this.props.textzone];
                }
            }
            textzone = this.props.textzone;
        }
        if (typeof textinherit == 'undefined') {
            textinherit = "<br />";
        }
        var wrapper;
        if (typeof this.props.tagtype == 'undefined') {
            wrapper = (<div style={this.props.heritstyle} id={'tz-' + textzone}
                            dangerouslySetInnerHTML={{__html: textinherit.replace(/\n/g, "<br />")}}></div>);
        } else {
            if (this.props.tagtype == 'p') {
                wrapper = (<p style={this.props.heritstyle} id={'tz-' + textzone}
                              dangerouslySetInnerHTML={{__html: textinherit.replace(/\n/g, "<br />")}}></p>);
            } else if (this.props.tagtype == 'h1') {
                wrapper = (<h1 style={this.props.heritstyle} id={'tz-' + textzone}
                               dangerouslySetInnerHTML={{__html: textinherit.replace(/\n/g, "<br />")}}></h1>);
            } else if (this.props.tagtype == 'h2') {
                wrapper = (<h2 style={this.props.heritstyle} id={'tz-' + textzone}
                               dangerouslySetInnerHTML={{__html: textinherit.replace(/\n/g, "<br />")}}></h2>);
            } else if (this.props.tagtype == 'h3') {
                wrapper = (<h3 style={this.props.heritstyle} id={'tz-' + textzone}
                               dangerouslySetInnerHTML={{__html: textinherit.replace(/\n/g, "<br />")}}></h3>);
            } else if (this.props.tagtype == 'link') {
                wrapper = (
                    <Link to={ROUTING[this.props.to][this.props.localise.localise_lang]} style={this.props.heritstyle}
                          id={'tz-' + textzone}
                          dangerouslySetInnerHTML={{__html: textinherit.replace(/\n/g, "<br />")}}></Link>);
            } else {
                wrapper = (<div style={this.props.heritstyle} id={'tz-' + textzone}
                                dangerouslySetInnerHTML={{__html: textinherit.replace(/\n/g, "<br />")}}></div>);
            }
        }
        return (
            <span style={{display: 'block'}}>
                {this.props.localise.isAdmin && (
                    <div style={styles.picker}><a onClick={()=> this.setEditable()}><img id={'tz-' + textzone + '-img'}
                                                                                         src={PUBLIC_IMAGES_PATH + '/admin/edit.png'}
                                                                                         width="20" height="20"/></a>
                    </div>) }
                {wrapper}</span>
        );
    }
}


const mapStateToProps = (state) => (

{
    localise: state.localise,
});

const mapDispatchToProps = (dispatch) => ({
    localise_actions: bindActionCreators(LocaliseActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(LocText);