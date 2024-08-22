import React from 'react';
import {View, Text} from 'react-native';

const SplashScreenView = () => {
  return (
    <View className="flex-1 justify-center items-center  bg-gray-900">
      <View>
        <Text className="text-center text-5xl text-orange-400 font-extralight tracking-widest">
          Econceptual
        </Text>
        <Text className="text-3xl text-white font-thin text-right">App</Text>
      </View>
    </View>
  );
};

export default SplashScreenView;
