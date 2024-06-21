import { View, Text } from 'react-native'
import React,{useMemo,memo} from 'react'

const Counter1 = ({counter1}) => {
    console.log("Component 1 is calling")
  return (
    <View>
      <Text>Counter1: {counter1}</Text>
    </View>
  )
}

export default memo(Counter1)