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
    }
});
