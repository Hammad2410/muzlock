import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content, Container } from 'native-base';
import { btn } from './globalStyles';


const EnableLocation = ({ navigation }) => {
    return (
        <Container>
            <Content contentContainerStyle={{ flex: 1 }}>

                <Image

                    style={{
                        alignSelf: 'center', height: hp('35%'),
                    }}

                    source={require('../assets/location/location.png')} />



                <Text style={{
                    fontSize: 20,
                    marginTop: '-5%',
                    alignSelf: 'center',
                    color: '#c414ff', fontWeight: 'bold'
                }}>  Enable Location</Text>

                <Text style={{
                    marginTop: '2%',
                    justifyContent: 'center', alignSelf: 'center'
                }}>You'll need to Enable your location </Text>
                <Text style={{
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}>in order to use Muzlock</Text>







            </Content>
            <TouchableOpacity
                onPress={() => navigation.navigate('tab')}
                style={[btn.bottomBtn, { marginBottom: '4%' }]}>

                <Text style={{ color: '#fff', fontSize: 15 }}>
                    Enable
             </Text>
            </TouchableOpacity>
        </Container>
    )
}
export default EnableLocation;