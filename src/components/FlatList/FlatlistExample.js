import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

let limit = 10;
let loadMore = true;

const FlatlistExample = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  console.log("i'm checking data", data);

  const fetchData = () => {
    let query = `?skip=${skip}&limit=${limit}`;
    fetch('https://dummyjson.com/products' + query)
      .then(res => res.json())
      .then(res => {
        console.log('api res', res);
        if (res.products.length == 0) {
          loadMore = false;
        }
        // setData(res.products)
        setData([...data, ...res.products]);
        setSkip(skip + 10);
        setShowLoader(false);
      })
      .catch(error => {
        console.log('error raised during fetch products ', error);
      });
  };
  const renderItem = useCallback(
    ({item}) => {
      return (
        <View style={styles.flatStyle}>
          <Image source={{uri: item.thumbnail}} style={styles.imageStyle} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Text>{item.brand}</Text>
            <Text>Rs. {item.price}</Text>
          </View>
          <Text>{item.description}</Text>
        </View>
      );
    },
    [data],
  );

  const keyExtractor = useCallback(item => `${item.id}`);
  const itemSeparatorComponent = useCallback(() => {
    return <View style={{height: 20}} />;
  }, [data]);
  const onEndReached = () => {
    if (loadMore) {
      fetchData();
      setShowLoader(true);
    }
  };
  const listFooterComponent = useCallback(() => {
    return <ActivityIndicator style={{marginVertical: 16}} size={'large'} />;
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={itemSeparatorComponent}
          onEndReached={onEndReached}
          ListFooterComponent={showLoader && listFooterComponent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  imageStyle: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  flatStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: 'white',
    padding: 8,
    margin: 2,
    borderRadius: 8,
  },
});

export default FlatlistExample;
