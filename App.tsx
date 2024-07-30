/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NativeModules} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {CalendarModule} = NativeModules;
  const onPress = () => {
    // console.log('We will invoke the native module here!');
    CalendarModule.createCalendarEvent('Clockout', 'Office');
  };
  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
}

export default App;
