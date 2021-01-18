import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Content, Thumbnail, Header, Left, Right, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../styles/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ProfileDetails = ({ navigation }) => {
    return (
        <Content contentContainerStyle={{ flex: 1 }}>
            <Header style={{ backgroundColor: '#fff', elevation: 0 }}>
                <Left style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            width: '50%',
                            flex: 1,
                            marginLeft: '4%',
                            alignContent: 'center', justifyContent: 'center'
                        }}>
                        <Icon name="close-outline" size={30} />
                    </TouchableOpacity>
                </Left>
                <Body style={{ flex: 1 }}>
                    <Thumbnail square source={require('../assets/swipepageicons/header-logo.png')} style={{ alignSelf: 'center', flex: 1, resizeMode: 'contain' }} />
                </Body>
                <Right style={{ flex: 1 }} />

            </Header>
            <View style={{ backgroundColor: '#fff', paddingBottom: 5 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: '2%', textAlign: 'center' }}>Profile</Text>
            </View>

            <View style={{ marginTop: '3%', borderWidth: 1, opacity: 0.5 }}></View>

            {/* <View>

            </View> */}



        </Content>
    )
}
export default ProfileDetails;