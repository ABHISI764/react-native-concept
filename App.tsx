import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlatListApiCallExample from './src/components/FlatListApiCallExample';
import LoginWithFormikandYup from './src/components/LoginWithFormikandYupExample/LoginWithFormikandYup';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name="FlatListApiCallExample" component={FlatListApiCallExample} /> */}
      <Stack.Screen name="LoginWithFormikandYup" component={LoginWithFormikandYup} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App