import {StyleSheet} from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#231F20',
    },
    loginBg: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: '#231F20',
        paddingHorizontal: 50,
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontFamily: 'CircularStd-Book',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontFamily: 'CircularStd-Book',
        fontWeight: '200',
    },
    socialButton: {
        width: 100,
        justifyContent: 'center',
        borderRadius: 4,
        height: 50,
    },
    fb: {
        backgroundColor: '#3B5998'
    },
    google: {
        backgroundColor: '#DF4B37'
    },
    rowed: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputBox: {
        marginBottom: 4,
        height: 50,
        color: '#231F20',
        fontFamily: 'CircularStd-Book',
        fontSize: 12,
        borderRadius: 4,
        backgroundColor: '#EEE6D9',
        paddingLeft: 15,
    },
    primaryButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BF9000',
        height: 50,
        borderRadius: 4,
        shadowColor: '#8D6A00',
        shadowOffset: {height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    secondaryButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#77101C',
        height: 50,
        borderRadius: 4,
        shadowColor: '#7E232D',
        shadowOffset: {height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonText: {
        fontFamily: 'CircularStd-Bold',
        fontSize: 20,
    },
    headerText: {
        color: '#231F20',
        fontFamily: 'CircularStd-Book',
        fontSize: 14,
        marginLeft: 10,
        marginBottom: 5
    },
    imageGrid: {
        width: 130,
        height: 100,
        marginHorizontal: 10,
        borderRadius: 12,
    },
    shadowed: {
        shadowColor: '#000',
        shadowOffset: { height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    movieList: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10,

    },
    imageThumb: {
        width: 80,
        height: 100,
    },
    listHeader: {
        color: '#EEE6D9',
        fontFamily: 'CircularStd-Book',
        fontSize: 14,
    },
    listDesc: {
        color: 'rgba(238, 230, 217, 0.7)',
        fontFamily: 'CircularStd-Book',
        fontSize: 12
    },
    listGenre: {
        color: '#BF9000',
        fontFamily: 'CircularStd-Book',
        fontSize: 8,
    },
    listRating: {
        position: 'absolute',
        color: '#FFFFFF',
        fontFamily: 'CircularStd-Medium',
        fontSize: 9,
        top: 8,
        left: 5,
    },
    listTime: {
        color: '#AF7D04',
        fontFamily: 'CircularStd-Book',
        fontSize: 12,
        textAlign: 'center'
    }
});
