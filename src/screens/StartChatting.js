
import React from "react";
import {
    Image, View, StyleSheet, Text, ImageBackground,
    ScrollView, TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Content, Item, ListItem, Header, Left, Right,
    Body, Thumbnail
} from 'native-base';
import {
    widthPercentageToDP as wp, heightPercentageToDP
        as hp
} from 'react-native-responsive-screen';

const StartChatting = ({ navigation }) => {
    return (
        <Content contentContainerStyle={{ flex: 1, backgroundColor: '#fff' }}>

            <Header style={{ backgroundColor: '#fff', elevation: 0 }}>
                <Left style={{ flex: 1 }} >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            width: '50%',
                            flex: 1,
                            marginLeft: '4%',
                            alignContent: 'center', justifyContent: 'center'
                        }}>
                        <Icon name="chevron-back-outline"
                            color="grey"
                            size={40} />
                    </TouchableOpacity>
                </Left>

                <Body style={{ flex: 1 }}>
                    <Thumbnail square
                        source={require('../assets/swipepageicons/header-logo.png')} style={{ alignSelf: 'center', flex: 1, resizeMode: 'contain' }} />
                </Body>


                <Right style={{ flex: 1 }} >
                    <TouchableOpacity onPress={() => alert('Clicked')}>
                        <Icon name="help-circle-outline"
                            color="grey"
                            size={30} />
                    </TouchableOpacity>

                </Right>


            </Header>

            <View style={{
                justifyContent: 'center',
                flex: 1,
                // alignSelf: 'center',
                alignContent: 'center'
            }}>
                <Text style={{
                    textAlign: 'center', fontSize: 20,
                    fontWeight: 'bold'
                }}> Start Chatting</Text>
                <Text style={{
                    marginVertical: 10,
                    textAlign: 'center',
                    fontSize: 15
                }}>Create your profile to keep Swiping  </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => alert('Pressed Create Profile')}
                    style={{
                        marginBottom: '10%',
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        width: wp('70%')
                        , backgroundColor: 'red',
                        height: 45
                    }}>
                    <Text style={{
                        color: '#fff', fontSize: 18,
                        textAlign: 'center',
                    }}>Create Profile</Text>
                </TouchableOpacity>
            </View>

        </Content>
    )
}
export default StartChatting;

