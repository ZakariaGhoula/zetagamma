import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';
import {Router} from 'react-router';

// import {IntlProvider} from 'react-intl';
import {DEFAULT_LNG} from './../constants/DefaultConstants';
import Header from './../components/default/header';
import Footer from './../components/default/footer';


import LoadingBar from 'react-redux-loading-bar'
// import en from 'react-intl/locale-data/en';
// import fr from 'react-intl/locale-data/fr';
// import es from 'react-intl/locale-data/es';
// addLocaleData([...en, ...fr, ...es]);
export function requireContainer(Component) {

    class AppContainer extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                "lang": (this.props.route.locale || DEFAULT_LNG)
            }

        }

        componentDidMount() {

        }

        componentWillUpdate(nextProps, nextState) {

        }

        shouldComponentUpdate(nextProps, nextState) {
            return (  this.state.lang !== nextState.lang
            || this.props.loading != nextProps.loading
            || this.props.browser != nextProps.browser )
        }

        render() {
            let message = "";
            let header = <Header/>;
            let footer = <Footer/>;
            if (typeof this.props.browser !== "undefined") {
                if (this.props.browser.greaterThan.medium) {

                }
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
            let return_to_show = null;

            if (typeof this.props.loading !== "undefined" && this.props.loading == 0) {
                return_to_show = ( <div>

                    {header}
                    <Component {...this.props}/>
                    {footer}

                </div>)
            }

            return (
                // {/*<IntlProvider locale={this.state.lang}>*/}
                <div>
                    <LoadingBar updateTime={100} maxProgress={95} progressIncrease={10}/>
                    {return_to_show}</div>
                // </IntlProvider>
            )

        }
    }

    const mapStateToProps = (state) => ({
        browser: state.browser,
        loading: state.loadingBar
    });

    return connect(mapStateToProps)(AppContainer);

}
