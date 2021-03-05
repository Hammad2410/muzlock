import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from
    'react-native-responsive-screen';
import { Content, Header, Right, Left, Body, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const Account = ({ navigation }) => {
    return (
        <Content>
            <Header style={{ backgroundColor: '#fff' }}>
                <Left >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back-outline" size={30} />
                    </TouchableOpacity>
                </Left>
                <Body style={{ flex: 1, }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Account</Text>
                </Body>

                <Right style={{ flex: 1 }} />

            </Header>

            <View style={{
                height: hp('9%'), width: wp('100%'),
                backgroundColor: '#fff', flexDirection: 'row',
                borderBottomWidth: 1, borderBottomColor: 'grey'
            }}>
                <Text style={{
                    alignContent: 'center',
                    flex: 1,
                    alignSelf: 'center',
                    fontSize: 20, color: 'grey', paddingHorizontal: '4%'
                }}>Go Premium</Text>
                <TouchableOpacity style={{ marginRight: '4%', alignSelf: 'center' }}>
                    <Icon name="chevron-forward-outline" size={30} color="grey" />
                </TouchableOpacity>
            </View>
            <View style={{
                height: hp('9%'), width: wp('100%'),
                backgroundColor: '#fff',
                borderBottomWidth: 1, borderBottomColor: 'grey'
            }}>
                <View style={{

                    flexDirection: 'row',

                }}>
                    <Text style={{
                        alignContent: 'center',
                        flex: 1,
                        alignSelf: 'center',
                        fontSize: 20, color: 'grey', paddingHorizontal: '4%'
                    }}>Remaining Swipes</Text>
                    <TouchableOpacity style={{ marginRight: '4%', alignSelf: 'center' }}>
                        <Icon name="chevron-forward-outline" size={30} color="grey" />
                    </TouchableOpacity>

                </View>

                <Text style={{ paddingHorizontal: '4%', color: 'grey' }}>0/0</Text>
            </View>









            <View style={{
                height: hp('9%'), width: wp('100%'),
                backgroundColor: '#fff', flexDirection: 'row',
                borderBottomWidth: 1, borderBottomColor: 'grey'
            }}>
                <Text style={{
                    alignContent: 'center',
                    flex: 1,
                    alignSelf: 'center',
                    fontSize: 20, color: 'grey', paddingHorizontal: '4%'
                }}>Remaining Instant Chats</Text>
                <TouchableOpacity style={{ marginRight: '4%', alignSelf: 'center' }}>
                    <Icon name="chevron-forward-outline" size={30} color="grey" />
                </TouchableOpacity>
            </View>

            <View style={{
                height: hp('9%'), width: wp('100%'),
                backgroundColor: '#fff',
                borderBottomWidth: 1, borderBottomColor: 'grey'
            }}>
                <View style={{

                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        alignContent: 'center',
                        flex: 1,

                        alignSelf: 'center',
                        fontSize: 20, color: 'grey', paddingHorizontal: '4%'
                    }}>Reset Swipe History</Text>
                    <TouchableOpacity style={{ marginRight: '4%', alignSelf: 'center' }}>
                        <Icon name="chevron-forward-outline" size={30} color="grey" />
                    </TouchableOpacity>

                </View>

                <Text style={{ paddingHorizontal: '4%', color: 'grey' }}>Get a second chance</Text>
            </View>


            <View style={{
                flexDirection: 'row', height: hp('9%'), width: wp('100%'),
                backgroundColor: '#fff',
                alignItems: 'center',
                borderBottomWidth: 1, borderBottomColor: 'grey'
            }}>

                <Icon
                    style={{ paddingHorizontal: '5%' }}
                    name="alert-circle-outline" size={30} color="red" />
                <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
                    <Text style={{ fontSize: 18, color: 'grey' }}>Deactivate Account</Text>
                </TouchableOpacity>
            </View>



        </Content>
    )
}
export default Account;