import React, { Component } from 'react';
import { View, Text } from 'react-native';

import firebase from 'firebase';

import { Card, Button, CardSection, Field, Spinner } from './common';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null,
            loading: false,
            loginSuccess: null,
            registerSuccess: null
        }
    }

    onPress(){
        const { email, password } = this.state;

        this.setState({error: '', loading: true});
        console.log(email, password, this.state)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(()=>{
                this.setState({error: null, loginSuccess: 'Login Successful',
                    registerSuccess: null, loading: false})
            })
            .catch((err)=>{
                console.log(err)
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(()=>{
                    this.setState({error: null, loginSuccess: null,
                        registerSuccess: 'Register Successful', loading: false})
                })
                .catch(() => {
                    this.setState({error: 'Authentication Failed',
                        loading: false});
                });
            })
    }

    renderButtonOrSpinner(){
        if(this.state.loading){
            return (
                <Spinner size={'large'} />
            )
        }

        return (
            <Button onPress={this.onPress.bind(this)}>
                Login
            </Button>
        )
    }

    renderMessage(){
        if(this.state.error){
            return (
                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>
            )
        }else{
            if(this.state.loginSuccess){
                return (
                    <Text style={styles.loginSuccess}>
                        {this.state.loginSuccess}
                    </Text>
                )
            }else if(this.state.registerSuccess){
                return (
                    <Text style={styles.registerSuccess}>
                        {this.state.registerSuccess}
                    </Text>
                )
            }else{
                return (
                    <View/>
                )
            }
        }
    }

    render(){
        return (
            <Card>
                <CardSection>
                    <Field
                        label={'Email'}
                        onChangeText={ email => this.setState({email})}
                        placeholder={"abc@123.com"}
                    />
                </CardSection>

                <CardSection>
                    <Field
                        label={'Password'}
                        onChangeText={ password => this.setState({password})}
                        secureTextEntry={true}
                    />
                </CardSection>

                <CardSection >
                    { this.renderButtonOrSpinner() }
                </CardSection>
                {this.renderMessage()}
            </Card>
        )
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        color: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    loginSuccess: {
        fontSize: 20,
        color: 'green',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    registerSuccess: {
        fontSize: 20,
        color: 'blue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
};

export default LoginForm;