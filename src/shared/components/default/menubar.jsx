import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Navbar, Nav, NavItem, Panel, Button } from 'react-bootstrap';
import Radium, { Style } from 'radium'
import {PUBLIC_VIDEOS_PATH, PUBLIC_IMAGES_PATH} from './../../constants/DefaultConstants';
import color from "color";
import * as MenubarActions    from './../../actions/MenubarActions';

@Radium
export default class Menubar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastY: 0,
            isShown: true,
            open: false,
            isTop: true,
            overButton: false,
            videoHeight: 0,
            designMMB: false,
        };
        this.changeDisplay = this.changeDisplay.bind(this);
        this.handleSpy = this.handleSpy.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }
    componentDidMount () {
        window.addEventListener('scroll', this.handleSpy);
        window.addEventListener('resize', this.handleResize);
        var VideoHeight = document.getElementById('video-row').offsetHeight;
        this.setState({videoHeight: VideoHeight});
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleSpy);
        window.removeEventListener('resize', this.handleResize);
    }
    componentWillUpdate(nextProps, nextState) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (  this.props.menubar.is_shown != nextProps.menubar.is_shown || this.state.open !== nextState.open || this.state.isTop !== nextState.isTop || this.state.overButton !== nextState.overButton || this.state.videoHeight !== nextState.videoHeight || this.state.designMMB !== nextState.designMMB)
    }

    changeDisplay(boolean) {
        this.props.actions_menubar.changeDisplayMenubar(boolean);
    }

    handleResize() {
        this.setState({videoHeight: document.getElementById('video-row').offsetHeight});
    }
    handleSpy() {
        if(window.scrollY < 30) {
            if(this.state.isTop == false)
                this.setState({isTop: true});
        }else{
            if(this.state.isTop == true)
                this.setState({isTop: false});
        }
        if (window.scrollY > (this.state.videoHeight) - 80) {
            this.setState({designMMB: true});
            if(window.scrollY - this.state.lastY > 0){
                if(this.state.isShown == true){
                    this.props.actions_menubar.changeDisplayMenubar(false);
                }
            }else{
                if(this.state.isShown == false){
                    this.props.actions_menubar.changeDisplayMenubar(true);
                }
            }
        }else{
            this.setState({designMMB: false});
            if(this.state.isShown == false){
                this.props.actions_menubar.changeDisplayMenubar(true);
            }
        }
        this.state.isShown = this.props.menubar.is_shown;
        this.state.lastY = window.scrollY;
    }

    render() {
        var styles = {
            primary: {
                width:'100%',
                border: 0,
                borderRadius: '0px',
                padding: '0px 30px 0px 20px',
                margin: '0px',
                height: '70px',
                opacity: '1',
                transitionDuration: '0.5s',
                transitionTimingFunction: 'ease-out',
            },
            primaryTop: {
                background: 'rgba(0,0,0,0)',
            },
            primaryNormal: {
                background: 'rgba(0,0,0,0.3)',
            },
            menuButton:{
                color:'#fff',
                fontVariant: 'small-caps',
                fontSize: '22px',
                fontWeight: 500,
                margin: '10px',
                float: 'left',
                fontFamily: "'Alegreya Sans', sans-serif",
            },
            divWrapper: {
                width:'100%',
                zIndex: 101,
                height: '80px',
                transitionDuration: '0.3s',
                transitionTimingFunction: 'ease-out',
                position: 'fixed',
                overflow: 'hidden',
            },
            showOff: {
                top: '-80px',
                opacity: '1',
            },
            showOn: {
               top:'0px',
                opacity: '1',
            },
            logoBase: {
                width: '40px',
                height: '40px'
            },
            panelmenu: {
                background: '#FFFFFF',
                position: 'absolute',
                top:0,
                left:0,
                right:0,
                zIndex: 102,
                width: '100%',
                overflow: 'hidden',
                border: 0,
                borderRadius: '0px'
            },
            popNav: {
                display: 'block',
                textAlign: 'center',
                width: '100%'
            },
            mainMenu: {
                display: 'block',
                textAlign: 'center',
                position: 'absolute',
                width: '100%',
                top: '0px',
            },
            mainItem: {
                display: 'inline-block',
                padding: '20px',
                top: '0px'
            },
            closeButton: {
                display: 'block',
                padding: '20px',
                position: 'absolute',
                right: '12px',
                top: '0px',
                cursor: 'pointer'
            },
            littleTweak: {
                display: 'block',
                paddingTop:'5px',
                float:'right',
                width: '25px',
            },
            lTb: {
                margin: '6px',
                lineHeight:'3px',
                transitionDuration: '0.3s',
                transitionTimingFunction: 'ease-out',
            },
            lTb1: {
                width: '25px',
                border: '1px solid #fff'
            },
            lTb2: {
                width: '15px',
                border: '1px solid #fff'
            },
            mobileDivWrapper: {
                width: '100%',
                zIndex: 101,
                height: '80px',
                transitionDuration: '0.3s',
                transitionTimingFunction: 'ease-out',
                position: 'fixed',
                overflow: 'hidden',
                display: 'inline-block',
                textAlign: 'right'
            },
            mobilePrimary: {
                width: '100%',
                border: 0,
                borderRadius: '0px',
                padding: '0px 0px 0px 20px',
                margin: '0px',
                height: '70px',
                opacity: '1',
                transitionDuration: '0.5s',
                transitionTimingFunction: 'ease-out',
                background: 'rgba(0,0,0,0)'
            },
            mobileLittleTweak: {
                display: 'block',
                paddingTop: '7px',
                float: 'right',
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255, 0)',
                borderRadius: '50%',
                transitionDuration: '0.6s',
                transitionTimingFunction: 'ease-out',
            },
            mobileLTb: {
                margin: '5px 5px 5px 11px',
                lineHeight: '2px',
                width: '15px',
                border: '1px solid #fff',
                transitionDuration: '0.6s',
                transitionTimingFunction: 'ease-out',
            },
            mobileOpenDivWrapper: {
                padding: '0px 0px 0px 0px',
                width: '100%',
                zIndex: 200,
                height: '100%',
                background: 'rgba(0,0,0,0.8)',
                transition: '0.6s ease-in-out',
                position: 'fixed',
                overflow: 'hidden',
                display: 'inline-block',
                textAlign: 'center'
            },
            centerLogoStyle: {
                display: 'inline-block',
                width: '70px',
                margin: '1vh auto 15px',
                border: '8px solid #fff'
            },
            mobileMenuItem: {
                color: '#fff',
                fontVariant: 'small-caps',
                fontSize: '28px',
                lineHeight: '9vh',
                fontWeight: 500,
                fontFamily: "'Alegreya Sans', sans-serif",
            },
        };
        var menuShow = this.props.menubar.is_shown == true ? styles.showOn:styles.showOff;
        var stylePrimary = this.state.isTop == true ? styles.primaryTop:styles.primaryNormal;
        var lTbn1 = this.state.overButton == true ? styles.lTb2:styles.lTb1;
        var lTbn2 = this.state.overButton == true ? styles.lTb1:styles.lTb2;

        if (this.props.browser.greaterThan.medium) {
        var NormalMenuBar = (
            <div style={Object.assign(menuShow, styles.divWrapper)}>
                <Navbar fluid style={Object.assign(styles.primary, stylePrimary)}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/expertise"><img style={styles.logoBase}
                                                       src={PUBLIC_IMAGES_PATH + "logo_ZG_normal.png"}/></Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight style={{cursor: 'pointer'}} onClick={ ()=> this.setState({open: true})}>
                        <NavItem onMouseOver={ ()=> this.setState({overButton: true})}
                                 onMouseOut={ ()=> this.setState({overButton: false})} eventKey={1}>
                            <div style={styles.menuButton}>menu</div>
                            <div style={styles.littleTweak}>
                                <hr style={[styles.lTb, lTbn1]}/>
                                <hr style={[styles.lTb, lTbn2]}/>
                                <hr style={[styles.lTb, lTbn1]}/>
                            </div>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Panel collapsible expanded={this.state.open} style={styles.panelmenu}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            ZetaGamma
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight style={styles.popNav}>
                        <ul style={styles.mainMenu}>
                            <li style={styles.mainItem}>Étude de cas</li>
                            <li style={styles.mainItem}>Expertise</li>
                            <li style={styles.mainItem}>Contact</li>
                        </ul>
                        <a style={styles.closeButton} onClick={ ()=> this.setState({open: false})}>X</a>
                    </Nav>
                </Panel>
            </div>
        );
        } else if (this.props.browser.lessThan.large) {
            if (this.state.open) {
                var MobileMenuBar = (
                    <div style={styles.mobileOpenDivWrapper}>
                        <div style={{
                            padding: '28px 27px 0px 0px',
                            display: 'inline-block',
                            textAlign: 'right',
                            width: '100%'
                        }} onClick={ ()=> this.setState({open: false})}><img style={{width: '18px'}}
                                                                             src={PUBLIC_IMAGES_PATH + "svg/close.svg"}/>
                        </div>
                        <img style={styles.centerLogoStyle} src={PUBLIC_IMAGES_PATH + "logo_ZG.png"}/><br />
                        <div style={{display: 'block', textAlign: 'center', width: '100%', marginTop: '6vh'}}>
                            <a style={styles.mobileMenuItem}>Étude de cas</a><br />
                            <a style={styles.mobileMenuItem}>Expertise</a><br />
                            <a style={styles.mobileMenuItem}>Contact</a><br />
                        </div>
                    </div>
                );
            } else {
        var MobileMenuBar = (
            <div style={styles.mobileDivWrapper}>
                <Navbar fluid style={styles.mobilePrimary}>
                    <Nav pullRight style={{cursor: 'pointer'}} onClick={ ()=> this.setState({open: true})}>
                        <NavItem eventKey={1}>
                            <div
                                style={Object.assign(styles.mobileLittleTweak, this.state.designMMB && {background: '#e4e4e4'})}>
                                <hr style={Object.assign(styles.mobileLTb, this.state.designMMB && {border: '1px solid #5a5a5a'})}/>
                                <hr style={styles.mobileLTb}/>
                                <hr style={styles.mobileLTb}/>
                            </div>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
            }
        }
        return (
            <div>
                {this.props.browser.lessThan.large && MobileMenuBar}
                {this.props.browser.greaterThan.medium && NormalMenuBar}
        </div>
    );
    }
}

const mapStateToProps = (state) => (

{
    menubar: state.menubar,
    browser: state.browser
});

const mapDispatchToProps = (dispatch) => ({
    actions_menubar: bindActionCreators(MenubarActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);