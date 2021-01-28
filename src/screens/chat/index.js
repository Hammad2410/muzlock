import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Content, Header, Left, Body, Right, Thumbnail, Icon, Container, Tabs, Tab } from 'native-base';
import ChatList from './components/ChatList';
import { Colors } from '../../styles/colors';
import Status from './components/Status';

const tabStyles = {
    activeTextStyle: { color: Colors.button, fontWeight: 'bold' },
    textStyle: { color: Colors.grey, fontWeight: 'bold' },
    activeTabStyle: { color: Colors.button, lineHeight: 12, backgroundColor: Colors.backgroundColor },
    style: { backgroundColor: Colors.backgroundColor },
    tabStyle: { backgroundColor: Colors.backgroundColor }
}

const mainChat = ({ navigation }) => {

    return (
        <Container style={{ flex: 1 }}>
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
            <Tabs
                tabBarUnderlineStyle={{
                    height: 2,
                    backgroundColor: Colors.button
                }}
                tabContainerStyle={{
                    backgroundColor: Colors.button,
                    elevation: 0
                }}
            >
                <Tab heading={"Chat"} {...tabStyles}>
                    <ChatList navigation={navigation} />
                </Tab>
                <Tab heading={'Status'} {...tabStyles}>
                    <Status />
                </Tab>
            </Tabs>
        </Container >
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