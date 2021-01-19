import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, ImageBackground, StyleSheet, FlatList, Modal, TouchableWithoutFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';
import CountryPicker from 'react-native-country-picker-modal'
import Icon from 'react-native-vector-icons/Ionicons'

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
        <Content contentContainerStyle={{ flex: 1, backgroundColor: '#fff' }}>
            <Image
                resizeMode="contain"
                style={{
                    width: wp('100%'), height: hp('45%')
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
            }}>

                <CountryPicker
                    {...{
                        countryCode,
                        withFlag,
                        withCallingCode,
                        onSelect,
                    }}
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
                <TextInput
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






            <TouchableOpacity
                onPress={() => navigation.navigate('ConfirmationCode')}
                style={styles.continueBtn}>

                <Text style={{ color: '#fff', fontSize: 15 }}>
                    Continue
             </Text>
            </TouchableOpacity>


        </Content >
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
        justifyContent: 'center',
        width: wp('75%'),
        alignSelf: 'center'
    },
    continueBtn:
    {
        // marginTop: '5%',

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