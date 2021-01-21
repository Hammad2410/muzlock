import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content, Container } from 'native-base';
import { btn } from './globalStyles';
import GradientText from '../components/GradientText';


const EnableLocation = ({ navigation }) => {
    return (
        <Container>
            <Content contentContainerStyle={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Image
                        resizeMode="cover"
                        style={{
                            alignSelf: 'center', height: hp('50%')
                        }}

                        source={require('../assets/location/location.png')} />

                    <GradientText text={"Enable Location"} />


                    <Text style={{
                        marginTop: '2%',
                        justifyContent: 'center', alignSelf: 'center'
                    }}>You'll need to Enable your location </Text>
                    <Text style={{
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}>in order to use Muzlock</Text>

                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('tab')}
                    style={[btn.bottomBtn, { marginBottom: '14%', }]}>

                    <Text style={{ color: '#fff', fontSize: 15 }}>
                        Enable
             </Text>
                </TouchableOpacity>


            </Content>

        </Container>
    )
}
export default EnableLocation;