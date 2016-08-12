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
import Radium, {Style} from 'radium';
import {Link, Element} from 'react-scroll';
import UnderGrid from './underGrid';
import {GlobalStyle, GraphChart} from './../../constants/GlobalStyle'

@Radium
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.retrieveDataHome();
    }

    componentWillUpdate(nextProps, nextState) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (false)
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
                    Scroll down
                </Link>
            </div>
        )

        return (
            <Grid style={styles.mainGrid} className="home" fluid ref="home">
                <Row className="show-grid">
                    <Col id="video-row">
                        <div style={styles.baseline}>
                            <img style={styles.centerLogoStyle} src={PUBLIC_IMAGES_PATH + "logo_ZG.png"}/>
                            <br />
                            La solution digitale au profit de la<br />performance
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

                        <h3 style={[GlobalStyle.h3, {marginBottom: '70px'}]}>
                            ZetaGamma, agence digitale disposant d’une vaste gamme de services, conçoit des solutions
                            digitales concrètes adaptées aux attentes de sa clientèle.</h3>
                    </Element>
                </Grid>
                <UnderGrid>

                    <h2 style={[GlobalStyle.h2, {margin: '70px 0px 20px 0px'}]}>Prestations proposées</h2>

                    <Row>

                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={GlobalStyle.hr}/>
                                <h2 style={[GlobalStyle.h2, {margin: '30px auto'}]}>Développement et maintenance</h2>

                                <p style={GlobalStyle.p}>
                                    Nous développons des applications web et mobiles grâces aux dernières technologies.
                                    Nous
                                    assurons la maintenance de l'application et proposons des formations à nos clients
                                    adaptées à leurs besoins d’autonomie.</p>
                            </div>
                        </Col>

                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={GlobalStyle.hr}/>
                                <h2 style={[GlobalStyle.h2, {margin: '30px auto'}]}>Gestion de projet</h2>
                                <p style={GlobalStyle.p}>
                                    Dans le but d'atteindre les objectifs fixés par le client, nous assurons la
                                    coordination et la maitrise des activités durant le déroulement du projet pour un
                                    résultat respectant l’équilibre qualité-coût-délai.</p>
                            </div>
                        </Col>

                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={GlobalStyle.hr}/>
                                <h2 style={[GlobalStyle.h2, {margin: '30px auto'}]}>Stratégie digitale et marketing</h2>

                                <p style={GlobalStyle.p}>
                                    Nous prenons part à la détermination, l’organisation et la structuration de
                                    l’ensemble des choix d’objectifs et de ressources à court, moyen ou long terme en
                                    vue d’optimiser le service proposé par notre clientèle et d’accroître sa
                                    notoriété.</p>
                            </div>
                        </Col>

                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={GlobalStyle.hr}/>
                                <h2 style={[GlobalStyle.h2, {margin: '30px auto'}]}>Conception graphique</h2>

                                <p style={GlobalStyle.p}>
                                    Nous exerçons notre savoir-faire pour révéler les valeurs et l’identité de nos
                                    clients à
                                    travers un design unique répondant aux normes techniques et esthétiques. </p>
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
    data_home: state.home.data_home
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(HomeActions, dispatch),


});

export default connect(mapStateToProps, mapDispatchToProps)(Home);