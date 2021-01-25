import React from 'react';
import {
    View, Text, Image, ImageBackground, StyleSheet,
    FlatList, ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    Content, Header, Body, Right, Left, Tabs, Tab,
    ScrollableTab
} from 'native-base';
import { Colors } from '../styles/colors';


import Icon from 'react-native-vector-icons/Ionicons';
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
            <Header hasTabs style={{
                backgroundColor: '#fff',
                elevation: 0
            }}>
                <Left style={{ flex: 1 }} />
                <Body style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold' }}>Your Profile</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => alert('Done')}>
                        <Text style={{ color: '#fc03df', fontWeight: 'bold' }}>
                            Done
                        </Text>
                    </TouchableOpacity>
                </Right>
            </Header>


            <Tabs
                tabBarUnderlineStyle={{
                    height: 2,
                    backgroundColor: Colors.button
                }}
                tabContainerStyle={{
                    backgroundColor: Colors.button,
                    elevation: 0
                }}>

                <Tab heading={"Preview"} {...tabStyles}>

                    <View style={{ backgroundColor: 'grey' }}>

                        <View style={{
                            marginTop: 10,

                            // width: wp('90%'),  borderRadius: 20,
                            // height: '80%',
                            alignSelf: 'center'
                        }}>

                            <ImageBackground
                                resizeMode="cover"

                                style={{
                                    opacity: 0.2,
                                    width: wp('90%'),
                                    height: hp('40%')
                                    , borderRadius: 25
                                }}
                                source={require('../assets/intro/loginscreenbackground.jpg')} />

                            <View style={{
                                // alignItems: 'center',
                                alignSelf: 'center',
                                width: '55%',
                                borderRadius: 20,
                                backgroundColor: 'black',
                                marginTop: 10,
                                flexDirection: 'row', position: 'absolute'
                            }}>
                                <Icon name="help" size={20}
                                    style={{ marginLeft: 20 }}
                                    color="red" />
                                <Text style={{
                                    color: '#fff',
                                    fontWeight: 'bold'
                                }}> Profile awaiting approval</Text>
                            </View>

                            <View style={{
                                position: 'relative', justifyContent: 'center',
                                alignSelf: 'center'
                            }}>
                                <Text style={{ fontSize: 28, color: '#fff', textAlign: 'center' }}>Sara, 28</Text>
                                <Text style={{ fontSize: 15, color: '#fff', textAlign: 'center' }}>Hyderabad</Text>
                                <View style={{
                                    marginVertical: 5,
                                    alignSelf: 'center', flexDirection: 'row', width: wp('45%'), borderWidth: 1,
                                    borderRadius: 20, backgroundColor: 'grey'
                                }}>
                                    <Icon name="help" size={20} color="red" />
                                    <Text style={{ color: '#fff' }}>Art & Design Employee</Text>
                                </View>

                                <View style={{
                                    marginVertical: 5,
                                    alignSelf: 'center', flexDirection: 'row', borderWidth: 1,
                                    borderRadius: 20, backgroundColor: 'grey'
                                }}>
                                    <Icon name="help" size={20} color="red" />
                                    <Text style={{ color: '#fff', textAlign: 'center', paddingRight: 8 }}>American Pakistani</Text>
                                </View>

                                <View style={{
                                    marginVertical: 5, marginBottom: '10%',
                                    alignSelf: 'center', flexDirection: 'row', borderWidth: 1,
                                    borderRadius: 20, backgroundColor: 'grey'
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
                            backgroundColor: '#fff'
                        }}>
                            young and energetic girl
                       </Text>

                        <View style={{
                            width: wp('90%'),
                            alignSelf: 'center',
                            borderRadius: 20,
                            backgroundColor: '#fff'
                        }}>
                            <Text style={{ textAlign: 'center', marginVertical: 10 }}>ABOUT ME</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: 'center'
                            }}>
                                <View style={{
                                    flexDirection: 'row', marginRight: '10%',
                                    borderWidth: 1, borderRadius: 20
                                }}>
                                    <Icon name="help" size={20} />
                                    <Text style={{ paddingRight: 5 }}>Single</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    borderRadius: 20,

                                }}>
                                    <Icon name="help" size={20} />
                                    <Text style={{ paddingRight: 5 }}>Parent</Text>
                                </View>

                            </View>

                            <View style={{
                                flexDirection: 'row',
                                borderRadius: 20, borderWidth: 1,
                                alignSelf: 'center'
                            }}>
                                <Icon name="help" size={20} />
                                <Text style={{ marginRight: 10 }}>
                                    241 cm (7'11')
                 </Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Icon
                                    size={20}
                                    name="help" />
                                <Text>American Pakistani</Text>
                            </View>
                        </View>



                    </View>


                </Tab>
                <Tab heading={"Edit"} {...tabStyles}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 24, marginVertical: 10
                        }}>
                            Liked You
                        </Text>


                    </View>
                </Tab>




            </Tabs>


























        </Content >

    )
}
export default YourProfile;