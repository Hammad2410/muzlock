import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Content, Thumbnail, ScrollableTab, Tab, Tabs, Header, Left, Right, Body, Container } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ToggleSwitch from 'toggle-switch-react-native';

const SettingAccountToggle = ({ title, details, toggleState }) => {
    return (
        <View style={{
            justifyContent: 'center',
            backgroundColor: '#fff', width: wp('100%'),
            height: hp('10%')
        }}>
            <Text style={{
                fontWeight: 'bold', fontSize: 18,
                paddingHorizontal: '5%'
            }}>Discoverability</Text>
            <View style={{ flexDirection: 'row' }}>


                <Text style={{
                    paddingHorizontal: '5%'
                }}>Allow people to see your profile while swipping</Text>
                <ToggleSwitch
                    // style={{ marginTop: 10 }}
                    isOn={Discoverability}
                    onColor="red"
                    offColor="grey"
                    size="medium"
                    onToggle={isOn =>
                        setDiscoverability(!Discoverability)

                    }

                />
            </View>



        </View>
    )
}