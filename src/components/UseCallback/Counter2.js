import { View, Text } from 'react-native'
import React,{memo} from 'react'

const Counter2 = ({counter2}) => {
    console.log("compoenent 2 is calling")
  return (
    <View>
      <Text>Counter2: {counter2}</Text>
    </View>
  )
}

export default memo(Counter2)