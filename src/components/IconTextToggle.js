import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content, Header, Right, Left, Body, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native';

const IconTextToggle = ({ icon, name, itemState, ToggleHandler, size, color }) => {
    return (
        <View style={[styles.settinginnerview, { marginTop: '3%' }]}>

            <Icon
                style={{ alignSelf: 'center' }}
                name={icon} size={size} color={color} />
            <Text style={{

                alignSelf: 'center',
                // marginTop: '2%',
                marginLeft: '-40%'
            }}>{name} </Text>


            <ToggleSwitch
                isOn={itemState}
                onColor="red"
                offColor="grey"
                size="medium"
                onToggle={isOn =>
                    ToggleHandler()

                }

            />

        </View>
    )
}
export default IconTextToggle;
const styles = StyleSheet.create({
    settinginnerview:
    {
        height: 40, flex: 1,
        flexDirection: 'row', justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    }
})