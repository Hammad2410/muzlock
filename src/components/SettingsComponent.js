import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SettingComponent = ({ iconLeft, textName, iconRight, iconLeftColor, iconRightColor }) => {

    return (
        <View style={{
            padding: 7,
            // backgroundColor: 'orange',
            backgroundColor: '#fff',
            flexDirection: 'row',
            width: wp('100%'),
            paddingHorizontal: 5
        }}>
            <Icon name={iconLeft} size={30} color={iconLeftColor} />

            <View style={{ flexDirection: 'row', flex: 1, }}>
                <Text style={{ marginLeft: '2%', alignSelf: 'center' }}> {textName}</Text>
            </View>
            <TouchableOpacity>
                <Icon style={{ alignSelf: 'center' }}
                    name={iconRight} size={20} color={iconRightColor} />
            </TouchableOpacity>

        </View>
    )
}
export default SettingComponent;

export const SettingTwoName = ({ iconLeftName, textFirstName,
    textSecondName, iconRightName, iconLeftClr, iconRightClr,
    handler }) => {
    return (
        <View style={{
            // flex: 1,
            flexDirection: 'row',
            padding: 7,
            width: wp('100%'),
            // height: '8%', 
            // alignItems: 'center',
            backgroundColor: '#fff',
            // marginTop: '7%'
        }}>
            <Icon name={iconLeftName} size={30} color={iconLeftClr} />

            <View style={{

                alignSelf: 'center', flex: 1,
                flexDirection: 'row'
            }}>
                <Text style={{
                    alignSelf: 'center',
                    marginLeft: '2%'
                }}> {textFirstName}</Text>
            </View>

            {/* <TouchableOpacity onPress={() => alert('Clicked')}>
                <Icon name="pencil" size={30} />
            </TouchableOpacity> */}
            <Text >{textSecondName}</Text>
            <TouchableOpacity
                style={{ alignSelf: 'center' }}
                onPress={() => handler()}>

                <Icon
                    name={iconRightName} size={20} color={iconRightClr} />
            </TouchableOpacity>
        </View>
    )
}