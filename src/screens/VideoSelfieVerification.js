
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Content, Container } from 'native-base';
import {
    widthPercentageToDP as wp, heightPercentageToDP
        as hp
} from 'react-native-responsive-screen';
import GradientText from '../components/GradientText';
const VideoSelfieVerification = () => {
    return (
        <Container>
            <Content style={{ flex: 1 }}>
                <View>
                    <Image
                        resizeMode="contain"
                        source={require('../assets/selfieverification/selfie-verification.jpg')} />

                </View>
                <View style={{ marginTop: '4%' }}>
                    <GradientText text={"Take a Video Selfie"} />
                </View>
                <View style={{ width: wp('65%'), alignSelf: 'center' }}>
                    <Text style={{ fontSize: 16, textAlign: 'center' }}>We need a short video of you for verification
                    that you are a real. This is for only us.
                    We didn't public this.
                    This video is automatic by 1 minute.
                </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }} >Image not Provided </Text>
                </View>

            </Content>
            <View style={{ justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => alert('Next')}
                    style={styles.continueBtn}>

                    <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>
                        Next
        </Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}
export default VideoSelfieVerification;

const styles = StyleSheet.create({

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
        height: 50,
        backgroundColor: '#f2384a',
        paddingVertical: 10

    }
})