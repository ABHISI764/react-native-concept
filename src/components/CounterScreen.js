import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/features/CounterSlice';

const CounterScreen = () => {
    const disPatch = useDispatch();
    const count = useSelector(state => state.counter.Value)
    console.log("testing", count)
    return (
        <View style={{justifyContent:'center',alignItems:'center',alignContent:'center'}}>
            <Text>{count}</Text>
            <TouchableOpacity
            style={styles.button}
            onPress={() => disPatch(increment())}
            >
                <Text style={{}}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
            onPress={()=> disPatch(decrement())}
            >
                <Text>Minus</Text>
            </TouchableOpacity>
        </View>
    )
} 

const styles = StyleSheet.create({
    button: {
        display:'flex',
        gap:20,
        padding: 20,
        backgroundColor:'red',
        width: '70%',
        alignItems:'center',
        marginTop:70
    },
    button2: {
        padding: 20,
        backgroundColor:'green',
        width: '70%',
        alignItems:'center', 
       marginTop: 10

    }

})

export default CounterScreen