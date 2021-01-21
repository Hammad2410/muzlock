import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, Left, Right, Body, Thumbnail, Button, Title, Container } from 'native-base';
import { Colors } from '../../styles/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable'

const homeScreen = ({ navigation }) => {
    return (
        <Container style={{ flex: 1 }}>
            <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
                <Left style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Matches')} >
                        <Thumbnail small
                            square source={require('../../assets/swipepageicons/heart.png')} />
                    </TouchableOpacity>
                </Left>
                <Body style={{ flex: 1 }}>
                    <Thumbnail small square source={require('../../assets/swipepageicons/header-logo.png')} style={{ alignSelf: 'center', flex: 1, resizeMode: 'contain' }} />
                </Body>


                <Right style={{ flex: 1 }} >
                    <TouchableOpacity onPress={() => navigation.navigate('Filter')} >
                        <Thumbnail small
                            square source={require('../../assets/swipepageicons/filter.png')} />
                    </TouchableOpacity>
                </Right>

            </Header>
            <FlatList
                style={{ paddingHorizontal: 15, }}
                data={[1, 2]}
                renderItem={({ items, index }) => {
                    return (
                        // <Swipeable
                        //     renderRightActions={(progress, dragX) => <View />}
                        // >
                        <View style={{ width: '100%', height: 450, borderRadius: 15, marginVertical: 5, backgroundColor: 'blue', elevation: 5 }}>
                            <Image source={require('../../assets/loginpageslider/3.jpg')} style={{ width: '100%', height: 450, borderRadius: 15 }} />

                            <View style={{ position: 'absolute', left: 10, bottom: 10, width: '100%' }}>
                                <View style={{ alignItems: 'flex-end', marginRight: 15 }}>
                                    <Thumbnail small source={require('../../assets/swipepageicons/star.png')} />
                                    <Thumbnail small source={require('../../assets/swipepageicons/reverse.png')} />
                                    <Thumbnail small source={require('../../assets/swipepageicons/chat.png')} />
                                </View>
                                <Text style={{ fontWeight: 'bold', fontSize: 24, color: Colors.white }}>Hammad, 24</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: Colors.badge, padding: 5, margin: 5, borderRadius: 15, paddingHorizontal: 15 }}>
                                        <Text style={{ color: Colors.white }}>Location</Text>
                                    </View>
                                    <View style={{ backgroundColor: Colors.badge, padding: 5, margin: 5, borderRadius: 15, paddingHorizontal: 15 }}>
                                        <Text style={{ color: Colors.white }}>Engineer</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        // </Swipeable>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </Container>
    )
}

export default homeScreen;