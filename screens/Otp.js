import React, { Component } from "react";
import { Image, View, TextInput } from "react-native";
import { Icon, Text, Button, Header, Left } from "native-base";

import styles from "../styles/style";

class Otp extends React.Component {
  static navigationOptions = { header: null };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: "#231F20" }}>
        <Header transparent>
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

        <View style={{ marginVertical: 20 }}></View>
        <View style={[styles.addCard, { alignItems: "center" }]}>
          <Text style={[styles.listText, { marginTop: 10 }]}>OTP</Text>

          <View style={{ flexDirection: "row", marginVertical: 20 }}>
            <TextInput
              style={styles.otpInput}
              placeholder="-"
              placeholderTextColor="#5a5355"
              selectionColor="#AF7D04"
              keyboardType="phone-pad"
              maxLength={1}
            />
            <TextInput
              style={styles.otpInput}
              placeholder="-"
              placeholderTextColor="#5a5355"
              selectionColor="#AF7D04"
              keyboardType="phone-pad"
              maxLength={1}
            />
            <TextInput
              style={styles.otpInput}
              placeholder="-"
              placeholderTextColor="#5a5355"
              selectionColor="#AF7D04"
              keyboardType="phone-pad"
              maxLength={1}
            />
          </View>
        </View>

        <Button
          block
          iconLeft
          style={[
            styles.secondaryButton,
            { marginTop: 50, marginHorizontal: 10 }
          ]}
          title="Make Payment"
          onPress={() => navigate("Success", { name: "Success" })}
        >
          <View style={styles.rowed}>
            <Text style={styles.buttonText}>PAY </Text>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ top: 4, width: 12, height: 10 }}
                  source={require("../assets/img/naira-light.png")}
                />
                <Text style={styles.payAmount}>6,400.00</Text>
              </View>
            </View>
          </View>
        </Button>
      </View>
    );
  }
}

export default Otp;
