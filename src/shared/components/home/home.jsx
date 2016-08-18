import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import   ReactDom               from 'react-dom';
import {calculateResponsiveState} from './../../actions/index'
import * as HomeActions    from './../../actions/HomeActions';
import {PUBLIC_VIDEOS_PATH, PUBLIC_IMAGES_PATH} from './../../constants/DefaultConstants';
import { Button } from 'react-bootstrap';
import Video from 'react-html5video';
import Radium, {Style} from 'radium';
import {Link, Element} from 'react-scroll';
import UnderGrid from './underGrid';
import LocText from '../localise/text';
import {GlobalStyle, GraphChart} from './../../constants/GlobalStyle'

@Radium
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (typeof this.props.data_home !== 'undefined' && this.props.data_home == null) {
            //     this.props.dispatch();
            //  this.props.actions.retrieveDataHome();
        }
    }

    componentWillUpdate(nextProps, nextState) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.localise != nextProps.localise)
    }

    render() {
        var styles = {
            video: {
                width: '100%',
                opacity: '1',
                display: 'block'
            },
            baseline: {
                marginTop: '10%',
                position: 'absolute',
                color: '#fff',
                width: '100%',
                fontSize: '3.7vw',
                fontFamily: GraphChart.font.mainFont,
                // textTransform: "uppercase",
                fontVariant: 'small-caps',
                fontWeight: 400,
                letterSpacing: '0.6vw',
                lineHeight: '5vw',
                wordSpacing: '10px',
                textAlign: 'center',
                zIndex: 2
            },
            centerLogoStyle: {
                display: 'inline-block',
                width: '70px',
                margin: '0px auto 15px',
                border: '8px solid #fff'
            },
            mainGrid: {
                background: GraphChart.color.globalBackground,
                paddingBottom: '100px'
            },
            simpleColDiv: {
                marginTop: '20px',
                padding: '30px',
                minHeight: '320px',
                textAlign: 'center',
            },
            scrollDownBtn: {
                position: 'relative',
                bottom: '10vw',
                textAlign: 'center',
                color: '#fff',
                border: "none",
                outline: "0",
                background: "0 0",
                opacity: '.6',
                transition: 'all .3s',
                ':hover': {
                    opacity: '1',
                }
            },
            scrollDownIcon: {
                width: '35px',
                marginBottom: '20px'
            }
        }

        var scrollDown = (
            <div style={styles.scrollDownBtn}>
                <Link
                    style={{color: '#fff', cursor: 'pointer', textDecoration: 'none', fontStyle: 'italic'}}
                    to="scroll1" smooth={true} offset={-50} duration={1000}>
                    <img style={styles.scrollDownIcon} src={PUBLIC_IMAGES_PATH + "svg/mouse.svg"}/><br />
                    <LocText page="home" textzone="scrolldown"/>
                </Link>
            </div>
        )
        // var letext = "";
        // if(typeof this.props.localise.last_result != 'undefined'){
        // letext = this.props.localise.last_result[0].content;
        // }
        return (
            <Grid style={styles.mainGrid} className="home" fluid ref="home">
                <Row className="show-grid">
                    <Col id="show-row">
                        <div style={styles.baseline}>
                            <img style={styles.centerLogoStyle} src={PUBLIC_IMAGES_PATH + "logo_ZG.png"}/>
                            <br />
                            <LocText page="home" textzone="header"/>
                        </div>
                        {this.props.browser.greaterThan.medium && (<Video autoPlay muted style={styles.video}
                                                                          poster={PUBLIC_IMAGES_PATH + "Landing_debut.png"}
                                                                          onCanPlayThrough={() => {
                                                                              // Do stuff
                                                                          }}>
                            <source src={PUBLIC_VIDEOS_PATH + "landing_zg4.mp4"} type="video/mp4"/>
                        </Video>) }
                        {this.props.browser.lessThan.large && (
                            <img src={PUBLIC_IMAGES_PATH + "Landing_mobile2.jpg"} style={styles.video}/>) }

                        {!this.props.browser.lessThan.medium && scrollDown}
                    </Col>
                </Row>

                <Grid className="home" ref="home">
                    <Element name="scroll1">

                        <h3 style={[GlobalStyle.h3, {marginBottom: '70px'}]}><LocText page="home" textzone="subhead"/>
                        </h3>
                    </Element>
                </Grid>
                <UnderGrid>

                    <LocText tagtype="h2" heritstyle={[GlobalStyle.h2, {margin: '70px 0px 20px 0px'}]} page="home"
                             textzone="presta_props"/>

                    <Row>

                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={GlobalStyle.hr}/>
                                <LocText heritstyle={[GlobalStyle.h2, {margin: '30px auto'}]} tagtype="p" page="home"
                                         textzone="presta_item1_header"/>
                                <LocText heritstyle={GlobalStyle.p} tagtype="p" page="home"
                                         textzone="presta_item1_content"/>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={GlobalStyle.hr}/>
                                <LocText heritstyle={[GlobalStyle.h2, {margin: '30px auto'}]} tagtype="p" page="home"
                                         textzone="presta_item3_header"/>
                                <LocText heritstyle={GlobalStyle.p} tagtype="p" page="home"
                                         textzone="presta_item3_content"/>
                            </div>
                        </Col>

                        <Clearfix />

                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={GlobalStyle.hr}/>
                                <LocText heritstyle={[GlobalStyle.h2, {margin: '30px auto'}]} tagtype="p" page="home"
                                         textzone="presta_item2_header"/>
                                <LocText heritstyle={GlobalStyle.p} tagtype="p" page="home"
                                         textzone="presta_item2_content"/>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={GlobalStyle.hr}/>
                                <LocText heritstyle={[GlobalStyle.h2, {margin: '30px auto'}]} tagtype="p" page="home"
                                         textzone="presta_item4_header"/>
                                <LocText heritstyle={GlobalStyle.p} tagtype="p" page="home"
                                         textzone="presta_item4_content"/>
                            </div>
                        </Col>

                    </Row>
                </UnderGrid>
            </Grid>


        )
            ;
    }
}

const mapStateToProps = (state) => (

{
    browser: state.browser,
    localise: state.localise,
    data_home: state.home.data_home
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(HomeActions, dispatch),


});

export default connect(mapStateToProps, mapDispatchToProps)(Home);