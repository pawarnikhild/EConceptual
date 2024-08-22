import React from 'react';
import {View, Text} from 'react-native';

const CategoryScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white ">
      <Text className="text-orange-400 text-3xl text-center m-3">
        Category Screen
      </Text>
      <Text className="text-black text-2xl text-center">
        This is dummy category screen
      </Text>
    </View>
  );
};

export default CategoryScreen;
