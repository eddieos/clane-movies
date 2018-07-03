import React, {Component} from 'react';
import {
    Image,
    View, ScrollView, TextInput
} from 'react-native';
import {Icon, Text, Button, Left, Right, ListItem, Radio} from 'native-base';


import styles from "../styles/style";

class BuyTicket extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            radio1: false,
            radio2: false,
            radio3: false,
            radio4: true
        };
    }

    toggleRadio1() {
        this.setState({
            radio1: true,
            radio2: false,
            radio3: false,
            radio4: false
        });
    }

    toggleRadio2() {
        this.setState({
            radio1: false,
            radio2: true,
            radio3: false,
            radio4: false
        });
    }

    toggleRadio3() {
        this.setState({
            radio1: false,
            radio2: false,
            radio3: true,
            radio4: false
        });
    }

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#231F20'}}>
                <View style={[styles.rowed, {marginTop: 10}]}>
                    <Button transparent style={{paddingBottom: 4}}>
                        <Icon name="ios-arrow-dropleft-circle-outline" style={{fontSize: 30, color: '#AF7D04'}}/>
                    </Button>
                    <Text style={[styles.movieTitle]}>Avengers: Infinity War</Text>
                    <View></View>
                </View>

                <View style={[styles.rowed, {marginTop: 10}]}>
                    <View style={styles.rowed}>
                        <View>
                            <Button transparent>
                                <Icon name="md-arrow-dropup" style={{fontSize: 40, color: '#EEE6D9'}}/>
                            </Button>
                            <Button transparent>
                                <Icon name="md-arrow-dropdown" style={{fontSize: 40, color: '#EEE6D9'}}/>
                            </Button>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TextInput style={styles.inputSeatAmount}
                                       placeholder="--"
                                       placeholderTextColor="#EEE6D9"
                                       selectionColor="#EEE6D9"
                                       keyboardType="phone-pad"/>
                            <Text style={styles.seatText}>Seats</Text>

                        </View>


                    </View>
                    <Image style={[styles.imageGrid, {marginHorizontal: 20}]}
                           source={require('../assets/img/avengers/poster.jpg')}
                           resizeMode="cover"/>

                </View>
                <View style={styles.summaryCard}>
                    <View style={styles.rowed}>
                        <View></View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.count}>2 x</Text>
                            <View style={{flexDirection: 'row',}}>
                                <Image style={{top: 4, width: 12, height: 10}}
                                       source={require('../assets/img/naira.png')}/>
                                <Text style={styles.ticketPrice}>3,200.00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.rowed, {marginVertical: 15}]}>
                        <Text style={styles.priceText}>Price :</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row',}}>
                                <Image style={{top: 4, width: 12, height: 10}}
                                       source={require('../assets/img/naira-gold.png')}/>
                                <Text style={styles.totalAmount}>6,400.00</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <Button block iconRight
                        style={[styles.primaryButton, {marginVertical: 10, marginHorizontal: 10, borderRadius: 0}]}>
                    <Text style={styles.buttonText}>ADD NEW CARD</Text>
                    <Icon name='ios-add-circle' style={{fontSize: 25, color: '#EEE6D9'}}/>
                </Button>

                <View style={{backgroundColor: '#EEE6D9', marginHorizontal: 10, borderRadius: 5}}>
                    <ListItem
                        selected={this.state.radio1}
                        onPress={() => this.toggleRadio1()}
                    >
                        <Left>
                            <Image style={{width: 40, height: 25, marginRight: 30}}
                                   source={require('../assets/img/payments/mastercard.png')} resizeMode="contain"/>

                            <Text style={styles.listText}>**** **** **** 9425</Text>
                        </Left>
                        <Right>
                            <Radio
                                color={"#f0ad4e"}
                                selectedColor={"#5cb85c"}
                                selected={this.state.radio1}
                                onPress={() => this.toggleRadio1()}
                            />
                        </Right>
                    </ListItem>
                    <ListItem
                        selected={this.state.radio2}
                        onPress={() => this.toggleRadio2()}
                    >
                        <Left>
                            <Image style={{width: 40, height: 25, marginRight: 30}}
                                   source={require('../assets/img/payments/verve.png')} resizeMode="contain"/>

                            <Text style={styles.listText}>**** **** **** 2245</Text>
                        </Left>
                        <Right>
                            <Radio
                                color={"#f0ad4e"}
                                selectedColor={"#5cb85c"}
                                selected={this.state.radio2}
                                onPress={() => this.toggleRadio2()}
                            />
                        </Right>
                    </ListItem>
                    <ListItem style={styles.ListItem}
                              selected={this.state.radio3}
                              onPress={() => this.toggleRadio3()}
                    >
                        <Left>
                            <Image style={{width: 40, height: 25, marginRight: 30}}
                                   source={require('../assets/img/payments/visa.png')} resizeMode="contain"/>

                            <Text style={styles.listText}>**** **** **** 6785</Text>
                        </Left>
                        <Right>
                            <Radio
                                color={"#f0ad4e"}
                                selectedColor={"#5cb85c"}
                                selected={this.state.radio3}
                                onPress={() => this.toggleRadio3()}
                            />
                        </Right>
                    </ListItem>
                </View>

                <Button block style={[styles.secondaryButton, {marginTop: 30, marginHorizontal: 10}]}>
                    <Text style={styles.buttonText}>CHECKOUT AND PAY</Text>
                </Button>


            </ScrollView>
        );
    }
}

export default BuyTicket;