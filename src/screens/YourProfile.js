import React from 'react';
import {
    View, Text, Image, ImageBackground, StyleSheet,
    FlatList, ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    Content, Header, Body, Right, Left, Tabs, Tab, Thumbnail, ScrollableTab
} from 'native-base';
import { Colors } from '../styles/colors';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import EditProfile from './ProfileDetailsAddPhotosAndOthers';

const tabStyles = {
    activeTextStyle: { color: Colors.button, fontWeight: 'bold' },
    textStyle: { color: Colors.grey, fontWeight: 'bold' },
    activeTabStyle: { color: Colors.button, lineHeight: 12, backgroundColor: Colors.backgroundColor },
    style: { backgroundColor: Colors.backgroundColor },
    tabStyle: { backgroundColor: Colors.backgroundColor }
}

const YourProfile = ({ navigation }) => {
    return (

        <Content contentContainerStyle={{ flex: 1, backgroundColor: 'grey' }}>
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
                <Right style={{ flex: 1 }} >
                    <TouchableOpacity>
                        <Text style={{ color: Colors.button }}>Done</Text>
                    </TouchableOpacity>
                </Right>

            </Header>
            <Tabs
                locked
                tabBarUnderlineStyle={{
                    height: 2,
                    backgroundColor: Colors.button
                }}
                tabContainerStyle={{
                    backgroundColor: Colors.button,
                    elevation: 0
                }}>

                <Tab heading={"Preview"} {...tabStyles}>
                    <Content style={{ backgroundColor: '#F0F0F0', paddingHorizontal: 10 }}>
                        <View style={{ width: '100%', height: hp("80%"), borderRadius: 15, marginVertical: 5, elevation: 5 }}>
                            <Image source={require('../assets/loginpageslider/3.jpg')} style={{ width: '100%', height: hp("80%"), borderRadius: 15 }} />

                            <View style={{
                                opacity: 0.6,
                                alignSelf: 'center',
                                paddingHorizontal: 20,
                                borderRadius: 20,
                                backgroundColor: 'black',
                                marginTop: 10,
                                flexDirection: 'row', position: 'absolute'
                            }}>
                                <Icon name="help" size={20}

                                    color="red" />
                                <Text style={{
                                    color: '#fff',
                                    fontWeight: 'bold'
                                }}> Profile awaiting approval</Text>
                            </View>

                            <View style={{ position: 'absolute', left: 10, bottom: 10, width: '100%', alignItems: 'center' }}>
                                <Text style={{ fontSize: 28, color: '#fff', textAlign: 'center' }}>Sara, 28</Text>
                                <Text style={{ fontSize: 15, color: '#fff', textAlign: 'center' }}>Hyderabad</Text>
                                <View style={{
                                    marginVertical: 5, opacity: 0.6,
                                    alignSelf: 'center', flexDirection: 'row', borderWidth: 1,
                                    borderRadius: 20, backgroundColor: '#000',
                                    paddingHorizontal: 5
                                }}>
                                    <Icon name="help" size={20} color="red" />
                                    <Text style={{ color: '#fff' }}>Art & Design Employee</Text>
                                </View>

                                <View style={{
                                    marginVertical: 5, opacity: 0.6,
                                    alignSelf: 'center', flexDirection: 'row', borderWidth: 1,
                                    borderRadius: 20, backgroundColor: '#000', paddingHorizontal: 5
                                }}>
                                    <Icon name="help" size={20} color="red" />
                                    <Text style={{ color: '#fff', textAlign: 'center', paddingRight: 8 }}>American Pakistani</Text>
                                </View>

                                <View style={{
                                    marginVertical: 5, marginBottom: '10%', opacity: 0.6,
                                    alignSelf: 'center', flexDirection: 'row', borderWidth: 1,
                                    borderRadius: 20, backgroundColor: '#000', paddingHorizontal: 5
                                }}>
                                    <Icon name="help" size={20} color="red" />
                                    <Text style={{ color: '#fff', textAlign: 'center', paddingRight: 8 }}> Pakistan</Text>
                                </View>
                            </View>


                        </View>

                        <Text style={{
                            marginVertical: 10,
                            borderRadius: 20,
                            alignSelf: 'center',
                            width: wp('90%'),
                            color: 'grey',
                            padding: 20,
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            elevation: 5
                        }}>
                            young and energetic girl
                       </Text>

                        <Image source={require('../assets/loginpageslider/2.jpg')} style={{ width: '100%', height: hp("80%"), borderRadius: 15 }} />

                        <View style={{
                            width: wp('90%'),
                            alignSelf: 'center',
                            borderRadius: 20,
                            backgroundColor: '#fff',
                            elevation: 5,
                            marginVertical: 10
                        }}>
                            <Text style={{ textAlign: 'center', marginVertical: 10, fontWeight: 'bold' }}>ABOUT ME</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: 'center',
                                marginVertical: 10
                            }}>
                                <View style={{
                                    flexDirection: 'row', marginRight: '10%',
                                    borderRadius: 20, backgroundColor: '#f0f0f0'
                                    , paddingHorizontal: 5
                                }}>
                                    <Icon name="help" size={20} />
                                    <Text style={{ paddingRight: 5 }}>Single</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',

                                    borderRadius: 20,
                                    backgroundColor: '#f0f0f0',
                                    paddingHorizontal: 5
                                }}>
                                    <Icon name="help" size={20} />
                                    <Text style={{ paddingRight: 5 }}>Parent</Text>
                                </View>

                            </View>

                            <View style={{
                                flexDirection: 'row',
                                borderRadius: 20,
                                alignSelf: 'center',
                                backgroundColor: '#f0f0f0',
                                marginBottom: 10,
                                paddingHorizontal: 5
                            }}>
                                <Icon name="help" size={20} />
                                <Text style={{ marginRight: 10 }}>
                                    241 cm (7'11')
                                </Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                borderRadius: 20,
                                alignSelf: 'center',
                                backgroundColor: '#f0f0f0',
                                marginBottom: 10,
                                paddingHorizontal: 5
                            }}>
                                <Icon
                                    size={20}
                                    name="help" />
                                <Text>American Pakistani</Text>
                            </View>

                        </View>
                        <Image source={require('../assets/loginpageslider/1.jpg')} style={{ width: '100%', height: hp("80%"), borderRadius: 15, marginBottom: 5 }} />
                        <Text style={{
                            marginVertical: 10,
                            borderRadius: 20,
                            alignSelf: 'center',
                            width: wp('90%'),
                            color: 'grey',
                            padding: 20,
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            elevation: 5
                        }}>
                            loving and caring advance girl
                       </Text>
                        <Image source={require('../assets/loginpageslider/3.jpg')} style={{ width: '100%', height: hp("80%"), borderRadius: 15, marginBottom: 5 }} />
                        <View style={{
                            width: wp('90%'),
                            alignSelf: 'center',
                            borderRadius: 20,
                            backgroundColor: '#fff',
                            elevation: 5,
                            marginVertical: 10
                        }}>
                            <Text style={{ textAlign: 'center', marginVertical: 10, fontWeight: 'bold' }}>MY CAREER</Text>


                            <View style={{
                                flexDirection: 'row',
                                borderRadius: 20,
                                alignSelf: 'center',
                                backgroundColor: '#f0f0f0',
                                marginBottom: 10,
                                paddingHorizontal: 5
                            }}>
                                <Icon name="help" size={20} />
                                <Text style={{ marginRight: 10 }}>
                                    Bachelors
                                </Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                borderRadius: 20,
                                alignSelf: 'center',
                                backgroundColor: '#f0f0f0',
                                marginBottom: 10,
                                paddingHorizontal: 5
                            }}>
                                <Icon
                                    size={20}
                                    name="help" />
                                <Text>Art & Design eEmployee</Text>
                            </View>

                        </View>
                        <Image source={require('../assets/loginpageslider/2.jpg')} style={{ width: '100%', height: hp("80%"), borderRadius: 15, marginVertical: 5 }} />
                        <Text style={{
                            marginVertical: 10,
                            borderRadius: 20,
                            alignSelf: 'center',
                            width: wp('90%'),
                            color: 'grey',
                            padding: 20,
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            elevation: 5
                        }}>
                            Starting Forward
                       </Text>
                        <Image source={require('../assets/loginpageslider/1.jpg')} style={{ width: '100%', height: hp("80%"), borderRadius: 15, marginVertical: 5 }} />
                        <View style={{
                            width: wp('90%'),
                            alignSelf: 'center',
                            borderRadius: 20,
                            backgroundColor: '#fff',
                            elevation: 5,
                            marginVertical: 10
                        }}>
                            <Text style={{ textAlign: 'center', marginVertical: 10, fontWeight: 'bold' }}>MY RELIGION</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: 'center',
                                marginVertical: 10
                            }}>
                                <View style={{
                                    flexDirection: 'row', marginRight: '10%',
                                    borderRadius: 20, backgroundColor: '#f0f0f0'
                                    , paddingHorizontal: 5
                                }}>
                                    <Icon name="help" size={20} />
                                    <Text style={{ paddingRight: 5 }}>Sunni</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',

                                    borderRadius: 20,
                                    backgroundColor: '#f0f0f0',
                                    paddingHorizontal: 5
                                }}>
                                    <Icon name="help" size={20} />
                                    <Text style={{ paddingRight: 5 }}>Practicing</Text>
                                </View>

                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: 'center',
                                marginBottom: 10
                            }}>
                                <View style={{
                                    flexDirection: 'row', marginRight: '10%',
                                    borderRadius: 20, backgroundColor: '#f0f0f0'
                                    , paddingHorizontal: 5
                                }}>
                                    <Icon name="help" size={20} />
                                    <Text style={{ paddingRight: 5 }}>Always Prays</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',

                                    borderRadius: 20,
                                    backgroundColor: '#f0f0f0',
                                    paddingHorizontal: 5
                                }}>
                                    <Icon name="help" size={20} />
                                    <Text style={{ paddingRight: 5 }}>Hijab</Text>
                                </View>

                            </View>

                            <View style={{
                                flexDirection: 'row',
                                borderRadius: 20,
                                alignSelf: 'center',
                                backgroundColor: '#f0f0f0',
                                marginBottom: 10,
                                paddingHorizontal: 5
                            }}>
                                <Icon name="help" size={20} />
                                <Text style={{ marginRight: 10 }}>
                                    Only eats halal
                                </Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                alignSelf: 'center',
                                marginBottom: 10
                            }}>
                                <View style={{
                                    flexDirection: 'row', marginRight: '10%',
                                    borderRadius: 20, backgroundColor: '#f0f0f0'
                                    , paddingHorizontal: 5
                                }}>
                                    <Icon name="help" size={20} />
                                    <Text style={{ paddingRight: 5 }}>Drinks alcohol</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',

                                    borderRadius: 20,
                                    backgroundColor: '#f0f0f0',
                                    paddingHorizontal: 5
                                }}>
                                    <Icon name="help" size={20} />
                                    <Text style={{ paddingRight: 5 }}>Smokes</Text>
                                </View>

                            </View>

                        </View>
                        <Image source={require('../assets/loginpageslider/3.jpg')} style={{ width: '100%', height: hp("80%"), borderRadius: 15, marginVertical: 5 }} />
                        <Text style={{
                            marginVertical: 10,
                            borderRadius: 20,
                            alignSelf: 'center',
                            width: wp('90%'),
                            color: 'grey',
                            padding: 20,
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            elevation: 5
                        }}>
                            Papa's ladly beti little princes
                       </Text>
                        <Image source={require('../assets/loginpageslider/2.jpg')} style={{ width: '100%', height: hp("80%"), borderRadius: 15, marginVertical: 5 }} />
                        <View style={{
                            width: wp('90%'),
                            alignSelf: 'center',
                            borderRadius: 20,
                            backgroundColor: '#fff',
                            elevation: 5,
                            marginVertical: 10
                        }}>
                            <Text style={{ textAlign: 'center', marginVertical: 10, fontWeight: 'bold' }}>MARRIAGE GOALS</Text>


                            <View style={{
                                flexDirection: 'row',
                                borderRadius: 20,
                                alignSelf: 'center',
                                backgroundColor: '#f0f0f0',
                                marginBottom: 10,
                                paddingHorizontal: 5
                            }}>
                                <Icon name="help" size={20} />
                                <Text style={{ marginRight: 10 }}>
                                    Seeking marriage with in 1-2 years
                                </Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                borderRadius: 20,
                                alignSelf: 'center',
                                backgroundColor: '#f0f0f0',
                                marginBottom: 10,
                                paddingHorizontal: 5
                            }}>
                                <Icon
                                    size={20}
                                    name="help" />
                                <Text>will move abroad</Text>
                            </View>

                        </View>
                    </Content>
                </Tab>
                <Tab heading={"Edit"} {...tabStyles}>
                    <EditProfile navigation={navigation} />
                </Tab>
            </Tabs>
        </Content >

    )
}
export default YourProfile;