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
            isFocused: false
        };
    }

    componentDidMount() {
    }

    componentWillMount() {
    }

    componentWillUpdate(nextProps, nextState) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.state.isFocused != nextState.isFocused);
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


        return (
            <div>
                <Grid className="home" ref="contact_form">
                    <Element name="scroll3">
                        <h3 style={[GlobalStyle.h3under, {
                            marginBottom: '20px',
                            marginTop: '100px',
                            textAlign: 'center'
                        }]}><LocText page="home" textzone="contact_us"/></h3>
                        <h2 style={[GlobalStyle.h2, {marginBottom: '70px'}]}><LocText page="home"
                                                                                      textzone="contact_us_2"/>
                        </h2>
                    </Element>
                </Grid>
                <UnderGrid>

                    <Row style={{outline: 'none'}} onFocus={() => this.setState({isFocused: true})}
                         onBlur={() => this.setState({isFocused: false})} tabIndex="-1">
                        <form >
                            <Col lg={6} md={6} xs={12} style={{padding: '30px'}}>
                                <input type="text" placeholder="Nom" style={styles.contactInput}/>
                                <input type="text" placeholder="E-mail" style={styles.contactInput}/>
                                <input type="text" placeholder="Dénomination" style={styles.contactInput}/>
                            </Col>
                            <Col lg={6} md={6} xs={12} style={{padding: '30px'}}>

                                <input type="text" placeholder="Sujet" style={styles.contactInput}/>
                                <textarea rows="10" cols="40" placeholder="Message"
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
                            </Col>
                        </form>
                    </Row>
                </UnderGrid>
                <Grid fluid style={{height: '100px', backgroundColor: GraphChart.color.dark, margin: '-15px'}}>
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