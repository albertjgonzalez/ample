import React, { Component } from 'react';
import AuthHelperMethods from './AuthHelperMethods';

export default function withAuth(AuthComponent) {

    const Auth = new AuthHelperMethods();

    return class AuthWrapped extends Component {

        state = {
            confirm: null,
            loaded: false
        }
        //Most auth goes here...
        componentWillMount() {
            if (!Auth.loggedIn()) {
                this.props.history.replace('/login');
            } else {
                try {
                    const tokenValues = Auth.getConfirm();
                    console.log("Decrypted Token Values: ".tokenValues)

                    this.setState({
                        confirm: tokenValues,
                        loaded: true
                    })
                }
                catch (err) {
                    console.log(err);
                    Auth.logout();
                    this.props.history.replace('/login')
                }
            }
        }

        render() {
            if (this.state.loaded === true) {
                if (this.state.confirm) {
                    console.log("confirmed")
                    return (
                        <AuthComponent history={this.props.history} confirm=
                            {this.state.confirm} />
                    )
                } else {
                    console.log('not confirmed')
                    return null
                }
            } else {
                return null
            }
        }
    }

}