import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content, Input } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import Carousel from 'react-native-snap-carousel';

const LoginScreen = ({ navigation }) => {
    return (
        <Content contentContainerStyle={{ flex: 1 }}>
            <Carousel
                //ref={(c) => { this._carousel = c; }}
                data={[{ url: require('../assets/loginpageslider/1.jpg') }, { url: require('../assets/loginpageslider/2.jpg') }, { url: require('../assets/loginpageslider/3.jpg') }]}
                sliderWidth={wp("100%")}
                itemWidth={wp("100%")}
                scrollEnabled={false}
                loop={true}

                autoplay={true}
                renderItem={({ item }) => (
                    <ImageBackground
                        style={{
                            width: wp('100%'), height: hp('55%'),
                            justifyContent: 'center'
                        }}
                        source={item.url}

                    >
                        <View style={styles.logoIconView}>
                            <Image
                                resizeMode={'contain'}
                                style={{ alignContent: 'center', width: wp('25%'), height: hp('10%'), alignSelf: 'center' }}
                                source={require('../assets/logo.png')} />
                            <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold', alignSelf: 'center' }}>MuzLock</Text>
                        </View>


                        <View style={styles.viewVirutosSecureHalal} >
                            <Text style={[styles.textJourneyMarriage, { fontSize: 20, fontWeight: 'bold' }]}>Virtuos - Secure - Halal</Text>
                            <Text style={styles.textJourneyMarriage}>Start Your Journey To Marriage</Text>
                        </View>
                    </ImageBackground>
                )}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('VerifyNumber')}
                style={styles.btnstyle}>
                <Icon style={{ marginLeft: '5%', alignSelf: 'center' }}
                    name="call" size={30} color="red" />
                <Text style={styles.btntextstyle}>Login With Number</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.btnstyle}>
                {/* <Icon style={{ marginLeft: '5%' }}
                    name="logo-google" size={30} color="grey" /> */}
                <Image source={require('../assets/loginssocial/google.png')} style={{
                    width: 30, height: 30, marginLeft: '5%', alignSelf: 'center',
                }} />
                <Text style={styles.btntextstyle}>Login With Gmail</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnstyle}>
                <Icon style={{ marginLeft: '5%', alignSelf: 'center', }}
                    name="logo-apple" size={30} color="black" />
                <Text style={styles.btntextstyle}>Login With Apple Id</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnstyle}>
                <Icon style={{ width: 30, height: 30, marginLeft: '5%', alignSelf: 'center', }}
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
        elevation: 5,
        flexDirection: 'row',
        borderRadius: 25, width: wp('60%'),
        alignSelf: 'center',
        marginTop: '3%', height: 50, paddingTop: 1,
        backgroundColor: '#FFF'
    },
    btntextstyle:
    {
        alignSelf: 'center', fontSize: 15, fontWeight: 'bold',
        justifyContent: 'center', marginLeft: '10%'
    },
    viewVirutosSecureHalal:
    {

        //  marginTop: '62%',
        // position: 'absolute',
        alignContent: 'center', justifyContent: 'center',
        marginVertical: 10
    },
    textJourneyMarriage:
    {
        fontSize: 18, color: '#fff',
        textAlign: "center"
    },
    logoIconView:
    {
        flex: 1,
        marginTop: '35%',
    },
    termsOfcondition:
    {
        justifyContent: 'center', marginLeft: '8%',
        marginTop: '3%', alignSelf: 'center', width: wp('75%'), color: '#e61c84',
        textAlign: 'center'
    }
})