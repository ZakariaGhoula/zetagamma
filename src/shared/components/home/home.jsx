import React                  from 'react';
import {bindActionCreators} from 'redux';
import {connect}            from 'react-redux';
import {Grid, Row, Col, Clearfix, FormControls} from 'react-bootstrap';
import   ReactDom               from 'react-dom';
import {calculateResponsiveState} from './../../actions/index'
import * as HomeActions    from './../../actions/HomeActions';
import {PUBLIC_VIDEOS_PATH, PUBLIC_IMAGES_PATH} from './../../constants/DefaultConstants';
import {Button} from 'react-bootstrap';
import Video from 'react-html5video';
import Radium, {Style} from 'radium';
import {Link, Element} from 'react-scroll';
import LocText from '../localise/text';
import {GlobalStyle, GraphChart} from './../../constants/GlobalStyle'
import * as LocaliseActions    from './../../actions/LocaliseActions';
import ContactForm from './../element/contact'
import UnderGrid from './../element/underGrid';

@Radium
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillMount() {
        this.props.localise_actions.switchPage('home');

    }

    componentWillUpdate(nextProps, nextState) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return (false);
        //      return (this.props.localise != nextProps.localise)
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
                fontWeight: 100,
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
            },
            contactInput: {
                borderRadius: 0,
                width: '100%',
                margin: '10px',
                height: '28px',
                padding: '1px',
                borderWidth: '0px 0px 1px 0px',
                borderColor: '#e3e3e3',
                outline: 'none',
                fontFamily: GraphChart.font.mainFont,
                fontSize: '17px',
                letterSpacing: '1px',
                color: GraphChart.color.dark,
                resize: 'none',
                transform: '1s ease-out'
            },
            contactOnFocus: {
                height: '200px'
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

                        <h3 style={[GlobalStyle.h3under, {marginBottom: '70px'}]}><LocText page="home"
                                                                                           textzone="subhead"/>
                        </h3>
                    </Element>
                </Grid>
                <UnderGrid>

                    <LocText tagtype="h2" heritstyle={[GlobalStyle.h2, {margin: '70px 0px 20px 0px'}]} page="home"
                             textzone="presta_props"/>

                    <Row style={{paddingBottom: '50px'}}>

                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={GlobalStyle.hr}/>
                                <LocText heritstyle={[GlobalStyle.h3, {margin: '30px auto'}]} tagtype="h3" page="home"
                                         textzone="presta_item1_header"/>
                                <LocText heritstyle={GlobalStyle.p} tagtype="p" page="home"
                                         textzone="presta_item1_content"/>
                                <div style={{textAlign: 'center', marginTop: '35px'}}>
                                    <LocText page="home" textzone="button_3" tagtype="link" heritstyle={{
                                        padding: '6px 16px',
                                        border: '1px solid #757575',
                                        display: 'inline-block',
                                        color: 'rgb(74, 74, 74)',
                                        textDecoration: 'none',
                                        textAlign: 'center',
                                        fontFamily: GraphChart.font.mainFont,
                                        fontSize: '15px'
                                    }} to="expert"/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={GlobalStyle.hr}/>
                                <LocText heritstyle={[GlobalStyle.h3, {margin: '30px auto'}]} tagtype="h3" page="home"
                                         textzone="presta_item3_header"/>
                                <LocText heritstyle={GlobalStyle.p} tagtype="p" page="home"
                                         textzone="presta_item3_content"/>
                                <div style={{textAlign: 'center', marginTop: '35px'}}>
                                    <LocText page="home" textzone="button_3" tagtype="link" heritstyle={{
                                        padding: '6px 16px',
                                        border: '1px solid #757575',
                                        display: 'inline-block',
                                        color: 'rgb(74, 74, 74)',
                                        textDecoration: 'none',
                                        textAlign: 'center',
                                        fontFamily: GraphChart.font.mainFont,
                                        fontSize: '15px'
                                    }} to="expert"/>
                                </div>
                            </div>
                        </Col>

                        <Clearfix />

                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={GlobalStyle.hr}/>
                                <LocText heritstyle={[GlobalStyle.h3, {margin: '30px auto'}]} tagtype="h3" page="home"
                                         textzone="presta_item2_header"/>
                                <LocText heritstyle={GlobalStyle.p} tagtype="p" page="home"
                                         textzone="presta_item2_content"/>
                                <div style={{textAlign: 'center', marginTop: '35px'}}>
                                    <LocText page="home" textzone="button_3" tagtype="link" heritstyle={{
                                        padding: '6px 16px',
                                        border: '1px solid #757575',
                                        display: 'inline-block',
                                        color: 'rgb(74, 74, 74)',
                                        textDecoration: 'none',
                                        textAlign: 'center',
                                        fontFamily: GraphChart.font.mainFont,
                                        fontSize: '15px'
                                    }} to="expert"/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={GlobalStyle.hr}/>
                                <LocText heritstyle={[GlobalStyle.h3, {margin: '30px auto'}]} tagtype="h3" page="home"
                                         textzone="presta_item4_header"/>
                                <LocText heritstyle={GlobalStyle.p} tagtype="p" page="home"
                                         textzone="presta_item4_content"/>
                                <div style={{textAlign: 'center', marginTop: '35px'}}>
                                    <LocText page="home" textzone="button_3" tagtype="link" heritstyle={{
                                        padding: '6px 16px',
                                        border: '1px solid #757575',
                                        display: 'inline-block',
                                        color: 'rgb(74, 74, 74)',
                                        textDecoration: 'none',
                                        textAlign: 'center',
                                        fontFamily: GraphChart.font.mainFont,
                                        fontSize: '15px'
                                    }} to="expert"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </UnderGrid>

                <Grid className="home" ref="home_mission">
                    <Element name="scroll2">
                        <h3 style={[GlobalStyle.h3under, {
                            marginBottom: '20px',
                            marginTop: '100px',
                            textAlign: 'center'
                        }]}><LocText page="home" textzone="etude_cas"/></h3>
                        <h2 style={[GlobalStyle.h2, {marginBottom: '70px'}]}><LocText page="home" textzone="projects"/>
                        </h2>
                    </Element>
                </Grid>
                <Grid>

                    <Row>
                        <Col>
                            <div>
                                <div style={{
                                    background: 'url(' + PUBLIC_IMAGES_PATH + '/home/Crossy-accueil.png)',
                                    height: '600px',
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'right',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                    <div style={{
                                        height: '600px',
                                        maxWidth: '425px',
                                        float: 'left',
                                        textAlign: 'center',
                                        padding: '120px 30px 30px 30px'
                                    }}><img src={PUBLIC_IMAGES_PATH + '/logo_pdh.png'}/> <br />
                                        <hr style={GlobalStyle.hr}/>
                                        <h2 style={GlobalStyle.h2}>Pierres d'Histoire</h2> <br /><br /> <LocText
                                            heritstyle={GlobalStyle.p} tagtype="p" page="home"
                                            textzone="projet_1_text"/>
                                        <div style={{textAlign: 'center', marginTop: '35px'}}>
                                            <LocText page="home" textzone="button_3" tagtype="link" heritstyle={{
                                                padding: '6px 16px',
                                                border: '1px solid #757575',
                                                display: 'inline-block',
                                                color: 'rgb(74, 74, 74)',
                                                textDecoration: 'none',
                                                textAlign: 'center',
                                                fontFamily: GraphChart.font.mainFont,
                                                fontSize: '15px'
                                            }} to="expert"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>

                <ContactForm />

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
    localise_actions: bindActionCreators(LocaliseActions, dispatch),


});

export default connect(mapStateToProps, mapDispatchToProps)(Home);