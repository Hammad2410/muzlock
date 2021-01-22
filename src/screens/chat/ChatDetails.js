import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Content, Thumbnail, ScrollableTab, Tab, Tabs, Header, Left, Right, Body, Container } from 'native-base';
import { GiftedChat, Bubble, InputToolbar, Composer } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../styles/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';

const tabStyles = {
    activeTextStyle: { color: Colors.button, fontWeight: 'bold' },
    textStyle: { color: Colors.grey, fontWeight: 'bold' },
    activeTabStyle: { color: Colors.button, lineHeight: 12, backgroundColor: Colors.backgroundColor },
    style: { backgroundColor: Colors.backgroundColor },
    tabStyle: { backgroundColor: Colors.backgroundColor }
}
const ChatDetails = ({ navigation, route }) => {
    const [messages, setMessages] = useState([]);
    const { ProfileUrl, ProfileName } = route.params;
    console.log(JSON.stringify(ProfileUrl) + " " + JSON.stringify(ProfileName));
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: { ProfileName },
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (

        <Container style={{ flex: 1 }}>

            <Header style={{ elevation: 0, backgroundColor: '#fff' }}>
                <Left>

                    <TouchableOpacity
                        // style={{ marginHorizontal: '4%' }}
                        onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back-outline" size={20} color="red" />
                    </TouchableOpacity>
                </Left>
                <Body style={{ flex: 1, flexDirection: 'row', marginLeft: '-10%' }}>
                    <Thumbnail small source={ProfileUrl} />
                    <Text style={{ marginHorizontal: '3%', marginVertical: '2%' }}>
                        {ProfileName}
                    </Text>
                </Body>
                <Right>
                    <TouchableOpacity style={{ marginHorizontal: '4%' }}>
                        <Icon name="call" size={20} color="red" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginHorizontal: '4%' }}>
                        <Icon name="videocam" size={20} color="red" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Icon name="alert-circle" size={20} color="red" />
                    </TouchableOpacity>
                </Right>
            </Header>





            <Tabs

                tabBarUnderlineStyle={{
                    height: 2,
                    backgroundColor: Colors.button
                }}
                tabContainerStyle={{
                    backgroundColor:
                        Colors.button, elevation: 0
                }}>
                <Tab heading={"Chats "} {...tabStyles}>

                    <GiftedChat
                        inverted={false}
                        placeholder="Message"
                        messages={messages}
                        onSend={messages => onSend(messages)}
                        user={{
                            _id: 1,
                        }}

                        renderBubble={props => {
                            return (
                                <Bubble
                                    {...props}

                                    textStyle={{
                                        right: {
                                            color: 'white',
                                            fontFamily: "CerebriSans-Book"
                                        },
                                        left: {
                                            color: '#24204F',
                                            fontFamily: "CerebriSans-Book"
                                        },
                                    }}
                                    wrapperStyle={{
                                        left: {
                                            backgroundColor: '#E6F5F3',
                                        },
                                        right: {
                                            backgroundColor: "red",
                                        },
                                    }}
                                />
                            );
                        }}

                        renderComposer={(props) => {
                            const { text, messageIdGenerator, user, onSend } = props

                            return (
                                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                    <View style={{ borderWidth: 1, flex: 1, margin: 2, borderRadius: 25, flexDirection: 'row' }}>
                                        <Composer {...props} />
                                        <Icon name="attach-outline" size={30} color="grey" style={{ alignSelf: "center", marginRight: 5 }} />
                                    </View>
                                    {
                                        text == '' ? (<>
                                            <TouchableOpacity style={{ marginHorizontal: '4%' }}>
                                                <Icon name="camera" size={30} color="red" />
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{ marginHorizontal: 0 }}>
                                                <Icon name="mic-outline" size={30} color="red" />
                                            </TouchableOpacity>
                                        </>
                                        ) : (
                                                <TouchableOpacity style={{ marginHorizontal: '4%' }} onPress={() => props.onSend({ text: text.trim(), user: user, _id: messageIdGenerator() }, true)} >
                                                    <Icon name="paper-plane-outline" size={30} color="red" />
                                                </TouchableOpacity>
                                            )
                                    }
                                </View>
                            );
                        }}

                    />

                </Tab>
                <Tab heading={"Profile"} {...tabStyles}>
                    <View style={{ alignItems: 'center', paddingHorizontal: 15, marginVertical: 15 }}>
                        <View style={{ width: '100%', height: hp("80%"), borderRadius: 15, marginVertical: 5, elevation: 5 }}>
                            <Image source={require('../../assets/loginpageslider/3.jpg')} style={{ width: '100%', height: hp("80%"), borderRadius: 15 }} />

                            <View style={{ position: 'absolute', left: 10, bottom: 10, width: '100%', alignItems: 'center' }}>

                                <Text style={{ fontWeight: 'bold', fontSize: 24, color: Colors.white, marginVertical: 15 }}>{ProfileName}, 24</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: Colors.white, marginVertical: 15 }}>662 miles away, Woodland</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: Colors.badge, padding: 5, margin: 5, borderRadius: 15, paddingHorizontal: 15 }}>
                                        <Text style={{ color: Colors.white }}>Location</Text>
                                    </View>
                                    <View style={{ backgroundColor: Colors.badge, padding: 5, margin: 5, borderRadius: 15, paddingHorizontal: 15 }}>
                                        <Text style={{ color: Colors.white }}>Engineer</Text>
                                    </View>
                                    <View style={{ backgroundColor: Colors.badge, padding: 5, margin: 5, borderRadius: 15, paddingHorizontal: 15 }}>
                                        <Text style={{ color: Colors.white }}>Engineer</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>
                </Tab>




            </Tabs>


        </Container>
    )
}
export default ChatDetails;