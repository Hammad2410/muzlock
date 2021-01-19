import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';
import styles from './welcome/styles';
import { Colors } from '../styles/colors'
import DatePicker from 'react-native-date-picker'
import Logo from '../components/Logo';
const DateOfBirth = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    return (
        <Content contentContainerStyle={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ justifyContent: 'center' }}>

                <Logo />
                {/* <Image source={require('../assets/logo.png')}
                    style={{ width: wp('25%'), height: hp('10%'), marginTop: '5%', alignSelf: 'center', }} /> */}

                <Text style={{
                    justifyContent: 'center', alignSelf: 'center', marginTop: '5%',
                    fontSize: 18
                }}>What's Your Date Of Birth</Text>
                <Text style={{
                    width: wp('50%'), marginLeft: '6%',
                    justifyContent: 'center', alignSelf: 'center',
                    fontSize: 15
                }}>To find your perfect match </Text>
                <Text style={{
                    marginLeft: '-2%',
                    width: wp('45%'), justifyContent: 'center',
                    alignSelf: 'center'
                }}>you must be atleast 18 years old</Text>

                <Image style={{ width: wp('25%'), height: hp('15%'), alignSelf: 'center' }}
                    source={require('../assets/Birthdayormalefemalepage/birthday.png')} />

                <DatePicker
                    style={{ alignSelf: 'center', marginTop: '5%' }}
                    date={date}
                    mode="date"
                    onDateChange={(date) => setDate(date)}
                />
                {/* <Text>{date.toString()}</Text> */}




            </View>


            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Gender')}
                    style={styles.continueBtn}>
                    <Text style={{ color: '#fff' }}>
                        Continue
            </Text>
                </TouchableOpacity>
            </View>





        </Content>
    )
}
export default DateOfBirth;