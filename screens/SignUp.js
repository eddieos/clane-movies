import React, { Component } from "react";
import { View, TextInput, StatusBar } from "react-native";
import { Button, Icon, Text, Header, Left } from "native-base";

import styles from "../styles/style";

class SignUp extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.loginBg}>
        <StatusBar barStyle="light-content" />

        <Header transparent style={{ marginLeft: -30 }}>
          <Left>
            <Button
              transparent
              style={{ paddingBottom: 4 }}
              title="Go back"
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon
                name="ios-arrow-dropleft-circle-outline"
                style={{ fontSize: 30, color: "#AF7D04" }}
              />
            </Button>
          </Left>
        </Header>
        <View>
          <View style={styles.rowed}>
            <Button primary style={[styles.socialButton, styles.fb]}>
              <Icon name="logo-facebook" />
            </Button>
            <Button primary style={[styles.socialButton, styles.google]}>
              <Icon name="logo-google" />
            </Button>
          </View>

          <View style={{ marginVertical: 20 }}>
            <TextInput
              style={styles.inputBox}
              placeholder="First Name"
              placeholderTextColor="#5a5355"
              selectionColor="#AF7D04"
            />
            <TextInput
              style={styles.inputBox}
              placeholder="First Name"
              placeholderTextColor="#5a5355"
              selectionColor="#AF7D04"
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Email Address"
              placeholderTextColor="#5a5355"
              selectionColor="#AF7D04"
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Username"
              placeholderTextColor="#5a5355"
              selectionColor="#AF7D04"
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Password"
              placeholderTextColor="#5a5355"
              selectionColor="#AF7D04"
              secureTextEntry
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Confirm Password"
              placeholderTextColor="#5a5355"
              selectionColor="#AF7D04"
              secureTextEntry
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Phone Number"
              placeholderTextColor="#5a5355"
              selectionColor="#AF7D04"
              keyboardType="phone-pad"
            />
          </View>
          <Button
            block
            style={[styles.secondaryButton, { marginTop: 10 }]}
            title="HomeFeed"
            onPress={() => navigate("HomeFeed", { name: "HomeFeed" })}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </Button>
        </View>

        <View></View>
      </View>
    );
  }
}

export default SignUp;
