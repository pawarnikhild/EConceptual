import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

type IconButtonProps = {
  name: string;
  size?: number;
  color?: string;
};

const IconButton = ({name, size, color}: IconButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-white w-20 h-12 rounded-lg border border-orange-400 justify-center items-center"
      onPress={() => console.log('IconButton pressed')}>
      <FontAwesomeIcons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
