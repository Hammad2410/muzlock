import React from 'react';
import { View, Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Logo = () => {
    return (
        <View>
            <Image source={require('../assets/logo.png')}
                style={{ width: wp('25%'), height: hp('10%'), marginTop: '5%', alignSelf: 'center', }} />
        </View>
    )
}
export default Logo;