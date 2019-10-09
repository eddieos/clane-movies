import React, { Component } from "react";
import {
  Image,
  View,
  ScrollView,
  ImageBackground,
  WebView
} from "react-native";
import { Icon, Text, Header, Button, Left, Grid, Col } from "native-base";

import styles from "../styles/style";

class Incredibles extends React.Component {
  static navigationOptions = { header: null };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#231F20" }}>
        <ImageBackground
          source={require("../assets/img/incredibles/poster.png")}
          style={{ height: 210 }}
        >
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
                  style={{ fontSize: 30, color: "#EEE6D9" }}
                />
              </Button>
            </Left>
          </Header>
        </ImageBackground>

        {/*Movie Schedule*/}
        <Grid>
          <Col
            style={{
              backgroundColor: "#D8D8D8",
              height: 50,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ top: 4, width: 12, height: 10 }}
                source={require("../assets/img/naira.png")}
              />
              <Text style={styles.ticketPrice}>3,200.00</Text>
            </View>
          </Col>
          <Col style={{ height: 50 }}>
            <Button
              block
              style={[styles.primaryButton, { borderRadius: 0 }]}
              title="Buy Ticket"
              onPress={() => navigate("BuyTicket", { name: "BuyTicket" })}
            >
              <Text style={styles.buttonText}>BUY TICKET</Text>
            </Button>
          </Col>
        </Grid>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={styles.movieTitle}>Incredibles 2</Text>
          <View style={{ height: 180 }}>
            <WebView
              style={{ flex: 1 }}
              javaScriptEnabled
              source={{
                uri:
                  "https://www.youtube.com/embed/i5qOzqD9Rms?rel=0&autoplay=0&showinfo=0&controls=1"
              }}
            />
          </View>
          <Text style={[styles.listDesc, { marginVertical: 10, fontSize: 14 }]}>
            Bob Parr (Mr. Incredible) is left to care for the kids while Helen
            (Elastigirl) is out saving the world.
          </Text>

          <Text style={[styles.listGenre, { fontSize: 12, marginBottom: 10 }]}>
            Action | Animation | Comedy | Kids
          </Text>

          <View style={styles.rowed}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 5
              }}
            >
              <Icon
                name="ios-heart"
                style={{ color: "#DB3236", fontSize: 30 }}
              />
              <Text style={styles.movieRating}>90%</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="ios-clock"
                style={{ color: "#AF7D04", fontSize: 24 }}
              />
              <Text style={styles.movieTime}>132m</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Incredibles;
