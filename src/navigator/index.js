import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcome';

const Stack = createStackNavigator();

const main = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator>
                <Stack.Screen component={Welcome} name={"welcome"} options={{ header: () => null }} />
            </Stack.Navigator>
        </View>
    )
}


export default main