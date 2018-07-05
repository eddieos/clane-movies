import React, {Component} from 'react';
import {
    Image,
    View, TextInput
} from 'react-native';
import {Icon, Text, Button, Header, Right } from 'native-base';


import styles from "../styles/style";

class Otp extends React.Component {
    static navigationOptions = { header: null };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, backgroundColor: '#231F20'}}>
                <Header transparent>
                    <Right>
                        <Button transparent style={{paddingBottom: 4}}
                                title="Home Feed"
                                onPress={() =>
                                    navigate('HomeFeed', {name: 'HomeFeed'})
                                }>
                            <Icon name="ios-close-circle" style={{fontSize: 30, color: '#AF7D04'}}/>
                        </Button>
                    </Right>
                </Header>

                <View style={{marginVertical: 20, alignItems: 'center'}}>
                    <Icon name="ios-checkmark-circle" style={{fontSize: 270, color: '#5CB85C'}}/>

                    <Text style={styles.payAmount}>PAYMENT SUCCESSFUL</Text>

                </View>





            </View>
        );
    }
}

export default Otp;