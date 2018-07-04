import React, {Component} from 'react';
import {
    Image,
    View, ScrollView, ImageBackground, TouchableOpacity
} from 'react-native';
import {
    Icon, Text, Header, Item, Input, Tabs, Tab, ScrollableTab
} from 'native-base';


import styles from "../styles/style";

import SampleMovieList from "./SampleMovieList";

class HomeFeed extends React.Component {
    static navigationOptions = { header: null };
    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#231F20'}}>
                <ImageBackground
                    source={require('../assets/img/sliderBG.png')}
                    style={{height: 200}}>
                    <Header transparent searchBar rounded>
                        <View style={{width: 100}}></View>
                        <Item>
                            <Icon name="ios-search"/>
                            <Input style={{fontSize: 12,}} placeholder="Movie Title"/>
                            <Icon name="ios-film"/>
                        </Item>
                    </Header>
                    <Text style={styles.headerText}>New This Week</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.shadowed}>
                            <Image style={styles.imageGrid}
                                   source={require('../assets/img/avengers/thumb.jpg')}
                                   resizeMode="cover"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shadowed}>
                            <Image style={styles.imageGrid}
                                   source={require('../assets/img/incredibles/poster.jpg')}
                                   resizeMode="cover"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shadowed}>
                            <Image style={styles.imageGrid}
                                   source={require('../assets/img/annihilation/poster.jpg')}
                                   resizeMode="cover"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shadowed}>
                            <Image style={styles.imageGrid}
                                   source={require('../assets/img/blackpanther/poster.jpg')}
                                   resizeMode="cover"/>
                        </TouchableOpacity>
                    </ScrollView>
                </ImageBackground>

                <Tabs renderTabBar={() => <ScrollableTab style={{ backgroundColor: "#231F20", borderColor: '#BF9000' }}  />} tabBarUnderlineStyle={{ backgroundColor: '#BF9000'}}>
                    <Tab heading="Action"
                         textStyle={styles.tabCustomText}
                         activeTextStyle={styles.activeTabCustomText}
                         tabStyle={styles.customTabStyle}
                         activeTabStyle={styles.customTabStyle}
                         style={{ backgroundColor: '#231F20'}}>
                        <SampleMovieList/>
                    </Tab>
                    <Tab heading="Adventure"
                         textStyle={styles.tabCustomText}
                         activeTextStyle={styles.activeTabCustomText}
                         tabStyle={styles.customTabStyle}
                         activeTabStyle={styles.customTabStyle}
                         style={{ backgroundColor: '#231F20'}}>
                        <SampleMovieList/>
                    </Tab>
                    <Tab heading="Drama"
                         textStyle={styles.tabCustomText}
                         activeTextStyle={styles.activeTabCustomText}
                         tabStyle={styles.customTabStyle}
                         activeTabStyle={styles.customTabStyle}
                         style={{ backgroundColor: '#231F20'}}>
                        <SampleMovieList/>
                    </Tab>
                    <Tab heading="Thriller"
                         textStyle={styles.tabCustomText}
                         activeTextStyle={styles.activeTabCustomText}
                         tabStyle={styles.customTabStyle}
                         activeTabStyle={styles.customTabStyle}
                         style={{ backgroundColor: '#231F20'}}>
                        <SampleMovieList/>
                    </Tab>
                    <Tab heading="Horror"
                         textStyle={styles.tabCustomText}
                         activeTextStyle={styles.activeTabCustomText}
                         tabStyle={styles.customTabStyle}
                         activeTabStyle={styles.customTabStyle}
                         style={{ backgroundColor: '#231F20'}}>
                        <SampleMovieList/>
                    </Tab>
                </Tabs>



            </ScrollView>
        );
    }
}

export default HomeFeed;