import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';


 const apiurl = 'https://dummyjson.com/products'
const FlatListPractice = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(apiurl);
      const data = await response.json();
      setData(data.products);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const renderItem = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: item.thumbnail}}
          style={{
            width: '100%',
            height: 200,
            borderRadius: 8,
            borderBottomWidth: 0.5,
          }}
        />
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:40}}>
        <Text>{item.brand}</Text>
        <Text>{item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderItem} />
      <Text>FlatList</Text>
    </SafeAreaView>
  );
};

export default FlatListPractice;
