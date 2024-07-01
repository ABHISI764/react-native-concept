import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'


let limit = 10;
let loadMore = true;

const FlatListApiCallExample = () => {
  const [data, setData] = useState([])
  const [showLoader, setShowLoader] = useState(false)
  const [skip, setSkip] = useState(0)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    let query = `?skip=${skip}&limit=${limit}`
    fetch('https://dummyjson.com/products' + query)
      .then(res => res.json())
      .then(res => {
        console.log("api res", res)
        if(res.products.length == 0){
          loadMore = false;
        }
        setData([...data,...res.products])
        setSkip(skip+10)
        setShowLoader(false)
      })
  }


  const renderItem = ({ item }) => {
    return (
      <View style={styles.flatListStyles}>

        <Image
          source={{ uri: item.thumbnail }}
          style={styles.imageStyle}
        />
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal: 18, marginVertical: 8}}>
          <Text>{item.brand}</Text>
          <Text>{item.price}</Text>
        </View>
        <Text>{item.description}</Text>

      </View>
    )
  }
  const keyExtractor = ((item) => `${item.id}`)

  const itemSeparatorComponent = (() => {
    return (
      <View style={{ height: 20 }} />
    )
  })

  const listFooterComponent = (() => {
    return(
      <ActivityIndicator style={{marginVertical: 16}}/>
    )
  })
  const onEndReached = (() => {
    if(loadMore){
      fetchData()
      setShowLoader(true)
    }
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>FlatListApiCallExample</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={itemSeparatorComponent}
          ListFooterComponent={showLoader && listFooterComponent}
          onEndReached={onEndReached}
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  imageStyle: {
    width: '100%',
    height: 200,
    borderRadius: 8
  },
  flatListStyles: {
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    backgroundColor: 'white',
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 8,
    margin: 2,
    padding: 9


  }

})

export default FlatListApiCallExample