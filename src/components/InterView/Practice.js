import {View, Text, FlatList, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';

let apiUrl = 'https://jsonplaceholder.typicode.com/users';
const Practice = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setData(data);
      // console.log('abhishek testing', data);
    } catch (error) {
      console.log(error);
    }
  };
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          borderColor: 'black',
          borderWidth: 0.5,
          shadowColor: 'red',
          shadowOpacity: 0.4,
        }}>
        <Text>{item.name} : </Text>
        <Text>{item.email}</Text>
      </View>
    );
  };
  const handelSearch = (text) => {
    setSearch(text);
    const filterItem = data.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });
    setFilterData(filterItem);

  };


  return (
    <View>
      <TextInput
        value={search}
        placeholder="Search name or email here"
        onChangeText={handelSearch}
        style={{width: '100%', height: 50, padding: 20}}
      />
      <FlatList data={search ? filterData : data} renderItem={renderItem} />
    </View>
  );
};

export default Practice;
