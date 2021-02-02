
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Content, Container, Header, Left, Body, Right, Thumbnail } from 'native-base';
import {
    widthPercentageToDP as wp, heightPercentageToDP
        as hp
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';


const ScreenInsideProfileHeader = ({ text, navigation }) => {
    return (
        <View>
            <Header style={{ backgroundColor: '#e3e5e8', elevation: 0 }}>
                <Left style={{ flex: 1 }} >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            width: '50%',
                            flex: 1,
                            marginLeft: '4%',
                            alignContent: 'center', justifyContent: 'center'
                        }}>
                        <Icon name="arrow-back-outline" size={30} />
                    </TouchableOpacity>
                </Left>

                <Body style={{ flex: 1 }}>
                    <Thumbnail square source={require('../assets/swipepageicons/header-logo.png')} style={{ alignSelf: 'center', flex: 1, resizeMode: 'contain' }} />
                </Body>


                <Right style={{ flex: 1 }} />


            </Header>

            <Text style={styles.basicInfoText}> {text}</Text>
        </View>
    )
}
export default ScreenInsideProfileHeader;
const styles = StyleSheet.create({
    basicInfoText:
    {
        color: 'grey',
        fontSize: 18,
        textAlign: 'center',
        paddingBottom: '3%',
        fontWeight: 'bold',
        backgroundColor: '#e3e5e8',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'

    },
})