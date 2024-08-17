import {View, Text, Image} from 'react-native';
import React from 'react';
interface ProductProp {
  item: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: any;
    title: string;
  };
}
const ProductItem = ({item}: ProductProp) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DataItem</Text>
      <Image source={{uri: item.image}} style={{width: 200, height: 200}} />
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

export default ProductItem;
