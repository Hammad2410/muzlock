import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, ImageBackground, TouchableOpacity, StyleSheet, FlatList, Modal, TouchableWithoutFeedback } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';
import Logo from '../components/Logo';
import { Colors } from '../styles/colors'
const Gender = ({ navigation }) => {
    return (
        <Content contentContainerStyle={{ flex: 1 }}>
            <View style={{ justifyContent: 'center' }}>
                <Logo />
                <Text style={{ marginTop: '5%', fontSize: 18, alignSelf: 'center' }}>What's Your Gender</Text>
                <Image style={{ marginTop: '5%', width: wp('28%'), height: hp('15%'), alignSelf: 'center' }}
                    source={require('../assets/Birthdayormalefemalepage/sex.png')} />

                <TouchableOpacity style={styles.genderBtn}>
                    <Text style={styles.genderText}>
                        Male
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.genderBtn}>
                    <Text style={styles.genderText}>
                        Female
                </Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => navigation.navigate('SelfieVerification')}
                    style={styles.continueBtn}>

                    <Text style={{ color: '#fff', fontSize: 15 }}>
                        Continue
             </Text>
                </TouchableOpacity>


            </View>

        </Content>
    )
}
export default Gender;

const styles = StyleSheet.create({
    genderBtn:
    {
        width: wp('60%'),
        height: 40,
        alignSelf: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: '#e7e8e3',
        borderRadius: 20,
        borderColor: '#e7e8e3'
        , marginTop: '7%'
    },
    genderText: {
        color: 'red',
        alignSelf: 'center',
        // alignItems: 'center'
    },
    continueBtn:
    {
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#eb3f50',
        width: wp('35%'),
        borderRadius: 20,
        height: 40,
        backgroundColor: '#f2384a'

    }
})