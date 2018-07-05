import React, {Component} from 'react';
import {
    Image,
    ImageBackground, TouchableOpacity, StatusBar
} from 'react-native';

class SplashScreen extends React.Component {
    static navigationOptions = { header: null };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground
                source={require('../assets/img/bgImage.png')}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar barStyle = "light-content" hidden = {false}/>

                <TouchableOpacity
                    onPress={() =>
                    navigate('Login', { name: 'Login' })
                }>
                    <Image style={{width: 133, height: 199,}}
                    source={require('../assets/img/logo.png')}
                    />
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

export default SplashScreen;