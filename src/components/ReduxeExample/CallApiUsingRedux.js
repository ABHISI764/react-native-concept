import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodo} from './todoSlicer';

const CallApiUsingRedux = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.todo);
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    error: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default CallApiUsingRedux;
