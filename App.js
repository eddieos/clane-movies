/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

// Screens
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import HomeFeed from './screens/HomeFeed';


export default StackNavigator({
    HomeFeed: {
        screen: HomeFeed
    },
});