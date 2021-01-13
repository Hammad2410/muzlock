import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, Left, Right, Body, Thumbnail, Button, Title, Tab, Tabs, ScrollableTab } from 'native-base';
import { Colors } from '../../styles/colors';
import GradientText from '../../components/GradientText';
import styles from './styles';

const tabStyles = {
    activeTextStyle: { color: Colors.button, fontWeight: 'bold' },
    textStyle: { color: Colors.grey, fontWeight: 'bold' },
    activeTabStyle: { color: Colors.button, lineHeight: 12, backgroundColor: Colors.backgroundColor },
    style: { backgroundColor: Colors.backgroundColor },
    tabStyle: { backgroundColor: Colors.backgroundColor }
}

const exploreScreen = ({ navigation }) => {
    return (
        <Content contentContainerStyle={{ flex: 1, backgroundColor: Colors.backgroundColor }}>
            <Header hasTabs style={{ backgroundColor: 'transparent', elevation: 0 }}>
                <Left style={{ flex: 1 }} />
                <Body style={{ flex: 1 }}>
                    <Thumbnail square source={require('../../assets/swipepageicons/header-logo.png')} style={{ alignSelf: 'center', flex: 1, resizeMode: 'contain' }} />
                </Body>
                <Right style={{ flex: 1 }} />
            </Header>
            <View style={{ marginVertical: 10 }}>
                <GradientText text={"EXPLORE"} />
            </View>

            <Tabs renderTabBar={() => <ScrollableTab />} tabBarUnderlineStyle={{ height: 2, backgroundColor: Colors.button }} tabContainerStyle={{ backgroundColor: Colors.button, elevation: 0 }}>
                <Tab heading={"VISITED YOU"} {...tabStyles}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, marginVertical: 10 }}>
                            Visited You
                        </Text>
                        <Text style={{ marginVertical: 10, textAlign: 'center' }}>
                            These people have viewed your profile recently
                        </Text>
                        <Button
                            rounded
                            block
                            style={styles.IntroBtn}>
                            <Text style={styles.IntroText}>Within your location and age filter</Text>
                        </Button>
                    </View>
                </Tab>
                <Tab heading={"LIKED YOU"} {...tabStyles}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, marginVertical: 10 }}>
                            Liked You
                        </Text>
                        <Text style={{ marginVertical: 10, textAlign: 'center' }}>
                            These people would like to chat you. Like them back to start a conversation.
                        </Text>
                        <Button
                            rounded
                            block
                            style={styles.IntroBtn}>
                            <Text style={styles.IntroText}>Within your location and age filter</Text>
                        </Button>
                    </View>
                </Tab>
                <Tab heading={"LOCKED"} {...tabStyles}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, marginVertical: 10 }}>
                            Locked
                        </Text>
                        <Text style={{ marginVertical: 10, textAlign: 'center' }}>
                            People you have favourited appear here for quick access. Don't worry, they won't know you favourited them
                        </Text>
                        <Button
                            rounded
                            block
                            style={styles.IntroBtn}>
                            <Text style={styles.IntroText}>Start Discovering</Text>
                        </Button>
                    </View>
                </Tab>
                <Tab heading={"PASSED"} {...tabStyles}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, marginVertical: 10 }}>
                            Passed
                        </Text>
                        <Text style={{ marginVertical: 10, textAlign: 'center' }}>
                            People who have passed appear here. Upgrade to muzlock premium to reset your swipes
                        </Text>
                        <Button
                            rounded
                            block
                            style={styles.IntroBtn}>
                            <Text style={styles.IntroText}>Reset Swipes</Text>
                        </Button>
                    </View>
                </Tab>
                <Tab heading={"LIKED"} {...tabStyles}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, marginVertical: 10 }}>
                            Liked
                        </Text>
                        <Text style={{ marginVertical: 10, textAlign: 'center' }}>
                            People you have Liked appear here
                        </Text>
                        <Button
                            rounded
                            block
                            style={styles.IntroBtn}>
                            <Text style={styles.IntroText}>Within your location and age filter</Text>
                        </Button>
                    </View>
                </Tab>
                <Tab heading={"BLOCKED"} {...tabStyles}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, marginVertical: 10 }}>
                            Blocked
                        </Text>
                        <Text style={{ marginVertical: 10, textAlign: 'center' }}>
                            People you have blocked appear here. Upgrade to muzlock premium to unblock them users.
                        </Text>
                        <Button
                            rounded
                            block
                            style={styles.IntroBtn}>
                            <Text style={styles.IntroText}>Upgrade to unblock</Text>
                        </Button>
                    </View>
                </Tab>
            </Tabs>
        </Content>
    )
}

export default exploreScreen;