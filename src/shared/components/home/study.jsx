import React                  from 'react';
import {bindActionCreators} from 'redux';
import {connect}            from 'react-redux';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
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
class Study extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.localise_actions.switchPage('study');
    }

    render() {
        var styles = {
            pictureDiv: {
                width: '100%',
                opacity: '0.7',
                maxHeight: '600px',
                height: '600px',
            },
            pictureDivContainer: {
                width: '100%',
                opacity: '1',
                maxHeight: '600px',
                height: '600px',
                background: '#000',
                display: 'block',
            },
            baseline: {
                marginTop: '320px',
                position: 'absolute',
                color: '#fff',
                width: '100%',
                fontSize: '60px',
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
                background: GraphChart.color.globalBackground,
                paddingBottom: '100px'
            },
            simpleColDiv: {
                padding: '0px 30px 0px 30px',
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
        return (
            <Grid style={styles.mainGrid} className="study" fluid ref="study">
                <Row className="show-grid">
                    <Col id="show-row">
                        <div style={styles.baseline}>
                            <LocText page="study" textzone="header"/>
                        </div>
                        <div style={styles.pictureDivContainer}>
                            <div style={[styles.pictureDiv, {
                                backgroundImage: "url('" + PUBLIC_IMAGES_PATH + "study/background.jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }]}></div>
                        </div>
                    </Col>
                </Row>

                <Grid fluid style={{margin: '20px auto 0px auto', padding: '5px 0px 5px 0px'}}>
                    <Row>
                        <Col lgOffset={1} mdOffset={1} lg={5} md={5} xs={12} style={{marginBottom: '30px'}}>
                            <div style={{margin: '15px', background: '#fff', textAlign: 'center'}}>
                                <img src={PUBLIC_IMAGES_PATH + "study/exemple1.jpg"} width="100%"/>
                                <div style={{padding: '15px'}}>
                                    <hr style={{width: '120px', border: '1px solid #4a4a4a'}}/>
                                    <h3 style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: '26px',
                                        display: 'inline-block',
                                        textAlign: 'center',
                                        margin: '13px auto 40px'
                                    }}>Do It In Paris</h3>
                                    <p style={GlobalStyle.p}>

                                        Nous assurons la réalisation d’un projet informatique, issu d’une idée à
                                        développer
                                        ou d’un concept innovant proposé par nos clients. Nous garantissons un suivi du
                                        projet durant les différentes étapes pour un résultat respectant l’équilibre
                                        qualité-coût- délai.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={5} xs={12} style={{marginBottom: '30px'}}>
                            <div style={{margin: '15px', background: '#fff', textAlign: 'center'}}>
                                <img src={PUBLIC_IMAGES_PATH + "study/exemple2.jpg"} width="100%"/>
                                <div style={{padding: '15px'}}>
                                    <hr style={{width: '120px', border: '1px solid #4a4a4a'}}/>
                                    <h3 style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: '26px',
                                        display: 'inline-block',
                                        textAlign: 'center',
                                        margin: '13px auto 40px'
                                    }}>Encre Noire</h3>
                                    <p style={GlobalStyle.p}>
                                        Nous assurons la réalisation d’un projet informatique, issu d’une idée à
                                        développer
                                        ou d’un concept innovant proposé par nos clients. Nous garantissons un suivi du
                                        projet durant les différentes étapes pour un résultat respectant l’équilibre
                                        qualité-coût- délai.</p>
                                </div>
                            </div>
                        </Col>
                        <Clearfix />
                        <Col lgOffset={1} mdOffset={1} lg={5} md={5} xs={12} style={{marginBottom: '30px'}}>
                            <div style={{margin: '15px', background: '#fff', textAlign: 'center'}}>
                                <img src={PUBLIC_IMAGES_PATH + "study/exemple3.jpg"} width="100%"/>
                                <div style={{padding: '15px'}}>
                                    <hr style={{width: '120px', border: '1px solid #4a4a4a'}}/>
                                    <h3 style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: '26px',
                                        display: 'inline-block',
                                        textAlign: 'center',
                                        margin: '13px auto 40px'
                                    }}>Crossyjob</h3>
                                    <p style={GlobalStyle.p}>
                                        Nous assurons la réalisation d’un projet informatique, issu d’une idée à
                                        développer
                                        ou d’un concept innovant proposé par nos clients. Nous garantissons un suivi du
                                        projet durant les différentes étapes pour un résultat respectant l’équilibre
                                        qualité-coût- délai.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={5} xs={12} style={{marginBottom: '30px'}}>
                            <div style={{margin: '15px', background: '#fff', textAlign: 'center'}}>
                                <img src={PUBLIC_IMAGES_PATH + "study/exemple4.jpg"} width="100%"/>
                                <div style={{padding: '15px'}}>
                                    <hr style={{width: '120px', border: '1px solid #4a4a4a'}}/>
                                    <h3 style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: '26px',
                                        display: 'inline-block',
                                        textAlign: 'center',
                                        margin: '13px auto 40px'
                                    }}>Pierres d'Histoire</h3>
                                    <p style={GlobalStyle.p}>
                                        Nous assurons la réalisation d’un projet informatique, issu d’une idée à
                                        développer
                                        ou d’un concept innovant proposé par nos clients. Nous garantissons un suivi du
                                        projet durant les différentes étapes pour un résultat respectant l’équilibre
                                        qualité-coût-délai.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
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
    localise_actions: bindActionCreators(LocaliseActions, dispatch),

});

export default connect(mapStateToProps, mapDispatchToProps)(Study);