import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcome';
import VerifyNumber from '../screens/VerifyNumber';
import ConfirmationCode from '../screens/ConfirmationCode';
import LoginScreen from '../screens/LoginScreen';
import Matches from '../screens/Matches';
import EnableLocation from '../screens/EnableLocation';
import DateOfBirth from '../screens/DateOfBirth';
import Gender from '../screens/Gender';
import SelfieVerification from '../screens/SelfieVerfication';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();

const main = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName="Settings">
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
                <Stack.Screen component={Matches} name="Matches"
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

            </Stack.Navigator>
        </View>
    )
}


export default main