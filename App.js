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
import SampleMovieList from './screens/SampleMovieList';
import Avengers from './screens/Avengers';
import Annihilation from './screens/Annihilation';
import Incredibles from './screens/Incredibles';
import BlackPanther from './screens/BlackPanther';
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
    SampleMovieList: {screen: SampleMovieList},
    Avengers: {screen: Avengers},
    Annihilation: {screen: Annihilation},
    Incredibles: {screen: Incredibles},
    BlackPanther: {screen: BlackPanther},
    BuyTicket: {screen: BuyTicket},
    AddNewCard: {screen: AddNewCard},
    Otp: {screen: Otp},
    Success: {screen: Success},
});

export const Tab = createBottomTabNavigator({
    HomeFeed: {screen: HomeFeed},
    Avengers: {screen: Avengers},
});