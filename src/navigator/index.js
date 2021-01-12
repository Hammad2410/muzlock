import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcome';
import VerifyNumber from '../screens/VerifyNumber';
import ConfirmationCode from '../screens/ConfirmationCode';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const main = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName="VerifyNumber">
                {/* <Stack.Screen component={Welcome} name={"welcome"}
                    options={{ header: () => null }} /> */}
                <Stack.Screen component={VerifyNumber} name="VerifyNumber"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={ConfirmationCode} name="ConfirmationCode"
                    options={{ header: () => null }}
                />
                <Stack.Screen component={LoginScreen} name="LoginScreen"
                    options={{ header: () => null }}
                />

            </Stack.Navigator>
        </View>
    )
}


export default main