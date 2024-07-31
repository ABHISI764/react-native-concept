import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const FlatListPractice = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [serach, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      setData(response.data);
      setFilterData(response.data);
      setLoading(false);
    });
  }, []);

  const handelSearch = text => {
    setSearch(text);
    const newData = data.filter(item => {
      const itemData = `${item.name.toUpperCase()} ${item.email.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilterData(newData);
  };

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
    );
  }

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search by name of email"
        style={styles.searchBar}
        value={serach}
        onChangeText={handelSearch}
      />
      <FlatList
        data={filterData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 40,
    paddingHorizontal: 8,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    textAlign: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default FlatListPractice;
