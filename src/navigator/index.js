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
import Matches from '../screens/Matches';
import EnableLocation from '../screens/EnableLocation';
import DateOfBirth from '../screens/DateOfBirth';
import Gender from '../screens/Gender';
import SelfieVerification from '../screens/SelfieVerfication';
import Settings from '../screens/Settings';
import ComingSoon from '../screens/comingSoon';
import Filter from '../screens/Filter';
import Profile from '../screens/Profile';
import Shield from '../screens/Shield';
import Premium from '../screens/Premium';
import Chat from '../screens/chat';
import mainChat from '../screens/chat';
import ChatDetails from '../screens/chat/ChatDetails';
import SearchForAnswer from '../screens/SearchForAnswer';
import SuccessStories from '../screens/SuccessStories';
import ProfileDetails from '../screens/ProfileDetailsAddPhotosAndOthers';
import YourProfile from '../screens/YourProfile';
import StartChatting from '../screens/StartChatting';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Wali from '../screens/Wali';
import LockOnExit from '../screens/LockOnExit';
import ColorSettings from '../screens/ColorSettings';
import ReportProblem from '../screens/ReportProblem';
import Account from '../screens/Account';

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
        chat: mainChat,
        settings: Profile,

    });



    return (
        // <BottomNavigation
        //     navigationState={{ index, routes }}
        //     onIndexChange={setIndex}
        //     renderScene={renderScene}
        //     activeColor={Colors.purple}
        //     inactiveColor={Colors.grey}
        //     shifting={true}
        //     barStyle={{ backgroundColor: 'transparent', elevation: 0.5 }}
        // />

        <Tab.Navigator
            initialRouteName="Feed"
            shifting={true}
            sceneAnimationEnabled={false}
            barStyle={{ backgroundColor: 'transparent', elevation: 0.5 }}
            activeColor={Colors.purple}
            inactiveColor={Colors.grey}
        >
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (<Image source={require('../assets/navigationison/profile-1.png')} style={{ tintColor: color, height: 26, width: 26 }} />),
                    title: ''
                }}
            />
            <Tab.Screen
                name="explore"
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({ color }) => (<Image source={require('../assets/navigationison/explore-1.png')} style={{ tintColor: color, height: 26, width: 26 }} />),
                    title: ''
                }}
            />
            <Tab.Screen
                name="chatMain"
                component={mainChat}
                options={{
                    tabBarIcon: ({ color }) => (<Image source={require('../assets/navigationison/chat-nav-icon.png')} style={{ tintColor: color, height: 26, width: 26 }} />),
                    title: ''
                }}
            />
            <Tab.Screen
                name="settings"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (<Image source={require('../assets/navigationison/settings-1.png')} style={{ tintColor: color, height: 26, width: 26 }} />),
                    title: ''
                }}
            />
        </Tab.Navigator>
    );
};
const main = () => {
    return (
        <View style={{ flex: 1 }}>

            <Stack.Navigator initialRouteName="welcome">

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

                <Stack.Screen component={MyTabs} name="tab" options={{ header: () => null }} />

                <Stack.Screen component={Matches} name="Matches" options={{ header: () => null }} />

                <Stack.Screen component={DateOfBirth} name="DateOfBirth"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={Gender} name="Gender"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={SelfieVerification} name="SelfieVerification"
                    options={{ header: () => null }}
                />

                <Stack.Screen component={EnableLocation} name="EnableLocation"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={Settings} name="Settings"
                    options={{ header: () => null }}
                />

                <Stack.Screen component={Filter} name="Filter" options={{ header: () => null }} />

                <Stack.Screen component={Shield} name="Shield"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={Premium} name="Premium"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={Profile} name="Profile"
                    options={{ header: () => null }}
                />

                <Stack.Screen component={ChatDetails} name="ChatDetails"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={SearchForAnswer}
                    name="SearchForAnswers"
                    options={{ header: () => null }}
                />

                <Stack.Screen component={SuccessStories}
                    name="SuccessStories"
                    options={{ header: () => null }}
                />

                <Stack.Screen component={ProfileDetails}
                    name="ProfileDetails"
                    options={{ header: () => null }}
                />

                <Stack.Screen component={YourProfile}
                    name="YourProfile"
                    options={{ header: () => null }}
                />

                <Stack.Screen component={StartChatting}
                    name="StartChatting"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={PrivacyPolicy}
                    name="PrivacyPolicy"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={Wali}
                    name="Wali"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={LockOnExit}
                    name="LockOnExit"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={ColorSettings}
                    name="ColorSettings"
                    options={{ header: () => null }}
                />

                <Stack.Screen component={ReportProblem}
                    name="ReportProblem"
                    options={{ header: () => null }}
                />

                <Stack.Screen component={Account}
                    name="Account"
                    options={{ header: () => null }}
                />


            </Stack.Navigator>
        </View>
    )
}


export default main