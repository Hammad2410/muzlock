import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content, Thumbnail } from 'native-base';
import { btn } from './globalStyles';
const SelfieVerification = ({ navigation }) => {
    const [image, setImage] = useState('');
    return (
        <Content contentContainerStyle={{ flex: 1 }}>
            <Image
                style={styles.img}
                source={require('../assets/selfieverification/selfie-verification.jpg')} />

            <Text style={styles.selfieVerifText}>Selfie Verification </Text>

            <Text style={styles.needSelfieVerifText}>We need a selfie verification </Text>
            <Text style={styles.onlyForUsText}> This is only for us </Text>

            <Text style={styles.notMakePublicText}>We will not make it public</Text>


            <TouchableOpacity style={styles.camerBtn}>
                <Image
                    style={{ width: wp('42%'), height: hp('25%') }}
                    source={require('../assets/selfieverification/photo-camera.png')} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('EnableLocation')}
                style={btn.bottomBtn}>

                <Text style={{ color: '#fff', fontSize: 15 }}>
                    Next
             </Text>
            </TouchableOpacity>


        </Content>
    )
}
export default SelfieVerification;

const styles = StyleSheet.create({
    img:
    {
        height: hp('40%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignSelf: 'center'
    }
    , selfieVerifText:
    {
        fontSize: 20,
        marginTop: '5%', justifyContent: 'center',
        alignSelf: 'center',
        color: '#c414ff', fontWeight: 'bold'
    },
    needSelfieVerifText:
    {
        width: wp('50%'), marginTop: '1%',
        fontSize: 15, justifyContent: 'center', alignSelf: 'center'
    },
    onlyForUsText:
    {
        marginLeft: '15%',
        width: wp('50%'),
        fontSize: 15, justifyContent: 'center', alignSelf: 'center'
    },
    notMakePublicText:
    {
        marginLeft: '2%',
        width: wp('50%'),
        fontSize: 15, justifyContent: 'center', alignSelf: 'center'
    },
    camerBtn:
    {
        marginTop: '5%',
        justifyContent: 'center', alignSelf: 'center'
    }, nextBtn:
    {
        marginTop: '3%',
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
});