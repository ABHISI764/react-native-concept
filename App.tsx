import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlatListApiCallExample from './src/components/FlatListApiCallExample';
import LoginWithFormikandYup from './src/components/LoginWithFormikandYupExample/LoginWithFormikandYup';
import HomeScreen from './src/components/LoginWithFormikandYupExample/HomeScreen';
import UseCallbackExample from './src/components/UseCallback/UseCallbackExample';
import FlatlistExample from './src/components/FlatList/FlatlistExample';
import ForegroundBackgroundExample from './src/components/Foreground&BackgroundServices/ForegroundBackgroundExample';
import CounterScreen from './src/components/CounterScreen';
import Home from './src/components/SqliteDatabase/Home';
import EditUser from './src/components/SqliteDatabase/EditUser';
import AddUser from './src/components/SqliteDatabase/AddUser';
import FlatListPractice from './src/components/FlatlistInterview/FlatListPractice';
import LoginFormSimple from './src/components/BasicLoginFormExample/LoginFormSimple';
import ReactNativeSearchFilterExample from './src/components/React_Native_Search_Filter/ReactNativeSearchFilterExample';
import PostApiExample from './src/components/PostApiExample/PostApiExample';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>

      {/* <Stack.Screen name="FlatListApiCallExample" component={FlatListApiCallExample} /> */}
      {/* <Stack.Screen name="LoginWithFormikandYup" component={LoginWithFormikandYup} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      {/* <Stack.Screen name="FlatlistExample" component={FlatlistExample} /> */}
      {/* <Stack.Screen name="ForegroundBackgroundExample" component={ForegroundBackgroundExample} /> */}
      {/* <Stack.Screen name="CounterScreen" component={CounterScreen} /> */}
      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditUser" component={EditUser} />
      <Stack.Screen name="AddUser" component={AddUser} /> */}
      {/* <Stack.Screen name="FlatListPractice" component={FlatListPractice} /> */}
      <Stack.Screen name="PostApiExample" component={PostApiExample} />
      {/* <Stack.Screen name="ReactNativeSearchFilterExample" component={ReactNativeSearchFilterExample} /> */}
      {/* <Stack.Screen name="LoginFormSimple" component={LoginFormSimple} /> */}
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App