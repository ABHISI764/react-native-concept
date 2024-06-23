import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlatListApiCallExample from './src/components/FlatListApiCallExample';
import LoginWithFormikandYup from './src/components/LoginWithFormikandYupExample/LoginWithFormikandYup';
import HomeScreen from './src/components/LoginWithFormikandYupExample/HomeScreen';
import UseCallbackExample from './src/components/UseCallback/UseCallbackExample';
import FlatlistExample from './src/components/FlatList/FlatlistExample';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name="FlatListApiCallExample" component={FlatListApiCallExample} /> */}
      {/* <Stack.Screen name="LoginWithFormikandYup" component={LoginWithFormikandYup} /> */}
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Stack.Screen name="FlatlistExample" component={FlatlistExample} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App