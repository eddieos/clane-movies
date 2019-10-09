import React, { Component } from "react";
import { Image, View, TextInput } from "react-native";
import { Button, Icon, Text } from "native-base";

import styles from "../styles/style";

class Login extends React.Component {
  static navigationOptions = { header: null };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.loginBg}>
        <Image
          style={{ width: 152, height: 50, alignSelf: "center", marginTop: 50 }}
          source={require("../assets/img/movie-logo.png")}
        />
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
          </View>
          <Button
            block
            style={[styles.primaryButton, { marginTop: 10 }]}
            title="HomeFeed"
            onPress={() => navigate("HomeFeed", { name: "HomeFeed" })}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </Button>

          <Text
            style={{
              color: "#EEE6D9",
              fontSize: 12,
              textAlign: "center",
              marginVertical: 30
            }}
          >
            OR
          </Text>

          <Button
            block
            style={styles.secondaryButton}
            title="SignUp"
            onPress={() => navigate("SignUp", { name: "SignUp" })}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </Button>
        </View>
        <View></View>
      </View>
    );
  }
}

export default Login;
