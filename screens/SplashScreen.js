import React, {Component} from 'react';
import {
    Image,
    ImageBackground
} from 'react-native';

class SplashScreen extends React.Component {
    static navigationOptions = { header: null };
    render() {
        return (
            <ImageBackground
                source={require('../assets/img/bgImage.png')}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{width: 133, height: 199,}}
                       source={require('../assets/img/logo.png')}/>
            </ImageBackground>
        );
    }
}

export default SplashScreen;