import React from "react"
import { StyleSheet } from "react-native"
import { Colors } from "../../styles/colors";
import { heightPercentageToDP } from "../../components/React Native Responsive Screen";

const styles = StyleSheet.create({
    IntroText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 14,
    },
    IntroBtn: {

        marginBottom: 10,
        backgroundColor: Colors.button,
        alignSelf: 'center',
        justifyContent: 'center',
        marginHorizontal: 25
    }
})

export default styles;