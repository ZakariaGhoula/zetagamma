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

@Radium
class Home extends React.Component {
    constructor(props) {
        super(props);
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
                fontFamily: "'Alegreya Sans', sans-serif",
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
                background: '#f3f3f3',
                paddingBottom: '100px'
            },
            simpleColDiv: {
                marginTop: '20px',
                padding: '30px',
                minHeight: '360px',
                color: '#4a4a4a',
                textAlign: 'center',
                fontFamily: "'Alegreya Sans', sans-serif",
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
                <Row className="show-grid" id="video-row">
                    <Col>
                        <div style={styles.baseline}>
                            <img style={styles.centerLogoStyle} src={PUBLIC_IMAGES_PATH + "logo_ZG.png"}/>
                            <br />
                            La solution digitale au profit de la<br />performance
                        </div>
                        <Video autoPlay muted style={styles.video}
                               poster={PUBLIC_IMAGES_PATH + "Landing_debut.png"}
                               onCanPlayThrough={() => {
                                   // Do stuff
                               }}>
                            <source src={PUBLIC_VIDEOS_PATH + "landing_zg4.mp4"} type="video/mp4"/>
                        </Video>
                        {!this.props.browser.lessThan.medium && scrollDown}
                    </Col>
                </Row>

                <Grid className="home" ref="home">
                    <Element name="scroll1">

                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: '28px',
                            display: 'block',
                            color: '#4a4a4a',
                            textAlign: 'center',
                            margin: '40px auto',
                            letterSpacing: '1px'
                        }}>
                            Zetagamma est une agence digitale </h2>
                        <h3 style={{
                            fontFamily: "'Alegreya Sans', sans-serif",
                            fontSize: '24px',
                            lineHeight: '30px',
                            color: '#4a4a4a',
                            display: 'block',
                            textAlign: 'justify',
                            textAlignLast: 'center',
                            margin: '40px auto',
                            fontWeight: 300
                        }}>
                            Nous proposons des réponses concrètes pour répondre aux besoins de nos clients.
                            Grâce à un large éventail de services, nous accompagnons le client tout au long de
                            l’élaboration
                            de sa solution digitale.</h3>
                    </Element>
                </Grid>
                <UnderGrid>
                    <Row>
                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={{width: '120px', border: '1px solid #4a4a4a'}}/>
                                <h1 style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: '26px',
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    margin: '13px auto 40px'
                                }}>Gestion de projet</h1>
                                <p style={{textAlign: 'justify', fontSize: '16px', lineHeight: '26px'}}>
                                    Nous assurons la réalisation d’un projet informatique, issu d’une idée à développer
                                    ou d’un concept innovant proposé par nos clients. Nous garantissons un suivi du
                                    projet durant les différentes étapes pour un résultat respectant l’équilibre
                                    qualité-coût- délai.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={{width: '120px', border: '1px solid #4a4a4a'}}/>
                                <h1 style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: '26px',
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    margin: '13px auto 40px'
                                }}>Stratégie digitale et marketing</h1>

                                <p style={{textAlign: 'justify', fontSize: '16px', lineHeight: '26px'}}>
                                    Nous aidons les entreprises à mieux gérer leur activité actuelle afin de la mettre à
                                    profit. Notre objectif est d’intensifier la force du service ou du produit et
                                    d’accroître la notoriété de l’entreprise.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div style={styles.simpleColDiv}>
                                {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                                <hr style={{width: '150px', border: '1px solid #4a4a4a'}}/>
                                <h1 style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: '26px',
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    margin: '13px auto 40px'
                                }}>Développement et maintenance</h1>

                                <p style={{textAlign: 'justify', fontSize: '16px', lineHeight: '26px'}}>
                                    Nous développons des applications web et mobiles grâces aux dernières technologies.
                                    Nous
                                    assurons la maintenance de l’application et proposons des formations à nos clients
                                    adaptées à leurs besoins d’autonomie.</p>
                            </div>
                        </Col> <Col lg={6} md={6} xs={12}>
                        <div style={styles.simpleColDiv}>
                            {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                            <hr style={{width: '150px', border: '1px solid #4a4a4a'}}/>
                            <h1 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '26px',
                                display: 'inline-block',
                                textAlign: 'center',
                                margin: '13px auto 40px'
                            }}>Conception graphique</h1>

                            <p style={{textAlign: 'justify', fontSize: '16px', lineHeight: '26px'}}>
                                Le design de nos applications permettra au client d’exprimer ses valeurs et ses
                                spécificités. Nous exploitons notre savoir-faire et notre expérience pour saisir et
                                véhiculer l’identité visuelle de l’entreprise. </p>
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
    browser: state.browser
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(HomeActions, dispatch),


});

export default connect(mapStateToProps, mapDispatchToProps)(Home);