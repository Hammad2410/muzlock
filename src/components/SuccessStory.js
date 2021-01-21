import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';

const SuccessStory = () => {
    return (

        <View style={{
            marginTop: '2%',
            borderWidth: 1,
            width: wp('90%'),
            justifyContent: 'center',
            borderRadius: 15,
            alignSelf: 'center',
            paddingHorizontal: 10
            // , backgroundColor: 'red'
        }}>
            <Image
                style={{
                    // marginTop: 10,
                    // paddingHorizontal: 10,
                    // paddingVertical: 10,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    borderWidth: 2,
                    width: wp('90%'),
                    height: 360,
                    alignSelf: 'center',

                }}
                // resizeMode="cover"
                source={require('../assets/loginpageslider/1.jpg')}
            />
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', textAlign: 'center', width: wp('48%'), marginTop: '2%' }}>Excited news about arrival this couple</Text>
            <Text style={{
                // marginHorizontal: '5%',

            }}>Lorem ipsum is simply dummy text of
                the printing and typeetting industry.Lorem Ipsum has
                been the industry's standard dummy text
            eve since the 1500s</Text>


        </View>
    )
}
export default SuccessStory;