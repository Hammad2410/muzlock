import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Content, Header, Left, Body, Right, Thumbnail, Icon, Container, Tabs, Tab } from 'native-base';

const chatList = ({ navigation }) => {
    const [users, setUsers] = useState([
        {
            name: "Emily",
            url: require('../../../assets/loginpageslider/1.jpg')
        },
        {
            name: "Chloe",
            url: require('../../../assets/loginpageslider/2.jpg')
        },
        {
            name: "Sania",
            url: require('../../../assets/loginpageslider/3.jpg')
        },
        {
            name: "Emily",
            url: require('../../../assets/loginpageslider/1.jpg')
        },

    ])
    const [chat, setChat] = useState([
        {
            name: "Emily",
            url: require('../../../assets/loginpageslider/1.jpg'),
            location: 'Pakistan',
            occupation: 'engineer'
        },
        {
            name: "Chloe",
            url: require('../../../assets/loginpageslider/2.jpg'),
            location: 'Pakistan',
            occupation: 'engineer'
        },
        {
            name: "Sania",
            url: require('../../../assets/loginpageslider/3.jpg'),
            location: 'Pakistan',
            occupation: 'engineer'
        },
        {
            name: "Emily",
            url: require('../../../assets/loginpageslider/1.jpg'),
            location: 'Pakistan',
            occupation: 'engineer'
        },

    ])

    return (
        <Container style={{ flex: 1 }} >
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2%'
            }}>

                <FlatList
                    showsHorizontalScrollIndicator={false}
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
            <View style={{ flexDirection: 'row', flex: 1, paddingHorizontal: 8 }}>
                <FlatList
                    data={chat}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ChatDetails', { ProfileUrl: item.url, ProfileName: item.name, })}
                            style={{
                                width: '100%',
                                marginHorizontal: 5,
                                marginVertical: '5%',
                                // margin: 10,
                                // justifyContent: 'center',
                                flexDirection: 'row', flex: 1,
                                // width: '100%'
                            }}>
                            <View>
                                <Thumbnail

                                    large source={item.url} />
                            </View>
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

                        </TouchableOpacity>
                    )
                    }
                />
            </View>
        </Container>
    )

}

export default chatList