import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Content, Thumbnail, ScrollableTab, Tab, Tabs } from 'native-base';
import { GiftedChat, Bubble, } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../styles/colors'
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

        <Content contentContainerStyle={{ flex: 1 }}>




            <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>

                <TouchableOpacity
                    style={{ marginHorizontal: '4%' }}
                    onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={20} color="red" />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', width: '60%' }}>
                    <Thumbnail small source={ProfileUrl} />
                    <Text style={{ marginHorizontal: '3%', marginVertical: '2%' }}>

                        {JSON.stringify(ProfileName)}
                    </Text>


                </View>

                <View style={{
                    marginVertical: '2%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}>
                    <TouchableOpacity style={{ marginHorizontal: '4%' }}>
                        <Icon name="call" size={20} color="red" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginHorizontal: '4%' }}>
                        <Icon name="videocam" size={20} color="red" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Icon name="alert-circle" size={20} color="red" />
                    </TouchableOpacity>
                </View>


            </View>


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

                        // renderSend={(props) => (
                        //     <View style={{ flexDirection: 'row', alignItems: 'center', height: 60 }}>
                        //         <Icon icon="camera" iconColor="red" size={20}
                        //             style={{ marginHorizontal: 5 }}
                        //         // onPress={() => alert('Camera')} 
                        //         />

                        //         <View >
                        //             <Icon name="ios-send" size={24} color="#ffffff" />
                        //         </View>

                        //     </View>
                        // )}
                        // alwaysShowSend={true}
                        // isTyping={true}
                        placeholder="Message"
                        messages={messages}
                        onSend={messages => onSend(messages)}
                        user={{
                            _id: 1,
                        }}
                    />

                </Tab>
                <Tab heading={"Profile"} {...tabStyles}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, marginVertical: 10 }}>
                            Profile
                        </Text>


                    </View>
                </Tab>




            </Tabs>


        </Content>
    )
}
export default ChatDetails;