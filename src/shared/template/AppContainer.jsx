import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';
import {Router} from 'react-router';


import {DEFAULT_LNG} from './../constants/DefaultConstants';
import Header from './../components/default/header';
import Footer from './../components/default/footer';


import LoadingBar from 'react-redux-loading-bar'


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

            || this.props.browser != nextProps.browser )
        }

        render() {
            let return_to_show = null;
            if (typeof this.props.browser !== "undefined") {

                return_to_show = (
                    <div>
                        <Header/>
                        <Component {...this.props}/>
                        <Footer/>
                    </div>
                )
            }

            if (typeof this.props.loading !== "undefined" && this.props.loading == 0) {
            }

            return (
                <div>
                    {return_to_show}
                </div>

            )

        }
    }

    const mapStateToProps = (state) => ({
        browser: state.browser,
    });

    return connect(mapStateToProps)(AppContainer);

}
