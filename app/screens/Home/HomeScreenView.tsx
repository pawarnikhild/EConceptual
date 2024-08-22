import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import ProductCard from '../../components/ProductCard';

import {productType, HomeScreenViewProps} from './HomeTypes';

const HomeScreenView = ({
  initialLoading,
  products,
  page,
  flatListLoading,
  refreshFlatList,
  setPage,
}: HomeScreenViewProps) => {
  const keyExtractor = (item: productType, index: number) =>
    `page-${page}-item-${index}`;
  const renderFooter = () => {
    if (!flatListLoading) return null;
    return (
      <View style={{paddingVertical: 20}}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  };

  const renderItem = ({item}: {item: productType}) => (
    <ProductCard
      id={item.id}
      name={item.name}
      description={item.description}
      imageUrl={item.imageUrl}
      price={item.price}
      premiumAccess={item.premiumAccess}
      onPress={() => console.log(`Product ${item.name} pressed!`)}
    />
  );
  return (
    <>
      {initialLoading && page === 0 ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <View className="flex p-2 bg-gray-100">
          <View>
            <FlatList
              data={products}
              keyExtractor={keyExtractor} // Adjust the keyExtractor based on your data
              renderItem={renderItem}
              onEndReached={() => setPage(prevPage => prevPage + 1)}
              onEndReachedThreshold={0.1}
              ListFooterComponent={renderFooter}
              extraData={refreshFlatList}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default HomeScreenView;
