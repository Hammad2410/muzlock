import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Content, Thumbnail, ScrollableTab, Tab, Tabs, Header, Left, Right, Body, Container } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ToggleSwitch from 'toggle-switch-react-native';

const PrivacyPolicyAccount = ({ title, details, toggleHandler, state }) => {
    const [Discoverability, setDiscoverability] = useState(false);
    return (
        <View style={{
            justifyContent: 'center',
            backgroundColor: '#fff', width: wp('100%'),
            height: hp('10%'),
            borderBottomWidth: 1,
            borderBottomColor: 'grey'
        }}>
            <Text style={{
                fontWeight: 'bold', fontSize: 18,
                paddingHorizontal: '5%'
            }}>{title}</Text>
            <View style={{ flexDirection: 'row' }}>


                <Text style={{
                    flex: 1,
                    paddingHorizontal: '5%'
                }}>{details}</Text>

                <ToggleSwitch

                    isOn={state}
                    onColor="red"
                    offColor="grey"
                    size="medium"
                    onToggle={
                        toggleHandler
                    }

                />

            </View>



        </View>
    )
}
export default PrivacyPolicyAccount;


