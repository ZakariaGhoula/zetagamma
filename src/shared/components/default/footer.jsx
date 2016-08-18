import React from 'react';
import {bindActionCreators} from 'redux';
import {connect}            from 'react-redux';
import { Link } from 'react-router';
import Radium, {Style} from 'radium';
import {Grid, Row, Col} from 'react-bootstrap';
import {GlobalStyle, GraphChart} from './../../constants/GlobalStyle';
import {PUBLIC_IMAGES_PATH} from './../../constants/DefaultConstants';
import LocText from '../localise/text';

@Radium
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var styles = {
            footerFirstFluidGrid: {
                width: '100%',
                minHeight: '150px',
                background: GraphChart.color.dark,
                color: GraphChart.color.onDark,
                textAlign: 'left',
                fontFamily: GraphChart.font.mainFont,
                fontSize: '14px',
                letterSpacing: '2px',
                paddingTop: '30px',
                paddingBottom: '40px'
            },
            footerSecondFluidGrid: {
                width: '100%',
                minHeight: '80px',
                background: '#3a3a3a',
                color: GraphChart.color.onDark,
                textAlign: 'center',
                fontFamily: GraphChart.font.mainFont,
                fontSize: '14px',
                letterSpacing: '2px',
                paddingTop: '30px',
                paddingBottom: '40px'
            },
            hoverEffect: {
                opacity: '0.5',
                transition: '0.2s',
                ':hover': {
                    opacity: '0.9'
                }
            }
        };
        //  var m = moment();

        return (
            <footer style={styles.footerStyle} className="footer" id="footer">
                <Grid fluid style={styles.footerFirstFluidGrid}>
                    <Grid>
                        <Row>
                            <Col lg={4} md={4} xs={12} style={{padding: '20px'}}>
                                <LocText page="footer" textzone="footer_textleft"/>
                            </Col>
                            <Col lg={4} md={4} xs={12} style={{padding: '20px'}}>
                                <LocText page="footer" textzone="footer_textmiddle"/>
                            </Col>
                            <Col lg={4} md={4} xs={12} style={{padding: '20px', textAlign: 'right'}}>
                                <a target="_blank"
                                   href="https://www.facebook.com/pages/Zetagamma/1384682821765251?fref=ts"><img
                                    key="link1" src={PUBLIC_IMAGES_PATH + "svg/social/facebook.svg"}
                                    style={GlobalStyle.aSocial}/></a>
                                <a target="_blank" href="https://plus.google.com/113613218291092049283/posts"><img
                                    key="link2" src={PUBLIC_IMAGES_PATH + "svg/social/google-plus.svg"}
                                    style={GlobalStyle.aSocial}/></a>
                                <a target="_blank" href="https://www.linkedin.com/company/zetagamma"><img key="link3"
                                                                                                          src={PUBLIC_IMAGES_PATH + "svg/social/linkedin.svg"}
                                                                                                          style={GlobalStyle.aSocial}/></a>
                                <a target="_blank" href="https://twitter.com/zeta_gamma"><img key="link4"
                                                                                              src={PUBLIC_IMAGES_PATH + "svg/social/twitter.svg"}
                                                                                              style={GlobalStyle.aSocial}/></a>
                            </Col>
                        </Row>
                    </Grid>
                </Grid>
                <Grid fluid style={styles.footerSecondFluidGrid}>
                    <Grid>
                        <Row>
                            <Col>
                                <LocText page="footer" textzone="footer_copyright"/>
                            </Col>
                        </Row>
                    </Grid>
                </Grid>
            </footer>






        );
    }
}
const mapStateToProps = (state) => (

{
    localise: state.localise,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);