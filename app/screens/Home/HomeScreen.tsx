import React, {useEffect, useState, useContext} from 'react';
import {Alert} from 'react-native';

import AuthContext from '../../context/AuthContext';
import {fetchProducts} from '../../services/product-services';

import {productsType} from './HomeTypes';
import HomeScreenView from './HomeScreenView';

const HomeScreen = () => {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error('AuthContext is missing values!');
  }
  const {token} = authContext;

  console.log('Got token through context');

  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<productsType>([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [flatListLoading, setFlatListLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshFlatList, setRefreshFlatList] = useState(false);

  useEffect(() => {
    loadProducts();
  }, [page]);

  const loadProducts = async () => {
    try {
      if (page === 0) {
        setInitialLoading(true);
      } else {
        setFlatListLoading(true);
      }
      const result = await fetchProducts(page, token);
      if (result) {
        setProducts(prevProducts => [...prevProducts, ...result]);
        setRefreshFlatList(!refreshFlatList);
        console.log('Product data fetched from page', page);
      } else {
        Alert.alert('Failure in data fetching', result.error);
      }
    } catch (error) {
      console.log(
        'Error in getting product list on HomeScreen: ',
        JSON.stringify(error),
      );
      Alert.alert('Something went wrong. Kindly try again!');
    } finally {
      setInitialLoading(false);
      setFlatListLoading(false);
    }
  };

  console.log('refreshFlatList', refreshFlatList);
  console.log('products', products);

  return (
    <HomeScreenView
      initialLoading={initialLoading}
      products={products}
      page={page}
      flatListLoading={flatListLoading}
      refreshFlatList={refreshFlatList}
      setPage={setPage}
    />
  );
};

export default HomeScreen;
