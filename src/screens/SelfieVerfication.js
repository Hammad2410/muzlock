import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content, Thumbnail, Container } from 'native-base';
import GradientText from '../components/GradientText';
import { btn } from './globalStyles';
const SelfieVerification = ({ navigation }) => {
    const [image, setImage] = useState('');
    return (
        <Container>
            <Content contentContainerStyle={{ flex: 1 }}>
                <Image
                    resizeMode='contain'
                    style={styles.img}
                    source={require('../assets/selfieverification/selfie-verification.jpg')} />

                <GradientText text={"Selfie Verification"} />

                <Text style={styles.needSelfieVerifText}>We need a selfie verification This is only for us We will not make it public</Text>
                {/* <Text style={styles.onlyForUsText}> </Text>

                <Text style={styles.notMakePublicText}</Text> */}


                <TouchableOpacity style={styles.camerBtn}>
                    <Image
                        resizeMode="contain"
                        style={{ alignContent: 'center', width: wp('50%'), height: hp('25%') }}
                        source={require('../assets/selfieverification/photo-camera.png')} />
                </TouchableOpacity>




            </Content>
            <TouchableOpacity
                onPress={() => navigation.navigate('EnableLocation')}
                style={[btn.bottomBtn, { marginVertical: 35 }]}>

                <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>
                    Next
             </Text>
            </TouchableOpacity>
        </Container>
    )
}
export default SelfieVerification;

const styles = StyleSheet.create({
    img:
    {
        height: hp('40%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#E1E1E1'
    }
    , selfieVerifText:
    {
        fontSize: 20, textAlign: 'center',
        marginTop: '5%', justifyContent: 'center',
        alignSelf: 'center',
        color: '#c414ff', fontWeight: 'bold'
    },
    needSelfieVerifText:
    {
        width: wp('75%'), marginTop: '1%', textAlign: 'center',
        fontSize: 12, justifyContent: 'center', alignSelf: 'center',
        marginVertical: 10
    },
    onlyForUsText:
    {
        marginLeft: '3%', textAlign: 'center',
        width: wp('50%'),
        fontSize: 15, justifyContent: 'center', alignSelf: 'center'
    },
    notMakePublicText:
    {
        marginLeft: '2%', textAlign: 'center',
        width: wp('50%'),
        fontSize: 15, justifyContent: 'center', alignSelf: 'center'
    },
    camerBtn:
    {
        marginTop: '5%',
        justifyContent: 'center', alignSelf: 'center'
    },
    nextBtn:
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