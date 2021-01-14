import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';
const Preferences = ({ icon, name, subname, iconcolor }) => {
    return (
        <View style={{
            flexDirection: 'row', marginTop: '6%',
            width: wp('100%'),
        }}>

            <Icon style={{ marginLeft: '4%' }} name={icon}
                size={30} color={iconcolor} />
            <View style={{ marginLeft: '2%', flex: 1 }}>
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'Questrial-Regular'
                }}> {name} </Text>
                <Text>{subname}</Text>
            </View>
            <TouchableOpacity>
                <Icon
                    style={{ marginLeft: '5%' }}
                    name="chevron-forward" size={30} />
            </TouchableOpacity>

        </View>
    )
}
export default Preferences;