import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { Grid, Row, Col} from 'react-bootstrap';
import   ReactDom               from 'react-dom';
import {calculateResponsiveState} from './../../actions/index'
import * as HomeActions    from './../../actions/HomeActions';
import {PUBLIC_VIDEOS_PATH, PUBLIC_IMAGES_PATH} from './../../constants/DefaultConstants';
import { Button } from 'react-bootstrap';
import Video from 'react-html5video';
import Radium, { Style } from 'radium'

@Radium
class UnderGrid extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        var styles = {
            underGrid:{
                background: '#fff',
            },
        }

        return (
            <Grid ref="mainPage1" style={styles.underGrid}>
                {this.props.children}
                </Grid>
        )
            ;
    }
}
export default UnderGrid;