import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, Left, Right, Body, Thumbnail, Button, Title, Container, DeckSwiper } from 'native-base';
import { Colors } from '../../styles/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { SwipeListView } from 'react-native-swipe-list-view';

const homeScreen = ({ navigation }) => {
    const [showLike, setShowLike] = useState(false)
    const [showReject, setShowReject] = useState(false)

    const like = () => {
        setShowLike(true)

        setTimeout(() => { setShowLike(false) }, 1000)
    }

    const reject = () => {
        setShowReject(true)

        setTimeout(() => { setShowReject(false) }, 1000)
    }

    const navigateToMatch = () => {
        navigation.navigate('Matches')
    }

    const navigateToFilter = () => {
        navigation.navigate('Filter')
    }

    return (
        <Container style={{ flex: 1 }}>
            <Content>
                <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
                    <Left style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={navigateToMatch}
                        >
                            <Thumbnail small
                                square source={require('../../assets/swipepageicons/heart.png')} />
                        </TouchableOpacity>
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Thumbnail small square source={require('../../assets/swipepageicons/header-logo.png')} style={{ alignSelf: 'center', flex: 1, resizeMode: 'contain' }} />
                    </Body>

                    <Right style={{ flex: 1 }} >
                        <TouchableOpacity onPress={navigateToFilter} >
                            <Thumbnail small
                                square source={require('../../assets/swipepageicons/filter.png')} />
                        </TouchableOpacity>
                    </Right>

                </Header>
                {/* <FlatList
                style={{ paddingHorizontal: 15 }}
                data={[1, 2]}
                renderItem={({ items, index }) => {
                    return ( */}
                <Content contentContainerStyle={{ flex: 1 }} style={{ width: '100%', height: hp("170%"), marginVertical: 5, paddingHorizontal: 15 }}>
                    <DeckSwiper
                        dataSource={[1, 2, 3]}
                        renderItem={item1 =>
                            <>
                                <View style={{ width: '100%', height: hp("80%"), borderRadius: 15, marginVertical: 15, elevation: 5 }}>
                                    <Image source={require('../../assets/loginpageslider/3.jpg')} style={{ width: '100%', borderRadius: 15, height: hp("80%") }} />

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
                                <View style={{ width: '100%', height: hp("80%"), borderRadius: 15, marginVertical: 5, elevation: 5 }}>
                                    <Image source={require('../../assets/loginpageslider/3.jpg')} style={{ width: '100%', height: hp("80%"), borderRadius: 15 }} />

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
                            </>
                        }
                        onSwipeRight={reject}
                        onSwipeLeft={like}
                    />

                </Content>
                {/* <View style={{ width: '100%', height: hp("80%"), marginVertical: 50, paddingHorizontal: 15 }}>
                    <DeckSwiper
                        dataSource={[1, 2, 3]}
                        renderItem={item1 =>
                            <View style={{ width: '100%', height: hp("80%"), borderRadius: 15, marginVertical: 5, elevation: 5 }}>
                                <Image source={require('../../assets/loginpageslider/3.jpg')} style={{ width: '100%', height: hp("80%"), borderRadius: 15 }} />

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

                        }
                        onSwipeRight={reject}
                        onSwipeLeft={like}
                    /> */}

                {/* </View> */}
                {/* )
                }}
                keyExtractor={(item, index) => index.toString()}

            /> */}

            </Content>
            {
                showLike && <View style={{ position: "absolute", top: '50%', right: 25, }}>
                    {/* <Thumbnail source={require('../../assets/settingpage/settingicon/setting.png')} /> */}
                    <Icon name={"checkmark-circle-outline"} size={50} style={{ color: 'green', backgroundColor: "#FFF", borderRadius: 50, textAlign: 'center', alignItems: "center", justifyContent: 'center', padding: 1, alignSelf: 'center' }} />
                </View>
            }
            {
                showReject && <View style={{ position: "absolute", top: '50%', left: 25, }}>
                    {/* <Thumbnail source={require('../../assets/settingpage/settingicon/setting.png')} /> */}
                    <Icon name={"close-circle-outline"} size={50} style={{ color: 'red', backgroundColor: "#FFF", borderRadius: 50, textAlign: 'center', alignItems: "center", justifyContent: 'center', padding: 1, alignSelf: 'center' }} />
                </View>
            }
        </Container>
    )
}

export default homeScreen;