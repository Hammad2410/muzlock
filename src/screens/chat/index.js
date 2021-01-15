import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Content, Header, Left, Body, Right, Thumbnail, Icon } from 'native-base';

const mainChat = ({ navigation }) => {
    const [users, setUsers] = useState([
        {
            name: "Emily",
            url: require('../../assets/loginpageslider/1.jpg')
        },
        {
            name: "Chloe",
            url: require('../../assets/loginpageslider/2.jpg')
        },
        {
            name: "Sania",
            url: require('../../assets/loginpageslider/3.jpg')
        },
        {
            name: "Emily",
            url: require('../../assets/loginpageslider/1.jpg')
        },

    ])
    const [chat, setChat] = useState([
        {
            name: "Emily",
            url: require('../../assets/loginpageslider/1.jpg'),
            location: 'Pakistan',
            occupation: 'engineer'
        },
        {
            name: "Chloe",
            url: require('../../assets/loginpageslider/2.jpg'),
            location: 'Pakistan',
            occupation: 'engineer'
        },
        {
            name: "Sania",
            url: require('../../assets/loginpageslider/3.jpg'),
            location: 'Pakistan',
            occupation: 'engineer'
        },
        {
            name: "Emily",
            url: require('../../assets/loginpageslider/1.jpg'),
            location: 'Pakistan',
            occupation: 'engineer'
        },

    ])


    return (
        <Content contentContainerStyle={{ flex: 1 }}>
            <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
                <Left style={{ flex: 1 }} />
                <Body style={{ flex: 1 }}>
                    <Thumbnail square source={require('../../assets/swipepageicons/header-logo.png')} style={{ alignSelf: 'center', flex: 1, resizeMode: 'contain' }} />
                </Body>
                <Right style={{ flex: 1 }} >
                    <TouchableOpacity  >
                        {/* <Thumbnail square source={require('../../assets/swipepageicons/filter.png')} /> */}
                        <Icon name={'help-outline'} />
                    </TouchableOpacity>
                </Right>

            </Header>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2%'
            }}>

                <FlatList

                    data={users}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    renderItem={({ item, index }) => (
                        <View style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Thumbnail large source={item.url} />
                            <Text style={{
                                fontWeight: 'bold',
                                margin: 5
                            }} >{item.name}</Text>
                        </View>
                    )
                    }
                />

            </View>

            <Text style={{
                fontWeight: 'bold', alignSelf: 'center',
                fontSize: 24, marginVertical: 10
            }}>Yours Chats</Text>
            <View style={{ flexDirection: 'row', flex: 1, }}>
                <FlatList
                    data={chat}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={{
                            width: '100%',
                            marginVertical: '5%',
                            // margin: 10,
                            // justifyContent: 'center',
                            flexDirection: 'row', flex: 1,
                            // width: '100%'
                        }}>
                            <Thumbnail

                                large source={item.url} />
                            <View
                                style={{
                                    marginLeft: '4%',
                                    flex: 1

                                    // justifyContent: 'flex-end'
                                }} >
                                <Text style={{
                                    fontWeight: 'bold',
                                    margin: 2.5
                                }}>{item.name}</Text>
                                <Text
                                    style={{ margin: 2.5 }}>{item.occupation}</Text>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        margin: 2.5
                                    }}>Hi</Text>
                            </View>

                            <View style={{ marginRight: '2%' }}>
                                <Text style={{ color: 'red' }}>Yesterday</Text>
                                <Text style={{
                                    marginVertical: '10%',
                                    textAlign: 'center', padding: 5,
                                    color: '#fff',
                                    backgroundColor: 'red', borderColor: 'red',
                                    borderRadius: 20, height: 30,
                                    borderWidth: 1
                                }}>Say Hi</Text>
                            </View>

                        </View>
                    )
                    }
                />
            </View>
        </Content >
    )
}
export default mainChat;

const styles = StyleSheet.create({
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderBottomWidth: 1,
        borderColor: '#fca503',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#fca503',
    },
});