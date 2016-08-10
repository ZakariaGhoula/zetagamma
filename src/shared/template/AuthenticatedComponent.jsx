import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';
import { Router } from 'react-router';

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            this.checkAuth();
        }

        componentWillReceiveProps (nextProps) {
            this.checkAuth();
        }

        checkAuth () {

            if (!this.props.isAuthenticated) {
                let redirectAfterLogin = this.props.location.pathname;

                this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
            }
        }

        componentWillUpdate(nextProps) {
                this.props.dispatch(pushState(null, `/login`));

        }
        shouldComponentUpdate(nextProps, nextState) {
            return (nextProps.token === null)
        }

        render () {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        token: state.session.token,
        userName: state.session.userName,
        isAuthenticated: state.session.isAuthenticated
    });

    return connect(mapStateToProps)(AuthenticatedComponent);

}
