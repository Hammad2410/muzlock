import React, { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { Content, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../styles/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Profile = ({ navigation }) => {
    const [profileCompletedPercent, setProfileCompletedPercent] = useState('30%')
    const [profileName, setProfileName] = useState('Aneesa');
    const [profileAge, setProfileAge] = useState('21');
    const [images, setImage] = useState([
        {
            url: require(`../assets/settingpage/carosalimages/boost.png`)
        },
        {
            url: require(`../assets/settingpage/carosalimages/change-of-mind.png`)
        },
        {
            url: require(`../assets/settingpage/carosalimages/daily.png`)
        },
        {
            url: require(`../assets/settingpage/carosalimages/filter.png`)
        },
        {
            url: require(`../assets/settingpage/carosalimages/passport.png`)
        },
        {
            url: require(`../assets/settingpage/carosalimages/premium.png`)
        },
        {
            url: require(`../assets/settingpage/carosalimages/psd.jpg`)
        },
        {
            url: require(`../assets/settingpage/carosalimages/second.png`)
        },
        {
            url: require(`../assets/settingpage/carosalimages/unlimited.png`)
        },
        {
            url: require(`../assets/settingpage/carosalimages/visible.png`)
        },

    ])
    return (
        <Content >
            <View>
                <View style={{
                    borderRadius: 65, justifyContent: 'center',
                    alignSelf: 'center',
                    borderTopColor: Colors.button,
                    borderLeftColor: Colors.grey,
                    borderRightColor: Colors.grey,
                    borderBottomWidth: 0,
                    borderWidth: 4, marginTop: 5, padding: 3

                }}>
                    <Thumbnail style={{
                        padding: 5, width: wp("33%"),
                        height: wp("33%"), borderRadius: 100,
                    }}
                        source={require('../assets/loginpageslider/3.jpg')}
                    />

                </View>
                <View style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    alignItems: 'flex-end',
                    marginTop: '25%'
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ProfileDetails')}
                        style={{
                            marginLeft: '35%',
                            width: 30,
                        }}
                    >
                        <Icon
                            style={{
                                // width: wp('100%'),

                                // position: 'absolute'
                            }}
                            name="add-circle" size={30} color="grey" />
                    </TouchableOpacity>
                </View>

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

            <View style={{
                marginTop: '5%', flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Settings')}>
                        {/* <Icon style={{ alignSelf: 'center' }} name="settings" size={20} color="grey" /> */}
                        <Thumbnail source={require('../assets/settingpage/settingicon/setting.png')} />

                    </TouchableOpacity>
                    <Text style={{ marginTop: '5%' }}>Setting</Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Shield')}
                    >
                        <Thumbnail source={require('../assets/settingpage/settingicon/muzlock.png')} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: '5%' }}>Muz Shield</Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Filter')}
                    >
                        <Thumbnail source={require('../assets/settingpage/settingicon/filter.png')} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: '5%' }}>Filters</Text>

                </View>


            </View>
            {/* Views for icon btns ended */}
            <View style={{
                marginTop: '2%', flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SearchForAnswers')} >
                        <Thumbnail source={require('../assets/settingpage/settingicon/help.png')} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: '5%' }}>Help Center</Text>

                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SuccessStories')} >
                        <Thumbnail source={require('../assets/settingpage/settingicon/success-stories.png')} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: '5%' }}>Success Stories</Text>

                </View>


            </View>

            <View style={{ marginTop: '5%' }}>
                <Text style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 24
                }}> MUZLOCK </Text>
                <Text style={{
                    marginVertical: '2%',
                    alignSelf: 'center', fontWeight: 'bold',
                    color: 'orange'
                }}>PREMIUM</Text>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2%'
            }}>
                <FlatList
                    data={images}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Premium')}
                            style={{ margin: 10, marginHorizontal: 10 }}>
                            <Image style={{
                                width: wp('20%'), height: hp('15%')
                            }}
                                source={item.url}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>


            {/* <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
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
            </View> */}


            <TouchableOpacity style={{
                borderRadius: 25,
                backgroundColor: 'red',
                borderColor: 'red',
                alignSelf: 'center',
                width: wp('50%'), borderWidth: 1,
                padding: 10,
                marginTop: 10
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