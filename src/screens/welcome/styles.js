import React from "react"
import { StyleSheet } from "react-native"
import { Colors } from "../../styles/colors";
import { heightPercentageToDP } from "../../components/React Native Responsive Screen";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        alignItems: 'center',
        // height:'40%'
        // justifyContent: 'space-around',
    },
    image: {
        width: 320,
        height: 320,
    },
    text: {
        color: Colors.black,
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    title: {
        //position: "absolute",
        alignSelf: "center",
        fontSize: heightPercentageToDP("2%"),
        color: Colors.black,
        textAlign: 'center',
        paddingTop: heightPercentageToDP("0.5%"),
        paddingHorizontal: 50,
        //lineHeight: heightPercentageToDP("3.5%"),
        letterSpacing: 0.67
    },
    skipText: {
        textAlign: "center",
        color: Colors.skip,
        fontSize: heightPercentageToDP("1.5%"),
        padding: 10
    },
    dot: {
        backgroundColor: '#FFF',
        borderColor: '#070707',
        width: 12,
        height: 12,
        borderRadius: 6,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 10,
        borderWidth: 1
    },
    activedot: {
        backgroundColor: Colors.black,
        width: 12,
        height: 12,
        borderRadius: 6,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 10
    },
    IntroView: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
    },
    IntroBtn: {
        // flex: 1,
        width: wp('35%'),
        marginBottom: 15,
        backgroundColor: Colors.button,
        alignSelf: 'center',
        justifyContent: 'center',
        marginHorizontal: 25
    },
    IntroText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },
    continueBtn:
    {
        marginBottom: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#eb3f50',
        width: wp('40%'),
        borderRadius: 25,
        //height: 50,
        backgroundColor: '#f2384a',
        paddingVertical: 15
    }
});

export default styles;