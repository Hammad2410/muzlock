import React, { useState } from 'react';
import { View, Text, Image, FlatList, Modal, StyleSheet, TouchableHighlight } from 'react-native';
import { Content, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../styles/colors';
import ToggleSwitch from 'toggle-switch-react-native';
import Swiper from 'react-native-swiper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Profile = ({ navigation }) => {
    const [profileCompletedPercent, setProfileCompletedPercent] = useState('30%')
    const [profileName, setProfileName] = useState('Aneesa');
    const [profileAge, setProfileAge] = useState('21');
    const [modalVisible, setModalVisible] = useState(false);
    const [stealthMode, setStealthMode] = useState(false);
    const [hideAge, setHideAge] = useState(false);
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
                marginTop: '2%',
                width: wp('75%'),
                alignSelf: 'center'
            }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={images}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Premium')}
                            style={{ margin: 10, marginHorizontal: 10 }}>
                            <Image resizeMode={'contain'} style={{
                                width: wp('20%'), height: hp('20%')
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


            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
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

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.modalMainView}>

                    <View >
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}>Upgrade to Salams Premium</Text>

                        {/* <Text style={{ textAlign: 'center' }}>
                            Advanced Search Filters
               </Text> */}

                        {/* <Text style={{ width: wp('80%'), alignSelf: 'center' }}>
                            Filter by family origin,education and more so that you can find the one quicker!
                        </Text> */}
                        <View style={{ height: hp('30%') }}>
                            <Swiper style={styles.wrapper}
                            >
                                <View style={styles.slide1}>
                                    {/* <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        padding: 5, width: wp('40%'),
                                        backgroundColor: '#e4ebe7'
                                    }}>
                                        <Text>Stealth Mode</Text>
                                        <ToggleSwitch
                                            isOn={stealthMode}
                                            onColor="green"
                                            offColor="grey"
                                            size="small"
                                            onToggle={() => setStealthMode(!stealthMode)}
                                        />
                                    </View>

                                    <View style={{
                                        marginVertical: '4%',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        padding: 5, width: wp('40%'),
                                        backgroundColor: '#e4ebe7'
                                    }}>
                                        <Text>Hide Age</Text>
                                        <ToggleSwitch
                                            isOn={hideAge}
                                            onColor="green"
                                            offColor="grey"
                                            size="small"
                                            onToggle={() => setHideAge(!hideAge)}
                                        />
                                    </View> */}


                                    <Text style={styles.text}>
                                        Increased Privacy</Text>
                                    <Text style={{ textAlign: 'center' }}>
                                        With Stealth Mode, only those you can like can see you , Hide your age too if you want
                                        </Text>
                                </View>
                                <View style={styles.slide2}>

                                    <Text style={styles.text}>Undo Swipes</Text>
                                    <Text style={{ textAlign: 'center' }}>
                                        Accidentaly swiped left when you meant to swipe right ? undo it with premium !
                                        </Text>
                                </View>
                                <View style={styles.slide3}>
                                    <Text style={styles.text}>Advanced Search Filters</Text>
                                    <Text style={{ textAlign: 'center' }}>
                                        Filter by family origin, education , and more so that youcan find the one quicker !
                                        </Text>
                                </View>



                                <View style={styles.slide3}>
                                    <Text style={styles.text}>See who Likes You</Text>
                                    <Text style={{
                                        textAlign: 'center', marginHorizontal: '8%',
                                    }}>
                                        Instantly match with the people you like and privately pass on the ones you don't
                                        </Text>
                                </View>

                                <View style={styles.slide3}>

                                    <Text style={{
                                        fontWeight: 'bold',
                                        textAlign: 'center', marginHorizontal: '8%',
                                    }}>
                                        Premium Members are More Likely to find their future Spouse. Here's Why...
                                        </Text>
                                </View>
                            </Swiper>
                        </View>



                        <View style={{
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: 'grey',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: hp('25%')
                        }}>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                }}>
                                <Text style={{
                                    textAlign: 'center',
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1
                                }}>
                                    Best Value
                 </Text>
                                <Text style={{ textAlign: 'center', color: 'grey', fontSize: 30, fontWeight: 'bold' }}>
                                    12
                 </Text>
                                <Text style={{

                                    // justifyContent: 'center',
                                    alignSelf: 'center', textAlign: 'center'
                                }}>
                                    months
                 </Text>

                                <Text style={{
                                    alignSelf: 'center',
                                    borderColor: 'grey',
                                    textAlign: 'center', borderWidth: 1,
                                    borderRadius: 20,
                                    width: wp('20%')
                                }}>
                                    70.99
                 </Text>
                                <Text style={{

                                    // justifyContent: 'center',
                                    alignSelf: 'center',
                                    textAlign: 'center'
                                }} >
                                    5.91/mon
        </Text>
                                <Text style={{
                                    color: '#fff', padding: 5,
                                    alignSelf: 'center', backgroundColor: 'red', borderWidth: 1
                                }}>
                                    Save 70%
                   </Text>

                            </TouchableOpacity>




                            <TouchableOpacity style={{
                                height: hp('20%'),

                                flex: 1,
                                // width: wp('25%'),
                                borderColor: '#175aeb',
                                borderWidth: 1,
                            }}>
                                <Text style={{
                                    color: '#fff',
                                    textAlign: 'center',
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                    backgroundColor: '#175aeb'
                                }}>
                                    Most Popular
                 </Text>
                                <Text style={{ textAlign: 'center', color: 'grey', fontSize: 30, fontWeight: 'bold' }}>
                                    12
                 </Text>

                                <Text style={{

                                    // justifyContent: 'center',
                                    alignSelf: 'center', textAlign: 'center'
                                }}>
                                    months
