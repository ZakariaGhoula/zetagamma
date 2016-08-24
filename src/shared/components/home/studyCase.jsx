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
class StudyCase extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.localise_actions.switchPage('studyCase');
    }

    render() {
        var styles = {
            pictureDiv: {
                width: '100%',
                opacity: '1',
                maxHeight: '600px',
                height: '600px',
                display: 'inline-block'
            },
            pictureDivContainer: {
                width: '100%',
                opacity: '1',
                maxHeight: '600px',
                height: '600px',
                display: 'inline-block',
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
            <Grid style={styles.mainGrid} className="studyCase" fluid ref="studyCase">
                <Row className="show-grid">
                    <Col id="show-row">
                        <div style={styles.baseline}>
                            <LocText page={"studyCase-" + this.props.params.studyname} textzone="header"/>
                        </div>
                        <div style={[styles.pictureDivContainer, {
                            backgroundImage: "url('" + PUBLIC_IMAGES_PATH + "study/case/" + this.props.params.studyname + "/show-cover.jpg')",
                            backgroundSize: 'cover',
                            textAlign: 'center',
                            backgroundPosition: 'center',
                        }]}>
                            <span style={{display: 'inline-block', verticalAlign: 'middle', height: '100%'}}> </span>
                            <img style={{
                                maxWidth: '100%',
                                verticalAlign: 'bottom',
                                marginBottom: '150px',
                                padding: '25px'
                            }}
                                 src={PUBLIC_IMAGES_PATH + "study/case/" + this.props.params.studyname + "/show-top.png"}/>


                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lgOffset={2} mdOffset={2} lg={8} md={8} xs={12} style={{padding: '50px 15px 50px 15px'}}>
                        <h2 style={GlobalStyle.h3under}>Lancé en mars 2009, Do it in Paris est un magazine en ligne
                            traitant des sujets divers tels que la

                            mode, la beauté et l’art de vivre. Ce webzine poste des articles hebdomadaires répertoriés
                            dans

                            différentes rubriques.</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lgOffset={2} mdOffset={2} lg={8} md={8} xs={12}
                         style={{padding: '50px 15px 50px 15px', textAlign: 'center'}}>
                        <img style={{width: '100%', maxWidth: '833px'}}
                             src={PUBLIC_IMAGES_PATH + "study/case/" + this.props.params.studyname + "/Apple-Devices.png"}/>
                    </Col>
                </Row>

                <Row style={{padding: '0px 7px 0px 7px'}}>
                    <Col lg={6} md={6} xs={12} style={{marginBottom: '15px', padding: '0px 7px 0px 7px'}}>
                        <div style={{
                            marginTop: '15px',
                            padding: '30px',
                            background: '#fefefe',
                            textAlign: 'center',
                            minHeight: '500px'
                        }}>
                            <div style={{maxWidth: '480px', margin: 'auto'}}>
                                <h2 style={[GlobalStyle.h3under, {fontSize: '30px'}]}>
                                    Prestataire depuis 2013 pour Do it in Paris
                                </h2>
                                <div style={{marginTop: '20px'}}>
                                    <p style={GlobalStyle.p}>
                                        Zetagamma a réalisé de nombreuses missions pour le

                                        magazine avant de réaliser une refonte totale du site. Les objectifs étaient
                                        notamment d’optimiser le

                                        référencement et d’améliorer l’expérience utilisateur par le biais d’évolutions
                                        technique (serveurs

                                        CDN, caches, etc.).</p>
                                    <p style={GlobalStyle.p}>
                                        L’ergonomie du site a été optimisée afin de faciliter l’exploration des
                                        différents contenus du

                                        magazine : les articles ont été organisés par rubriques et le web design permet
                                        une identification

                                        rapide de la thématique du magazine.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} xs={12} style={{marginBottom: '15px', padding: '0px 7px 0px 7px'}}>
                        <div style={{
                            marginTop: '15px',
                            padding: '30px',
                            background: '#fefefe',
                            textAlign: 'center',
                            minHeight: '500px'
                        }}>
                            <div style={{maxWidth: '480px', margin: 'auto'}}>
                                <h2 style={[GlobalStyle.h3under, {fontSize: '30px'}]}>
                                    Les utilisateurs consultent le contenu du site régulièrement
                                </h2>
                                <div style={{marginTop: '20px'}}>
                                    <p style={GlobalStyle.p}>
                                        Le magazine web nécessite une

                                        publication de contenu diversifiée à intervalle régulier. Nous avons permis à
                                        notre client de

                                        s’approprier les nouveaux outils de gestion et de publication. Avec notre
                                        accompagnement, notre

                                        client a donc pu générer et publier le contenu de façon autonome, sans
                                        difficulté technique.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
                <Row style={{padding: '0px 7px 0px 7px'}}>
                    <Col xsHidden={true} lgOffset={1} mdOffset={1} lg={2} md={2}
                         style={{marginBottom: '30px', padding: '0px 7px 0px 7px'}}>
                        <div style={{marginTop: '15px', padding: '30px', textAlign: 'center', minHeight: '500px'}}>
                            <div style={{maxWidth: '480px', margin: 'auto'}}>
                                <img style={{maxWidth: '238px', maxHeight: '646px'}}
                                     src={PUBLIC_IMAGES_PATH + "study/case/" + this.props.params.studyname + "/iPad-Air-2-Mockup-SILVER.png"}/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} xsOffset={0} xs={12}
                         style={{marginBottom: '30px', padding: '0px 7px 0px 7px', maxWidth: '1000px'}}>
                        <div style={{marginTop: '15px', padding: '30px', textAlign: 'center', minHeight: '500px'}}>
                            <div style={{maxWidth: '480px', margin: 'auto'}}>
                                <h2 style={[GlobalStyle.h3under, {fontSize: '30px'}]}>
                                    Adapté pour mobile et tablette
                                </h2>
                                <div style={{marginTop: '20px'}}>
                                    <p style={GlobalStyle.p}>
                                        Aujourd&#39;hui responsive, le site reste fluide et ergonomique. Les articles
                                        peuvent être consultés sur

                                        n&#39;importe quel support, toujours en conservant une qualité d&#39;image
                                        optimale.

                                    </p>
                                    <p style={GlobalStyle.p}>
                                        Do it in Paris possède également une application mobile : un carnet d’adresse
                                        pensé comme un outil

                                        pratique, créé à partir d’une réflexion sur le tri de données. Afin
                                        d’accompagner l’utilisateur dans sa

                                        recherche, nous avons conçu des filtres multicritères et une carte interactive.
                                        Ils permettent

                                        d’identifier et de localiser facilement les résultats de recherche.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xsHidden={true} lg={2} md={2} style={{marginBottom: '30px', padding: '0px 7px 0px 7px'}}>
                        <div style={{marginTop: '15px', padding: '30px', textAlign: 'center', minHeight: '500px'}}>
                            <div style={{maxWidth: '480px', margin: 'auto'}}>
                                <img style={{maxWidth: '189px', maxHeight: '390px'}}
                                     src={PUBLIC_IMAGES_PATH + "study/case/" + this.props.params.studyname + "/iPhone-6-Plus.png"}/>
                            </div>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col lgOffset={2} mdOffset={2} lg={8} md={8} xs={12} style={{padding: '50px 15px 0px 15px'}}>
                        <p style={GlobalStyle.h3under}>
                            La maintenance à long terme de Do it in Paris consiste à suivre l’évolution du site web et à
                            intervenir

                            et développer de nouvelles fonctionnalités au grès des différents projets ou partenariats de
                            notre

                            client.
                        </p>
                    </Col>
                </Row>
                <ContactForm />
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

export default connect(mapStateToProps, mapDispatchToProps)(StudyCase);