import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'

const LoginScreen = ({ navigation }) => {
    return (
        <Content contentContainerStyle={{ flex: 1 }}>
            <ImageBackground
                style={{
                    width: wp('100%'), height: hp('55%'),
                    opacity: 0.7
                    // justifyContent: 'center', alignSelf: 'center'
                }}
                source={require('../assets/loginpageslider/3.jpg')}

            />
            <View style={styles.logoIconView}>
                <Image
                    style={{ alignContent: 'center', width: wp('25%'), height: hp('10%') }}
                    source={require('../assets/logo.png')} />
                <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold', alignSelf: 'center' }}>MuzLock</Text>
            </View>


            <View style={styles.viewVirutosSecureHalal} >
                <Text style={[styles.textJourneyMarriage, { fontSize: 20, fontWeight: 'bold' }]}>Virtuos - Secure - Halal</Text>
                <Text style={styles.textJourneyMarriage}>Start Your Journey To Marriage</Text>
            </View>
            <TouchableOpacity style={styles.btnstyle}>
                <Icon style={{ marginLeft: '5%' }}
                    name="call" size={30} color="red" />
                <Text style={styles.btntextstyle}>Login With Number</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.btnstyle}>
                {/* <Icon style={{ marginLeft: '5%' }}
                    name="logo-google" size={30} color="grey" /> */}
                <Image source={require('../assets/loginssocial/google.png')} style={{
                    width: 30, height: 30, marginLeft: '5%', alignSelf: 'center'
                }} />
                <Text style={styles.btntextstyle}>Login With Gmail</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnstyle}>
                <Icon style={{ marginLeft: '5%' }}
                    name="logo-apple" size={30} color="black" />
                <Text style={styles.btntextstyle}>Login With Apple Id</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnstyle}>
                <Icon style={{ marginLeft: '5%' }}
                    name="logo-facebook" size={30} color="blue" />
                <Text style={styles.btntextstyle}>Login With Facebook</Text>
            </TouchableOpacity>

            <Text style={styles.termsOfcondition}>
                We don't post anything on Facebook .By signing in , you
                agree to our Terms of Use
            </Text>


        </Content>
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    btnstyle:
    {
        flexDirection: 'row',
        borderWidth: 1, borderRadius: 20, width: wp('60%'),
        alignSelf: 'center',
        marginTop: '3%', height: 40
    },
    btntextstyle:
    {
        alignSelf: 'center', fontSize: 15, fontWeight: 'bold',
        justifyContent: 'center', marginLeft: '10%'
    },
    viewVirutosSecureHalal:
    {
        marginTop: '62%',
        position: 'absolute',
        alignContent: 'flex-end', alignSelf: 'center', justifyContent: 'center'
    },
    textJourneyMarriage:
    {
        fontSize: 18, color: '#fff'
    },
    logoIconView:
    {
        position: 'absolute', marginTop: '20%',
        justifyContent: 'center', alignSelf: 'center'
    },
    termsOfcondition:
    {
        justifyContent: 'center', marginLeft: '8%',
        marginTop: '3%', alignSelf: 'center', width: wp('65%'), color: '#e61c84'
    }
})