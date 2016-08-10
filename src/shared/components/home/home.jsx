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
            baseline:{
                marginTop:'10%',
                position:'absolute',
                color: '#fff',
                width: '100%',
                fontSize:'3.7vw',
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
            centerLogoStyle:{
                display:'inline-block',
                width:'70px',
                margin:'0px auto 15px',
                border:'8px solid #fff'
            },
            mainGrid:{
                background: '#efefef'
            },
            simpleColDiv:{
                marginTop: '20px',
                padding: '30px',
                minHeight: '360px',
                color: '#021016',
                textAlign: 'center',
                fontFamily: "'Alegreya Sans', sans-serif",
            }
        }
        let message ="";
        if (typeof this.props.browser !== "undefined") {
            message += `The viewport's current media type is: ${this.props.browser.mediaType}.`
            ;
            if (this.props.browser.lessThan.small) {
                message += 'Secret message for viewports smaller than than the "small" breakpoint!'
            } else if (this.props.browser.lessThan.medium) {
                message += 'Secret message for viewports between the "small" and "medium" breakpoints!'
            } else {
                message += 'Message for viewports greater than the "medium" breakpoint.'
            }
        }

        return (
            <Grid style={styles.mainGrid} className="home" fluid ref="home">
                <Row className="show-grid">
                    <Col>

                        <div style={styles.baseline}><img style={styles.centerLogoStyle} src={PUBLIC_IMAGES_PATH + "logo_ZG.png"} /><br />La solution digitale au profit de la<br />performance</div>
                        <Video autoPlay muted style={styles.video}
                               poster={PUBLIC_IMAGES_PATH + "Landing_ZG_01.png"}
                               onCanPlayThrough={() => {
                                   // Do stuff
                               }}>
                            <source src={PUBLIC_VIDEOS_PATH + "landing_zg4.mp4"} type="video/mp4" />
                        </Video>

                    </Col>
                </Row>
                <UnderGrid>
                    <Row>
                        <Col lg={6} md={6} xs={12}><div style={styles.simpleColDiv}>
                            {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                            <hr style={{width: '120px', border: '1px solid #021016'}} /> <h1 style={{fontFamily:"'Playfair Display', serif", fontSize:'26px', display:'inline-block', textAlign:'center', margin:'13px auto 40px'}}>Gestion de projet</h1>

                            <p style={{textAlign:'justify',fontSize:'16px',lineHeight:'26px'}}>
                                Nous assurons la réalisation d’un projet informatique, issu d’une idée à développer ou d’un concept
                                innovant  proposé par nos clients. Nous offrons à la fois conseils, gestion et développement pour
                                répondre aux exigences du client. Nous garantissons un suivi du projet durant les différentes étapes
                                pour un résultat respectant l'équilibre qualité-coût-délai.</p>
                        </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}><div style={styles.simpleColDiv}>
                            {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                            <hr style={{width: '120px', border: '1px solid #021016'}} /> <h1 style={{fontFamily:"'Playfair Display', serif", fontSize:'26px', display:'inline-block', textAlign:'center', margin:'13px auto 40px'}}>Gestion de projet</h1>

                            <p style={{textAlign:'justify',fontSize:'16px',lineHeight:'26px'}}>
                                Nous assurons la réalisation d’un projet informatique, issu d’une idée à développer ou d’un concept
                                innovant  proposé par nos clients. Nous offrons à la fois conseils, gestion et développement pour
                                répondre aux exigences du client. Nous garantissons un suivi du projet durant les différentes étapes
                                pour un résultat respectant l'équilibre qualité-coût-délai.</p>
                        </div>
                        </Col>
                        <Col  lg={12} md={12} xs={12} style={{textAlign:'center', fontSize:'40px'}}>☺</Col>
                        <Col lg={6} md={6} xs={12}><div style={styles.simpleColDiv}>
                        {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                        <hr style={{width: '150px', border: '1px solid #021016'}} /> <h1 style={{fontFamily:"'Playfair Display', serif", fontSize:'26px', display:'inline-block', textAlign:'center', margin:'13px auto 40px'}}>Gestion de projet</h1>

                        <p style={{textAlign:'justify',fontSize:'16px',lineHeight:'26px'}}>
                            Nous assurons la réalisation d’un projet informatique, issu d’une idée à développer ou d’un concept
                            innovant  proposé par nos clients. Nous offrons à la fois conseils, gestion et développement pour
                            répondre aux exigences du client. Nous garantissons un suivi du projet durant les différentes étapes
                            pour un résultat respectant l'équilibre qualité-coût-délai.</p>
                    </div>
                    </Col>  <Col lg={6} md={6} xs={12}><div style={styles.simpleColDiv}>
                        {/*<div style={{backgroundImage: 'url(' + PUBLIC_IMAGES_PATH + '/svg/task.svg)', width:'80px', height:'80px', margin:'auto'}} ></div>*/}
                        <hr style={{width: '150px', border: '1px solid #021016'}} /> <h1 style={{fontFamily:"'Playfair Display', serif", fontSize:'26px', display:'inline-block', textAlign:'center', margin:'13px auto 40px'}}>Gestion de projet</h1>

                        <p style={{textAlign:'justify',fontSize:'16px',lineHeight:'26px'}}>
                            Nous assurons la réalisation d’un projet informatique, issu d’une idée à développer ou d’un concept
                            innovant  proposé par nos clients. Nous offrons à la fois conseils, gestion et développement pour
                            répondre aux exigences du client. Nous garantissons un suivi du projet durant les différentes étapes
                            pour un résultat respectant l'équilibre qualité-coût-délai.</p>
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