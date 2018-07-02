import React, {Component} from 'react';
import {
    View, TextInput
} from 'react-native';
import {Button, Icon, Text} from 'native-base';

import styles from '../styles/style';

class SignUp extends React.Component {

    render() {
        return (
            <View style={styles.loginBg}>

                <View>
                    <View style={styles.rowed}>
                        <Button primary style={[styles.socialButton, styles.fb]}>
                            <Icon name='logo-facebook'/>
                        </Button>
                        <Button primary style={[styles.socialButton, styles.google]}>
                            <Icon name='logo-google'/>
                        </Button>
                    </View>

                    <View style={{marginVertical: 20}}>

                        <TextInput style={styles.inputBox}
                                   placeholder="First Name"
                                   placeholderTextColor="#5a5355"
                                   selectionColor="#AF7D04"/>
                        <TextInput style={styles.inputBox}
                                   placeholder="First Name"
                                   placeholderTextColor="#5a5355"
                                   selectionColor="#AF7D04"/>
                        <TextInput style={styles.inputBox}
                                   placeholder="Email Address"
                                   placeholderTextColor="#5a5355"
                                   selectionColor="#AF7D04"/>
                        <TextInput style={styles.inputBox}
                                   placeholder="Username"
                                   placeholderTextColor="#5a5355"
                                   selectionColor="#AF7D04"/>
                        <TextInput style={styles.inputBox}
                                   placeholder="Password"
                                   placeholderTextColor="#5a5355"
                                   selectionColor="#AF7D04"
                                   secureTextEntry/>
                        <TextInput style={styles.inputBox}
                                   placeholder="Confirm Password"
                                   placeholderTextColor="#5a5355"
                                   selectionColor="#AF7D04"
                                   secureTextEntry/>
                        <TextInput style={styles.inputBox}
                                   placeholder="Phone Number"
                                   placeholderTextColor="#5a5355"
                                   selectionColor="#AF7D04"
                                   keyboardType="phone-pad"/>
                    </View>
                    <Button block style={[styles.secondaryButton, {marginTop: 10}]}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </Button>

                </View>



            </View>
        );
    }
}

export default SignUp;