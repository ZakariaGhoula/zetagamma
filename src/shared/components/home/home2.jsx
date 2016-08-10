import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import   ReactDom               from 'react-dom';
import {calculateResponsiveState} from '../../actions/index'
import * as HomeActions    from '../../actions/HomeActions';
import { Button } from 'react-bootstrap';
import {IntlProvider, FormattedNumber, FormattedPlural} from 'react-intl';
class Home2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name       : 'Rémi',
            unreadCount: 1000,
        };
    }


    render() {

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
            <div className="home" ref="home">
                {message}
<h1>Home ! s</h1>
                <p>
                    Hello <b>{this.state.name}</b>, you have {' '}
                    <FormattedNumber value={this.state.unreadCount} /> {' '}
                    <FormattedPlural value={this.state.unreadCount}
                                     one="message"
                                     other="messages"
                    />.
                </p>
                <Button>Click me!</Button>
            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Home2);