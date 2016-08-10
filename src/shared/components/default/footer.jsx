import React from 'react';
import {bindActionCreators} from 'redux';
import {connect}            from 'react-redux';
import { Link } from 'react-router';
import Radium, {Style} from 'radium';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var styles = {
            footerFirstFluidGrid: {
                width: '100%',
                minHeight: '150px',
                background: '#4a4a4a',
                color: '#e3e3e3',
                textAlign: 'left',
                fontFamily: "'Alegreya Sans', sans-serif",
                fontSize: '14px',
                letterSpacing: '2px',
                paddingTop: '30px',
                paddingBottom: '40px'
            },
            footerSecondFluidGrid: {
                width: '100%',
                minHeight: '80px',
                background: '#3a3a3a',
                color: '#e3e3e3',
                textAlign: 'center',
                fontFamily: "'Alegreya Sans', sans-serif",
                fontSize: '14px',
                letterSpacing: '2px',
                paddingTop: '30px',
                paddingBottom: '40px'
            },
        };
        //  var m = moment();

        return (
            <footer style={styles.footerStyle} className="footer" id="footer">
                <Grid fluid style={styles.footerFirstFluidGrid}>
                    <Grid>
                        <Row>
                            <Col lg={4} md={4} xs={12} style={{padding: '20px'}}>
                                Tél : +34 911 376 934 / +33 6 29 52 16 68 <br /> contact@zetagamma.fr<br />Quand un
                                peintre anonyme assembla ensemble.
                            </Col>
                            <Col lg={4} md={4} xs={12} style={{padding: '20px'}}>
                                Tél : +34 911 376 934 / +33 6 29 52 16 68 <br /> contact@zetagamma.fr<br />Quand un
                                peintre anonyme assembla ensemble des morceaux.
                            </Col>
                            <Col lg={4} md={4} xs={12} style={{padding: '20px'}}>
                                Tél : +34 911 376 934 / +33 6 29 52 16 68 <br /> contact@zetagamma.fr<br />livre
                                spécimen de polices de texte ensemble des morceaux.
                            </Col>
                        </Row>
                    </Grid>
                </Grid>
                <Grid fluid style={styles.footerSecondFluidGrid}>
                    <Grid>
                        <Row>
                            <Col>
                                © 2012 - 2016 - Tous droits réservés ZetaGamma.
                            </Col>
                        </Row>
                    </Grid>
                </Grid>
            </footer>






        );
    }
}
