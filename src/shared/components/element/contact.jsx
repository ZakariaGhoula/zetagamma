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
import UnderGrid from './underGrid';
import LocText from '../localise/text';
import {GlobalStyle, GraphChart} from './../../constants/GlobalStyle'
import * as LocaliseActions    from './../../actions/LocaliseActions';

@Radium
class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            mailError: false,
            mailSent: false,
        };
    }

    componentDidMount() {
    }

    componentWillMount() {
    }

    componentWillUpdate(nextProps, nextState) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.state.isFocused != nextState.isFocused || this.state.mailError != nextState.mailError || this.state.mailSent != nextState.mailSent);
    }

    render() {
        var styles = {
            contactInput: {
                borderRadius: 0,
                width: '100%',
                margin: '10px',
                height: '28px',
                padding: '1px',
                borderWidth: '0px 0px 1px 0px',
                borderColor: '#e3e3e3',
                borderStyle: 'solid',
                outline: 'none',
                fontFamily: GraphChart.font.mainFont,
                fontSize: '17px',
                letterSpacing: '1px',
                color: GraphChart.color.dark,
                resize: 'none',
                transition: '0.5s ease-out'
            },
            contactOnFocus: {
                height: '200px',
            },
            contactBtnOnFocus: {
                opacity: '1',
                padding: '6px 16px',
            }
        }
        var maxHeightRow1 = '650px';
        var opacityRow1 = '1';
        var maxHeightRow2 = '0px';
        var opacityRow2 = '0';
        if (this.state.mailSent == true) {
            maxHeightRow1 = '0px';
            opacityRow1 = '0';
            maxHeightRow2 = '650px';
            opacityRow2 = '1';
        }


        return (
            <div>
                <Grid className="home" ref="contact_form">
                    <Element name="scroll3">

                        <h2 style={[GlobalStyle.h2, {marginBottom: '70px', marginTop: '150px'}]}><LocText page="footer"
                                                                                      textzone="contact_us_2"/>
                        </h2>
                    </Element>
                </Grid>
                <Grid style={{background: '#fff'}}>
                    <Row style={{
                        outline: 'none',
                        transition: '1s ease-out',
                        overflow: 'hidden',
                        maxHeight: maxHeightRow1,
                        opacity: opacityRow1
                    }} onFocus={() => this.setState({isFocused: true})}
                         onBlur={() => this.setState({isFocused: false})} tabIndex="-1">
                        <form onSubmit={(e) => {

                            var name_ctc = document.getElementById('name_contact').value;
                            var mail_ctc = document.getElementById('mail_contact').value;
                            var denomination_ctc = document.getElementById('denomination_contact').value;
                            var subject_ctc = document.getElementById('subject_contact').value;
                            var message_ctc = document.getElementById('message_contact').value;
                            if (name_ctc.length > 3 &&
                                mail_ctc.length > 3 &&
                                subject_ctc.length > 5 &&
                                message_ctc.length > 10
                            ) {
                                this.setState({mailError: false});
                                this.setState({mailSent: true});
                                this.props.actions.contactMail(name_ctc, mail_ctc, denomination_ctc, subject_ctc, message_ctc);
                            } else {
                                this.setState({mailError: true});
                            }
                            e.preventDefault();
                        }}>
                            <Col lg={6} md={6} xs={12} style={{padding: '30px'}}>
                                <input id="name_contact" type="text" placeholder="Nom *" style={styles.contactInput}/>
                                <input id="mail_contact" type="text" placeholder="E-mail *"
                                       style={styles.contactInput}/>
                                <input id="denomination_contact" type="text" placeholder="Dénomination"
                                       style={styles.contactInput}/>
                            </Col>
                            <Col lg={6} md={6} xs={12} style={{padding: '30px'}}>

                                <input id="subject_contact" type="text" placeholder="Sujet *"
                                       style={styles.contactInput}/>
                                <textarea id="message_contact" rows="10" cols="40" placeholder="Message *"
                                          style={[styles.contactInput, this.state.isFocused && styles.contactOnFocus]}/>
                                <button style={[{
                                    padding: '0px',
                                    border: '1px solid #b3b3b3',
                                    display: 'inline-block',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    color: '#555',
                                    fontFamily: GraphChart.font.mainFont,
                                    fontSize: '15px',
                                    background: '#fff',
                                    margin: '10px',
                                    overflow: 'hidden',
                                    transition: '0.5s ease-out',
                                    opacity: '0'
                                }, this.state.isFocused && styles.contactBtnOnFocus]}>Envoyer
                                </button>
                                { this.state.mailError == true && (<LocText page="footer" heritstyle={{
                                    fontFamily: GraphChart.font.mainFont,
                                    color: GraphChart.color.dark
                                }} textzone="please_fullfil"/>) }
                            </Col>
                        </form>
                    </Row>

                    <Row style={{
                        outline: 'none',
                        transition: '2s ease-in-out',
                        overflow: 'hidden',
                        maxHeight: maxHeightRow2,
                        opacity: opacityRow2
                    }}>
                        <div style={{textAlign: 'center', paddingTop: '60px', paddingBottom: '20px'}}><img
                            src={PUBLIC_IMAGES_PATH + "mail.png"}/><br /><br /> <LocText page="footer"
                                                                                         heritstyle={GlobalStyle.p}
                                                                                         textzone="contact_mailSentMessage"/>
                        </div>
                    </Row>

                </Grid>
                <Grid fluid style={{height: '100px', backgroundColor: GraphChart.color.dark, margin: '-16px'}}>
                    <UnderGrid>
                        <br /><br />
                    </UnderGrid>
                </Grid>
            </div>


        )
            ;
    }
}

const mapStateToProps = (state) => (

{
    browser: state.browser,
    localise: state.localise,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(HomeActions, dispatch),
    localise_actions: bindActionCreators(LocaliseActions, dispatch),


});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);