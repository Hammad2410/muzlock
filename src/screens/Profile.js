import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Content, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Profile = ({ navigation }) => {
    const [profileCompletedPercent, setProfileCompletedPercent] = useState('30%')
    const [profileName, setProfileName] = useState('Aneesa');
    const [profileAge, setProfileAge] = useState('21');
    return (
        <Content contentContainerStyle={{ flex: 1 }}>
            <View style={{
                borderRadius: 40, justifyContent: 'center', alignSelf: 'center',
                borderTopColor: 'red', borderLeftColor: 'grey',
                borderRightColor: 'grey', borderBottomWidth: 0,
                borderWidth: 4,
            }}>
                <Thumbnail style={{ padding: 5 }}
                    large source={require('../assets/loginpageslider/3.jpg')} />
            </View>
            <View style={{ borderRadius: 30, borderWidth: 1, width: wp('7%') }} >
                <Icon name="pencil" size={20} />
            </View>

            <View style={{ alignSelf: 'center', marginTop: '2%' }}>
                <Text style={{
                    color: 'red', fontWeight: 'bold',
                    textAlign: 'center'
                }}>{profileCompletedPercent}</Text>
                <Text style={{
                    color: 'black', fontWeight: 'bold',
                    textAlign: 'center'
                }}>{profileName} , {profileAge}</Text>

                <Text style={{ textAlign: 'center' }}>Tap to edit profile</Text>
            </View>
        </Content>
    )
}
export default Profile;