/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

// Screens
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import HomeFeed from './screens/HomeFeed';
import Avengers from './screens/Avengers';
import BuyTicket from './screens/BuyTicket';
import AddNewCard from './screens/AddNewCard';
import Otp from './screens/Otp';
import Success from './screens/Success';


export default class App extends React.Component {
    render() {
        return (
            <AppNavigator/>
        );
    }
}


export const AppNavigator = createStackNavigator({
    SplashScreen: {screen: SplashScreen},
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    HomeFeed: {screen: HomeFeed},
    Avengers: {screen: Avengers},
    BuyTicket: {screen: BuyTicket},
    AddNewCard: {screen: AddNewCard},
    Otp: {screen: Otp},
    Success: {screen: Success},
});

export const Tab = createBottomTabNavigator({
    HomeFeed: {screen: HomeFeed},
    Avengers: {screen: Avengers},
});