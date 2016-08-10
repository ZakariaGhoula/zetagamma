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
            videoHeight: 0
        };
        this.changeDisplay = this.changeDisplay.bind(this);
        this.handleSpy = this.handleSpy.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }
    componentDidMount () {
        window.addEventListener('scroll', this.handleSpy.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
        var VideoHeight = document.getElementById('video-row').offsetHeight;
        this.setState({videoHeight: VideoHeight});
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleSpy.bind(this));
    }
    componentWillUpdate(nextProps, nextState) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (  this.props.menubar.is_shown != nextProps.menubar.is_shown || this.state.open !== nextState.open || this.state.isTop !== nextState.isTop || this.state.overButton !== nextState.overButton || this.state.videoHeight !== nextState.videoHeight)
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
            }
        };
        var menuShow = this.props.menubar.is_shown == true ? styles.showOn:styles.showOff;
        var stylePrimary = this.state.isTop == true ? styles.primaryTop:styles.primaryNormal;
        var lTbn1 = this.state.overButton == true ? styles.lTb2:styles.lTb1;
        var lTbn2 = this.state.overButton == true ? styles.lTb1:styles.lTb2;
        return (
        <div style={Object.assign(menuShow,styles.divWrapper)}>
            <Navbar fluid style={Object.assign(styles.primary, stylePrimary)}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a><img style={styles.logoBase} src={PUBLIC_IMAGES_PATH + "logo_ZG_normal.png"} /></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight onClick={ ()=> this.setState({ open: !this.state.open })}>
                    <NavItem onMouseOver={ ()=> this.setState({ overButton: true})} onMouseOut={ ()=> this.setState({ overButton: false})}  eventKey={1} ><div style={styles.menuButton}>menu </div><div style={styles.littleTweak}><hr style={[styles.lTb, lTbn1]} /><hr style={[styles.lTb, lTbn2]}/><hr style={[styles.lTb, lTbn1]} /></div></NavItem>
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
                        <li style={styles.mainItem}>Menu 1</li>
                        <li style={styles.mainItem}>Menu 2</li>
                        <li style={styles.mainItem}>Menu 3</li>
                        <li style={styles.mainItem}>Menu 4</li>
                        <li style={styles.mainItem}>Menu 5</li>
                    </ul>
                    <a style={styles.closeButton} onClick={ ()=> this.setState({ open: !this.state.open })}>X</a>
                </Nav>
            </Panel>
        </div>
    );
    }
}

const mapStateToProps = (state) => (

{
    menubar: state.menubar
});

const mapDispatchToProps = (dispatch) => ({
    actions_menubar: bindActionCreators(MenubarActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);