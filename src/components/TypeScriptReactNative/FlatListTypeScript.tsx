import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductItem from './ProductItem';

interface ProductState{
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: any;
  title: string;
}

const FlatListTypeScript = () => {
  const [product, setProduct] = useState<ProductState[]>([]);

  useEffect(() => {
    getApiCall();
  }, []);

  const getApiCall = async () => {
    try {
      const product = await fetch('https://fakestoreapi.com/products');
      const data = await product.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
        <FlatList 
        data={product}
        renderItem={({item, index}:{item:DataState, index:number})=> {
            return(
                <ProductItem item={item}/>
            )
        }}/>
    </View>
  );
};

export default FlatListTypeScript;
