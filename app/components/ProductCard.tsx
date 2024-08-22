import React, {useState} from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import {productType, HomeScreenViewProps} from '../screens/Home/HomeTypes';

const ProductCard = ({
  id,
  name,
  description,
  price,
  imageUrl,
  premiumAccess,
  onPress,
}: productType) => {
  const [imageSource, setImageSource] = useState({uri: imageUrl});
  const handleImageError = () => {
    setImageSource({
      uri: 'https://shipkar.co.in/shop/wp-content/uploads/2022/12/corrugated-box.jpg',
    });
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      className="m-1 p-2 bg-white rounded-md  flex-row items-center ">
      <Image
        source={imageSource}
        resizeMode={'contain'}
        className="h-32 w-28 mr-1"
        onError={handleImageError}
      />
      <View className="ml-1">
        <Text className="text-xl text-black ">{name}</Text>
        <Text className="text-black " numberOfLines={3}>
          {description}
        </Text>
        <Text className="text-2xl font-medium text-black">${price}</Text>
        {premiumAccess && (
          <View className="flex-row items-center">
            <OcticonsIcons
              name="check-circle-fill"
              size={18}
              color="#ffa64d"
            />
            <Text className="text-base font-bold text-blue-500 ml-1">Plus</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
