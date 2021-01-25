import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, ImageBackground, TouchableOpacity, StyleSheet, FlatList, Modal, TouchableWithoutFeedback } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content, Container } from 'native-base';
import Logo from '../components/Logo';
import GradientText from '../components/GradientText';
import { Colors } from '../styles/colors'
const Gender = ({ navigation }) => {
    const [gender, setGender] = useState("");


    return (
        <Container>
            <Content contentContainerStyle={{ flex: 1 }}>
                <View style={{ justifyContent: 'center' }}>
                    <Logo />
                    {/* <Text style={{ marginTop: '5%', fontSize: 18, alignSelf: 'center' }}>What's Your Gender</Text> */}
                    <GradientText text={"What's Your Gender"} />
                    <Image
                        resizeMode="contain"
                        style={{ marginTop: '5%', width: wp('28%'), height: hp('15%'), alignSelf: 'center' }}
                        source={require('../assets/Birthdayormalefemalepage/sex.png')} />

                    <TouchableOpacity onPress={() => setGender('male')}
                        style={[styles.genderBtn, { backgroundColor: gender == "male" ? '#8AC9FE' : '#e7e8e3', }]}>
                        <Text style={[styles.genderText, { color: gender == 'male' ? "#FD4755" : 'red' }]}>
                            Male
                </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGender('female')} style={[styles.genderBtn, { backgroundColor: gender == "female" ? '#FD4755' : '#e7e8e3', }]}>
                        <Text style={[styles.genderText, { color: gender == 'female' ? "#8AC9FE" : 'red' }]}>
                            Female
                </Text>
                    </TouchableOpacity>

                </View>

            </Content>
            <TouchableOpacity
                onPress={() => navigation.navigate('SelfieVerification')}
                style={styles.continueBtn}>

                <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>
                    Continue
             </Text>
            </TouchableOpacity>
        </Container>

    )
}
export default Gender;

const styles = StyleSheet.create({
    genderBtn:
    {
        width: wp('70%'),
        height: 45,
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
        fontWeight: "bold"
        // alignItems: 'center'
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
        paddingVertical: 10

    }
})