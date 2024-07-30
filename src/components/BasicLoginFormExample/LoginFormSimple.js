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
  
  const LoginFormSimple = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('')
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handelLogin = () => {
      let valid = true;
      if(email === ''){
        setEmailError('Email is required');
        valid = false;
      }else if (!validateEmail(email)){
        setEmailError('please enter a valid email');
        valid = false;
      }else {
        setEmailError('')
      }
  
      if( password === '') {
        setPasswordError('Please enter a valid password ');
        valid = false;
      } else {
        setPasswordError('');
      }
  
      if (email == 'testing@gmail.com' && password == 'password') {
        Alert.alert(`WELCOM to the login dashBoard `);
      } else {
        console.log(`login password or email is wrong`);
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Enter Email</Text>
        <TextInput
          placeholder="Enter you email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <Text style={styles.title}>Enter Password</Text>
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          style={styles.input}
        />
        {passwordError? <Text style={styles.errorText}>{passwordError} </Text>: null}
        <TouchableOpacity onPress={handelLogin}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
      // backgroundColor:'red'
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
      textAlign: 'center',
    },
    errorText: {
      color: 'red',
      marginBottom: 8,
    },
    button: {
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
      padding: 15,
      marginTop: 20,
      color:'white'
    },
    input: {
      width: '100%',
      borderWidth: 0.5,
      borderColor: 'grey',
      height: 40,
      paddingHorizontal: 8,
    },
  });
  export default LoginFormSimple;
  