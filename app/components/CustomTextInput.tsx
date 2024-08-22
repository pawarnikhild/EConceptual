import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type CustomTextInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  errorMessage: string;
  editable?: boolean;
  secureText?: boolean;
  backgroundColor?: string;
  containerStyle?: string;
};

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  errorMessage,
  editable = true,
  secureText,
  backgroundColor,
  containerStyle,
}: CustomTextInputProps) => {
  const [isSecure, setIsSecure] = useState(secureText);
  const toggleSecureText = () => {
    setIsSecure(prev => !prev);
  };

  return (
    <View className={`${containerStyle}`}>
      <View
        className={`${backgroundColor} rounded-lg flex-row justify-between items-center px-4`}>
        <TextInput
          className={` text-black  ${secureText ? 'w-11/12' : 'w-full'}`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'gray'}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
          editable={editable}
        />
        {secureText && (
          <TouchableOpacity onPress={toggleSecureText}>
            <Ionicons
              name={isSecure ? 'eye-off-outline' : 'eye-outline'}
              size={28}
              color={'orange'}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && (
        <Text className="text-red-500 mt-1">{errorMessage}</Text>
      )}
    </View>
  );
};

export default CustomTextInput;
