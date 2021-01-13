import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcome';
import VerifyNumber from '../screens/VerifyNumber';
import ConfirmationCode from '../screens/ConfirmationCode';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/home';
import ExploreScreen from '../screens/explore';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Colors } from '../styles/colors';
import { BottomNavigation } from 'react-native-paper';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', icon: require('../assets/navigationison/profile-1.png') },
        { key: 'explore', icon: require('../assets/navigationison/explore-1.png') },
        { key: 'chat', icon: require('../assets/navigationison/chat-nav-icon.png') },
        { key: 'settings', icon: require('../assets/navigationison/settings-1.png') },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        explore: ExploreScreen,
        chat: Welcome,
        settings: VerifyNumber,
    });



    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            activeColor={Colors.purple}
            inactiveColor={Colors.grey}
            shifting={true}
            barStyle={{ backgroundColor: 'transparent', elevation: 0.5 }}
        />
    );
};
const main = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName="tab">
                <Stack.Screen component={Welcome} name={"welcome"}
                    options={{ header: () => null }} />
                <Stack.Screen component={VerifyNumber} name="VerifyNumber"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={ConfirmationCode} name="ConfirmationCode"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={LoginScreen} name="LoginScreen"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={MyTabs} name="tab"
                    options={{ header: () => null }}
                />

            </Stack.Navigator>
        </View>
    )
}


export default main