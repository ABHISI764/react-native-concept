import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import Counter1 from './Counter1'
import Counter2 from './Counter2'

const UseCallbackExample = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)


    const incrementCounter1 = useCallback(() => {
        setCounter1(counter1 + 1)
    },[counter1])
    const incrementCounter2 = useCallback(() => {
        setCounter2(counter2 + 1)
    },[counter2])

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={incrementCounter1}
                style={styles.button}
            >
                <Text style={styles.textStyle}>Counter1</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={incrementCounter2}
                style={styles.button}
            >
                <Text style={styles.textStyle}>Counter2</Text>
            </TouchableOpacity>
            <Counter1 counter1={counter1} />
            <Counter2  counter2={counter2}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'bold'
    },
    button: {
        width: 200,
        height: 50,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default UseCallbackExample