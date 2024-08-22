import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  titleColor?: string;
  containerStyle?: string;
};

const CustomButton = ({
  title,
  titleColor,
  backgroundColor,
  containerStyle,
  onPress,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${backgroundColor} ${containerStyle} p-2 rounded-xl  justify-center items-center`}>
      <Text className={`${titleColor} text-xl mb-1`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