</Text>

                                <Text style={{
                                    alignSelf: 'center',
                                    borderColor: 'grey',
                                    textAlign: 'center', borderWidth: 1,
                                    borderRadius: 20,
                                    width: wp('20%')
                                }}>
                                    38.99
                 </Text>
                                <Text style={{

                                    // justifyContent: 'center',
                                    alignSelf: 'center',
                                    textAlign: 'center'
                                }} >
                                    5.91/mon
</Text>
                                <Text style={{
                                    color: '#fff', padding: 5,
                                    alignSelf: 'center', backgroundColor: 'red', borderWidth: 1
                                }}>
                                    Save 70%
</Text>

                            </TouchableOpacity>



                            <TouchableOpacity style={{

                                // backgroundColor: 'ora',
                                flex: 1
                                , marginHorizontal: '2%'
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1
                                }}>

                                </Text>
                                <Text style={{ textAlign: 'center', color: 'grey', fontSize: 30, fontWeight: 'bold' }}>
                                    1
                 </Text>
                                <Text style={{

                                    // justifyContent: 'center',
                                    alignSelf: 'center', textAlign: 'center'
                                }}>
                                    months
                 </Text>

                                <Text style={{
                                    alignSelf: 'center',
                                    borderColor: 'grey',
                                    textAlign: 'center', borderWidth: 1,
                                    borderRadius: 20, width: wp('20%')
                                }}>
                                    19.49
                 </Text>


                            </TouchableOpacity>







                        </View>

                        <TouchableHighlight
                            style={{
                                marginVertical: '4%',
                                width: wp('70%'),
                                height: 40,
                                justifyContent: 'center',
                                alignSelf: 'center',
                                borderWidth: 1, borderRadius: 20,
                                backgroundColor: '#175aeb',
                                borderColor: '#175aeb'
                            }}>
                            <Text style={{
                                textAlign: "center",
                                color: '#fff'
                            }}>CONTINUE</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={{
                                alignSelf: 'center',
                                marginBottom: 5
                            }}
                            // style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text
                                style={{ color: 'grey' }}
                            >NO THANKS</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

        </Content >
    )
}
export default Profile;

const styles = StyleSheet.create({
    modalMainView:
    {
        // marginTop: '15%',
        height: hp('75%'),
        width: '90%',
        alignSelf: 'center',
        marginTop: '10%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: '#fff',
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
})