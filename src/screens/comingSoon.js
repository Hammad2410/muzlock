import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, } from 'react-native';
import { Content } from 'native-base';

const ComingSoon = ({ navigation }) => {

    return (
        <Content contentContainerStyle={{ flex: 1 }}>

            <View style={{
                flexDirection: 'row', justifyContent: 'center',
                marginTop: '2%'
            }}>
                <Text style={{ fontSize: 14 }}>Coming Soon</Text>

            </View>

        </Content >
    )
}
export default ComingSoon;

const styles = StyleSheet.create({
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderBottomWidth: 1,
        borderColor: '#fca503',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#fca503',
    },
});