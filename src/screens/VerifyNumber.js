import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, ImageBackground, StyleSheet, FlatList, Modal, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content, Form, Input, Container } from 'native-base';
import CountryPicker from 'react-native-country-picker-modal'
import Icon from 'react-native-vector-icons/Ionicons'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const VerifyNumber = ({ navigation }) => {
    const [visibility, setVisibility] = useState(false);
    const [countryCode, setCountryCode] = useState('PK')
    const [country, setCountry] = useState(null)
    const [withFlag, setWithFlag] = useState(true)
    const [withCallingCode, setWithCallingCode] = useState(false)
    const onSelect = (country: Country) => {
        setCountryCode(country.cca2)
        setCountry(country)
        setWithCallingCode(country.callingCode)
    }



    return (
        <Container style={{ backgroundColor: '#fff' }}>
            <Content
                contentContainerStyle={{ backgroundColor: '#fff', paddingHorizontal: 10 }}>
                <Image
                    resizeMode="contain"
                    style={{
                        alignSelf: 'center',
                        width: wp('75%'), height: hp('50%')
                        // justifyContent: 'center', alignSelf: 'center'
                    }}
                    source={require('../assets/otpverificationpage/VerifyNumber.png')} />
                <Text style={styles.verifyNumberText}>Verify Your Number</Text>
                <Text style={styles.numdetailText}>Please enter your mobile number to receive a verification code.
                Message and data rate may apply
</Text>





                <View style={{
                    flex: 1,
                    flexDirection: 'row', marginTop: '3%',
                    alignSelf: 'center',
                    height: '100%'
                }}>

                    <CountryPicker
                        {...{
                            countryCode,
                            withFlag,
                            withCallingCode,
                            onSelect,

                        }}
                        withFilter={true}
                        visible={visibility}
                        onClose={() => setVisibility(false)}
                    />
                    {country !== null ?
                        <Text style={{ marginTop: '1%', fontSize: 15 }}>+{country.callingCode[0]}</Text>
                        : <Text style={{ marginTop: '1%', fontSize: 15 }}>+92</Text>
                    }

                    <TouchableOpacity onPress={() => setVisibility(true)

                    } >
                        <Icon name="caret-down" size={30} />
                    </TouchableOpacity>
                    {/* Phone Number */}
                    <Input
                        keyboardType="number-pad"
                        style={{
                            flex: 1,
                            borderBottomColor: '#f2384a',
                            borderBottomWidth: 1,
                            height: 40,
                            marginTop: '-2%'

                        }}
                        placeholder="Enter your Number"
                        placeholderTextColor="grey"

                    />
                </View>




            </Content >
            <TouchableOpacity
                onPress={() => navigation.navigate('ConfirmationCode')}
                style={[styles.continueBtn, { marginVertical: 20 }]}>

                <Text style={{ color: '#fff', fontSize: 15 }}>
                    Continue
             </Text>
            </TouchableOpacity>
        </Container>
    )

}
export default VerifyNumber;

const styles = StyleSheet.create({
    verifyNumberText:
    {
        marginTop: '5%',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    numdetailText:
    {
        textAlign: 'center',
        justifyContent: 'center',
        width: wp('75%'),
        alignSelf: 'center',
        marginVertical: 10,
        fontSize: 12
    },
    continueBtn:
    {
        // marginTop: '5%',

        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#eb3f50',
        width: wp('30%'),
        borderRadius: 20,
        height: 50,
        backgroundColor: '#f2384a',

    }
})