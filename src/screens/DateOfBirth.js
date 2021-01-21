import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content, Container } from 'native-base';
import styles from './welcome/styles';
import { Colors } from '../styles/colors'
import DatePicker from 'react-native-date-picker'
import Logo from '../components/Logo';
import GradientText from '../components/GradientText';
const DateOfBirth = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    return (
        <Container>
            <Content contentContainerStyle={{ flex: 1 }}>
                <View style={{ justifyContent: 'center' }}>

                    <Logo />
                    {/* <Image source={require('../assets/logo.png')}
                    style={{ width: wp('25%'), height: hp('10%'), marginTop: '5%', alignSelf: 'center', }} /> */}

                    {/* <Text style={{
                        justifyContent: 'center', alignSelf: 'center', marginTop: '5%',
                        fontSize: 18
                    }}>What's Your Date Of Birth</Text> */}
                    <GradientText text={"What's Your Date Of Birth"} />
                    <Text style={{
                        width: wp('50%'),
                        justifyContent: 'center', alignSelf: 'center',
                        fontSize: 12,
                        textAlign: 'center'
                    }}>To find your perfect match you must be atleast 18 years old</Text>
                    {/* <Text style={{
                        marginLeft: '-2%',
                        width: wp('45%'), justifyContent: 'center',
                        alignSelf: 'center',
                        textAlign: 'center',
                        fontSize: 12,
                    }}>you must be atleast 18 years old</Text> */}

                    <Image resizeMode="contain" style={{ width: wp('25%'), height: hp('15%'), alignSelf: 'center', marginVertical: 25 }}
                        source={require('../assets/Birthdayormalefemalepage/birthday.png')} />

                    <DatePicker
                        style={{ alignSelf: 'center', marginTop: '5%' }}
                        date={date}
                        mode="date"
                        onDateChange={(date) => setDate(date)}
                    />
                    {/* <Text>{date.toString()}</Text> */}




                </View>




            </Content>
            <View style={{ marginVertical: '10%' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Gender')}
                    style={[styles.continueBtn, { marginBottom: 10 }]}>
                    <Text style={{ color: '#fff' }}>
                        Continue
            </Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}
export default DateOfBirth;