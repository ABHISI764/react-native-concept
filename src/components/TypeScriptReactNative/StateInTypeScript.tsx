import {View, Text} from 'react-native';
import React, {useState} from 'react';

interface User {
  name: string;
  age: number;
  email: string;
}
interface Items{
    title:string,
    price:number,
    id:string
}
const StateInTypeScript = () => {
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<User>({name: '', age: 0, email: ''});
  const [item, setItem] =useState<Items[]>()
  return (
    <View>
      <Text>HomeTypeScript</Text>
    </View>
  );
};

export default StateInTypeScript;
