import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Content, Header, Left, Body, Right, Thumbnail, Icon, Container, Tabs, Tab, Item } from 'native-base';
import { Colors } from '../../../styles/colors';
const status = ({ navigation }) => {
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
            <Content>
                <View style={{

                    justifyContent: 'center',
                    marginTop: '2%'
                }}>
                    <TouchableOpacity style={{ flexDirection: 'row', margin: 10, }}>
                        <View style={{ borderWidth: 2, borderColor: Colors.button, padding: 2, borderRadius: 50 }}>
                            <Thumbnail source={require('../../../assets/loginpageslider/1.jpg')} />
                        </View>
                        <View>
                            <Text style={{
                                fontWeight: 'bold',
                                marginVertical: 5,
                                marginHorizontal: 15
                            }} >My status</Text>
                            <Text style={{
                                marginHorizontal: 15
                            }} >Tap to add status update</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ backgroundColor: '#F0F0F0' }}>
                        <Text style={{
                            margin: 15
                        }} >Recent updates</Text>
                    </View>
                    <FlatList
                        data={users}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={{ flexDirection: 'row', margin: 10, }}>
                                <View style={{ borderWidth: 2, borderColor: Colors.button, padding: 2, borderRadius: 50 }}>
                                    <Thumbnail source={item.url} />
                                </View>
                                <View>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        marginVertical: 5,
                                        marginHorizontal: 15
                                    }} >{item.name}</Text>
                                    <Text style={{
                                        marginHorizontal: 15
                                    }} >10 minutes ago</Text>
                                </View>
                            </TouchableOpacity>
                        )
                        }
                    />
                    <View style={{ backgroundColor: '#F0F0F0' }}>
                        <Text style={{
                            margin: 15
                        }} >Viewed updates</Text>
                    </View>
                    <FlatList
                        data={users}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={{ flexDirection: 'row', margin: 10, }}>
                                <View style={{ borderWidth: 2, borderColor: Colors.grey, padding: 2, borderRadius: 50 }}>
                                    <Thumbnail source={item.url} />
                                </View>
                                <View>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        marginVertical: 5,
                                        marginHorizontal: 15
                                    }} >{item.name}</Text>
                                    <Text style={{
                                        marginHorizontal: 15
                                    }} >10 minutes ago</Text>
                                </View>
                            </TouchableOpacity>
                        )
                        }
                    />
                </View>
            </Content>
        </Container>
    )

}

export default status