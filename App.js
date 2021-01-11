/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import Navigator from './src/navigator';


const App: () => React$Node = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </SafeAreaView>
    </View >
  );
};



export default App;
