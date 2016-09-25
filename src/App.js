import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import firebase from 'firebase';

import { Header, Spinner, Button } from './components/common';
import LoginForm from './components/LoginForm';

/*
* // To get the developer menu, go to the terminal and run
 // adb shell input keyevent 82
* */

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginOut: null
        }
    }
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyCxj5ieHjXHHiXDgbVFmavvWReOx_bkbZg",
            authDomain: "authentication-1f11c.firebaseapp.com",
            databaseURL: "https://authentication-1f11c.firebaseio.com",
            storageBucket: "authentication-1f11c.appspot.com",
            messagingSenderId: "267960369198"
        });
        this.getUserStatus();
    }

    getUserStatus(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                return this.setState({loginOut: true})
            }

            return this.setState({loginOut: false})
        })
    }

    renderLoginForm(){
        switch(this.state.loginOut){
            case true:
                return (
                    <Button onPress={()=> firebase.auth().signOut()}>
                        Logout
                    </Button>
                );
            case false:
                return (
                    <LoginForm />
                );
            default:
                return (
                    <Spinner size={'large'} />
                )
        }
    }

    render(){
        return (
            <View>
                <Header headerText={'Authentication'}/>
                { this.renderLoginForm() }
            </View>
        )
    }
}

export default App;