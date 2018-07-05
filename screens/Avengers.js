import React, {Component} from 'react';
import {
    Image,
    View, ScrollView, ImageBackground, WebView
} from 'react-native';
import {Icon, Text, Header, Button, Left, Grid, Col} from 'native-base';


import styles from "../styles/style";

class Avengers extends React.Component {
    static navigationOptions = { header: null };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#231F20'}}>
                <ImageBackground
                    source={require('../assets/img/avengers/poster.jpg')}
                    style={{height: 210}}>
                    <Header transparent>
                        <Left>
                            <Button transparent style={{paddingBottom: 4}}
                                    title="Go back"
                                    onPress={() => this.props.navigation.goBack()}>
                                <Icon name="ios-arrow-dropleft-circle-outline"  style={{fontSize: 30, color: '#AF7D04'}}/>
                            </Button>
                        </Left>

                    </Header>
                </ImageBackground>

                {/*Movie Schedule*/}
                <Grid>
                    <Col style={{ backgroundColor: '#D8D8D8', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image style={{top: 4, width: 12, height: 10}} source={require('../assets/img/naira.png')}/>
                            <Text style={styles.ticketPrice}>3,200.00</Text>
                        </View>
                    </Col>
                    <Col style={{ height: 50 }}>
                        <Button block style={[styles.primaryButton, {borderRadius: 0}]}
                                title="Buy Ticket"
                                onPress={() =>
                                    navigate('BuyTicket', { name: 'BuyTicket' })
                                }>
                            <Text style={styles.buttonText}>BUY TICKET</Text>
                        </Button>
                    </Col>
                </Grid>
                <View style={{ marginHorizontal: 10}}>
                    <Text style={styles.movieTitle}>Avengers: Infinity War</Text>
                    <View style={{height: 180}}>
                        <WebView
                            style={{flex: 1}}
                            javaScriptEnabled
                            source={{
                                uri: 'https://www.youtube.com/embed/6ZfuNTqbHE8?rel=0&autoplay=0&showinfo=0&controls=1'
                            }}
                        />
                    </View>
                    <Text style={[styles.listDesc, {marginVertical: 5}]}>The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={[styles.listGenre, {fontSize: 9}]}>Adventure | Drama | Horror | Mystery | Sci-Fi | Thriller</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 5}}>
                                <Icon name="ios-heart" style={{color: '#DB3236', fontSize: 24,}}/>
                                <Text style={styles.movieRating}>70%</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="ios-clock" style={{color: '#AF7D04', fontSize: 24}}/>
                                <Text style={styles.movieTime}>115m</Text>
                            </View>
                        </View>
                    </View>

                </View>

            </ScrollView>
        );
    }
}

export default Avengers;