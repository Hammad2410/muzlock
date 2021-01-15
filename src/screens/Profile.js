import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Content, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
            {/* <View style={{ borderRadius: 30, borderWidth: 1, width: wp('7%') }} >
                <Icon name="pencil" size={20} />
            </View> */}

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

            <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'space-around' }}>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Settings')}
                        style={{
                            backgroundColor: '#fff', borderColor: 'grey',
                            borderWidth: 1, borderRadius: 25,
                        }}>
                        <Icon style={{ alignSelf: 'center' }} name="settings" size={20} color="grey" />

                    </TouchableOpacity>
                    <Text style={{ marginTop: '5%' }}>Setting</Text>
                </View>

                <View>
                    <TouchableOpacity style={{
                        alignSelf: 'center',
                        marginTop: '45%',
                        backgroundColor: '#fff', borderColor: 'grey',
                        width: wp('11%'), borderWidth: 1, borderRadius: 35,
                    }} >
                        <Icon style={{ padding: 4, alignSelf: 'center' }} name="help" size={20} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: '5%' }}>Muz Shield</Text>
                </View>

                <View>
                    <TouchableOpacity style={{
                        backgroundColor: '#fff', borderColor: 'grey',
                        width: wp('11%'), borderWidth: 1, borderRadius: 25,
                    }} >
                        <Icon style={{ padding: 4, alignSelf: 'center' }} name="help" size={20} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: '5%' }}>Filters</Text>

                </View>


            </View>
            {/* Views for icon btns ended */}
            <View style={{
                marginTop: '2%', flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>


                <View>
                    <TouchableOpacity style={{
                        alignSelf: 'center',
                        backgroundColor: '#fff', borderColor: 'grey',
                        width: wp('11%'), borderWidth: 1, borderRadius: 25,
                    }} >
                        <Icon style={{ padding: 4, alignSelf: 'center' }} name="help" size={20} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: '5%' }}>Help Center</Text>

                </View>



                <View>
                    <TouchableOpacity style={{

                        alignSelf: 'center',
                        backgroundColor: '#fff', borderColor: 'grey',
                        width: wp('11%'), borderWidth: 1, borderRadius: 25,
                    }} >
                        <Icon style={{ padding: 4, alignSelf: 'center' }} name="help" size={20} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: '5%' }}>Success Stories</Text>

                </View>


            </View>

            <View style={{ marginTop: '5%' }}>
                <Text style={{
                    alignSelf: 'center',
                    fontWeight: 'bold'
                }}> MUZLOCK </Text>
                <Text style={{
                    marginVertical: '2%',
                    alignSelf: 'center', fontWeight: 'bold',
                    color: 'orange'
                }}>PREMIUM</Text>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }}>
                    <Image style={{
                        width: wp('20%'), height: hp('15%')
                    }}
                        source={require('../assets/settingpage/carosalimages/daily.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ margin: '2%' }}>
                    <Image style={{
                        width: wp('20%'), height: hp('15%')
                    }}
                        source={require('../assets/settingpage/carosalimages/daily.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: '2%' }}>
                    <Image style={{
                        width: wp('20%'), height: hp('15%')
                    }}
                        source={require('../assets/settingpage/carosalimages/daily.png')}
                    />
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={{
                borderRadius: 20,
                backgroundColor: 'red',
                borderColor: 'red',
                alignSelf: 'center',
                width: wp('50%'), borderWidth: 1,
            }}>
                <Text style={{
                    color: '#fff', padding: 5,
                    textAlign: 'center'
                }}>Try Premium For Free</Text>
            </TouchableOpacity>



        </Content >
    )
}
export default Profile;