import React, { Component } from "react";
import {
    Image,
    View, TouchableOpacity
} from 'react-native';
import {Icon, Text} from 'native-base';
import styles from "../styles/style";

export default class SampleMovieList extends Component {
  render() {
    return (
      <View>
          <View style={styles.movieList}>
              <Image style={styles.imageThumb}
                     source={require('../assets/img/annihilation/thumb.jpeg')}
                     resizeMode="cover"/>
              <View style={{
                  flex: 1,
                  marginHorizontal: 10,
                  flexDirection: 'column',
                  justifyContent: 'space-between'
              }}>
                  <View>
                      <Text style={styles.listHeader}>Annihilation</Text>
                      <Text style={styles.listDesc}>A biologist signs up for a dangerous, secret expedition
                          into a
                          mysterious zone where the laws of nature don't apply.</Text>
                  </View>
                  <Text style={styles.listGenre}>Adventure | Drama | Horror | Mystery | Sci-Fi |
                      Thriller</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
                  <View>
                      <Icon name="ios-heart" style={{color: '#DB3236'}}/>
                      <Text style={styles.listRating}>70%</Text>
                  </View>
                  <View>
                      <Icon name="ios-clock" style={{color: '#AF7D04', top: 3}}/>
                      <Text style={styles.listTime}>115m</Text>
                  </View>
              </View>
          </View>
          <View style={styles.movieList}>
              <Image style={styles.imageThumb}
                     source={require('../assets/img/incredibles/thumb.jpeg')}
                     resizeMode="cover"/>
              <View style={{
                  flex: 1,
                  marginHorizontal: 10,
                  flexDirection: 'column',
                  justifyContent: 'space-between'
              }}>
                  <View>
                      <Text style={styles.listHeader}>Incredibles 2</Text>
                      <Text style={styles.listDesc}>Bob Parr (Mr. Incredible) is left to care for the kids
                          while
                          Helen (Elastigirl) is out saving the world.</Text>
                  </View>
                  <Text style={styles.listGenre}>Action | Animation | Comedy | Kids</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
                  <View>
                      <Icon name="ios-heart" style={{color: '#DB3236'}}/>
                      <Text style={styles.listRating}>90%</Text>
                  </View>
                  <View>
                      <Icon name="ios-clock" style={{color: '#AF7D04', top: 3}}/>
                      <Text style={styles.listTime}>132m</Text>
                  </View>
              </View>
          </View>

          <View style={styles.movieList}>
              <Image style={styles.imageThumb}
                     source={require('../assets/img/avengers/thumb.jpg')}
                     resizeMode="cover"/>
              <View style={{
                  flex: 1,
                  marginHorizontal: 10,
                  flexDirection: 'column',
                  justifyContent: 'space-between'
              }}>
                  <View>
                      <Text style={styles.listHeader}>Avengers: Infinity Wars</Text>
                      <Text style={styles.listDesc}>The Avengers and their allies must be willing to sacrifice
                          all
                          in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin
                          puts an ...</Text>
                  </View>
                  <Text style={styles.listGenre}>Action | Sci-Fi | Adventure </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
                  <View>
                      <Icon name="ios-heart" style={{color: '#DB3236'}}/>
                      <Text style={styles.listRating}>95%</Text>
                  </View>
                  <View>
                      <Icon name="ios-clock" style={{color: '#AF7D04', top: 3}}/>
                      <Text style={styles.listTime}>160m</Text>
                  </View>
              </View>
          </View>

          <View style={styles.movieList}>
              <Image style={styles.imageThumb}
                     source={require('../assets/img/blackpanther/poster.jpg')}
                     resizeMode="cover"/>
              <View style={{
                  flex: 1,
                  marginHorizontal: 10,
                  flexDirection: 'column',
                  justifyContent: 'space-between'
              }}>
                  <View>
                      <Text style={styles.listHeader}>Black Panther</Text>
                      <Text style={styles.listDesc}>T'Challa, the King of Wakanda, rises to the throne in the
                          isolated, technologically advanced African nation,</Text>
                  </View>
                  <Text style={styles.listGenre}>Action | Sci-Fi | Adventure </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
                  <View>
                      <Icon name="ios-heart" style={{color: '#DB3236'}}/>
                      <Text style={styles.listRating}>70%</Text>
                  </View>
                  <View>
                      <Icon name="ios-clock" style={{color: '#AF7D04', top: 3}}/>
                      <Text style={styles.listTime}>115m</Text>
                  </View>
              </View>
          </View>

          <View style={styles.movieList}>
              <Image style={styles.imageThumb}
                     source={require('../assets/img/annihilation/thumb.jpeg')}
                     resizeMode="cover"/>
              <View style={{
                  flex: 1,
                  marginHorizontal: 10,
                  flexDirection: 'column',
                  justifyContent: 'space-between'
              }}>
                  <View>
                      <Text style={styles.listHeader}>Annihilation</Text>
                      <Text style={styles.listDesc}>A biologist signs up for a dangerous, secret expedition
                          into a
                          mysterious zone where the laws of nature don't apply.</Text>
                  </View>
                  <Text style={styles.listGenre}>Adventure | Drama | Horror | Mystery | Sci-Fi |
                      Thriller</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
                  <View>
                      <Icon name="ios-heart" style={{color: '#DB3236'}}/>
                      <Text style={styles.listRating}>70%</Text>
                  </View>
                  <View>
                      <Icon name="ios-clock" style={{color: '#AF7D04', top: 3}}/>
                      <Text style={styles.listTime}>115m</Text>
                  </View>
              </View>
          </View>


      </View>
    );
  }
}
