import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase';
import { Header } from './components/common/Header';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
       firebase.initializeApp({
        
            apiKey: "AIzaSyBbMDiIrGBYrArkXdRgV5ErGKk9csrWk9U",
            authDomain: "authproject-aa5e1.firebaseapp.com",
            databaseURL: "https://authproject-aa5e1.firebaseio.com",
            projectId: "authproject-aa5e1",
            storageBucket: "authproject-aa5e1.appspot.com",
            messagingSenderId: "1057148982600"
          });
       }

    render() {
        return (
            <View>
            <Header headerPassDownProperty="Authentication" />
             <LoginForm />
            </View>
        );
    }
}

export default App;