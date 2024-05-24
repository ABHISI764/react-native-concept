import { View, Text, SafeAreaView, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

const FlatListApiCallExample = () => {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
      const url = 'https://fakestoreapi.com/products';
      try{
          const response = await fetch(url);
          if(!response.ok){
              throw new Error(`HTTP error ${response.status} `)
          }
          const data = await response.json()
          console.log("testing data",data)
          setIsLoading(false)
          setProduct(data)
      } catch (error) {
          console.error('Error fetching products ', error)
      }
  }

  // const getProducts = async () => {
  //   const url = 'https://fakestoreapi.com/products';
  //   const response = await fetch(url);
  //   const data = await response.json()
  //   setIsLoading(false)
  //   setProduct(data)
  // }



  return (
    <SafeAreaView>
      {
        isLoading ? (<ActivityIndicator color="red" size="large" />) : (
          <FlatList data={product}
            renderItem={({ item }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
                <Text>{item.price}</Text>
              </View>
            )}
          />
        )
      }
      <Text>FlatListApiCallExample</Text>

    </SafeAreaView>
  )
}

export default FlatListApiCallExample