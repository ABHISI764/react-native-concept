import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const PostApiExample = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  const submitHandel = () => {
    if (!title || !body) {
      Alert.alert(`${title}, ${body}`);
      return;
    }
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: 1,
      })
      .then(response => {
        Alert.alert(`data saved successfully, post id: ${response.data.id}`);
        setTitle('');
        setBody('');
      })
      .catch(error => {
        console.error(error);
        Alert.alert('post Failed', 'There Was an error posting data');
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Please Enter title"
        value={title}
        onChangeText={setTitle}
        style={styles.inputBox}
      />
      <TextInput
        placeholder="Please Enter Body"
        value={body}
        onChangeText={setBody}
        style={styles.inputBox1}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={submitHandel}>
        <Text style={{color:'white'}} to>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: '80%',
    borderWidth: 0.5,
    height: 40,
    alignItems: 'center',
  },
  inputBox1: {
    width: '80%',
    borderWidth: 0.5,
    height: 40,
    alignItems: 'center',
    marginTop: '5%',
  },
  button: {
    padding: 20,
    backgroundColor: 'green',
    paddingHorizontal: 50,
    marginTop: '10%',
  },
});

export default PostApiExample;
