import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { Content, Thumbnail, ScrollableTab, Tab, Tabs, Header, Left, Right, Body, Container } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    widthPercentageToDP as wp, heightPercentageToDP
        as hp
} from 'react-native-responsive-screen';
import ColorBox from '../components/ColorBox';


const ColorSettings = ({ navigation }) => {
    return (
        <Container>
            <Content>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}
                    >
                        <Icon name="chevron-back" size={30} />
                    </TouchableOpacity>

                    <Image
                        resizeMode={'contain'}
                        source={require('../assets/logo.png')}
                        style={{
                            width: 55, height: 37,
                            marginLeft: '35%',
                            //  justifyContent: 'center',
                            alignSelf: 'center',
                            justifyContent: 'center'
                            // marginLeft: '30%'
                        }} />

                </View>

                <Text style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                    paddingVertical: 0,
                    fontFamily: 'Questrial-Regular',
                    textAlign: 'center', fontSize: 30, color: 'grey'
                }}>
                    Select your colour

                </Text>


                <ColorBox colorName="Red" mycolor="#ff0022" />

                <ColorBox colorName="Green" mycolor="#02ad32" />

                <ColorBox colorName="Blue" mycolor="#0a25f5" />

                <ColorBox colorName="Yellow" mycolor="#edf502" />

                <ColorBox colorName="Dark" mycolor="#0f0f0f" />

                <ColorBox colorName="Light" mycolor="#ebebeb" />

                <ColorBox colorName="Purple" mycolor="#da00f2" />

                <ColorBox colorName="Sea-green" mycolor="#09ab49" />

                <ColorBox colorName="Orange" mycolor="#f0b800" />

                <ColorBox colorName="Brown" mycolor="#b55104" />

            </Content>
        </Container>
    )
}
export default ColorSettings;