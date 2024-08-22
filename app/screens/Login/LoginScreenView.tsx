import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

import {LoginScreenViewProps} from './LoginTypes';
import IconsButton from '../../components/IconButton';
import Spinner from 'react-native-loading-spinner-overlay';
const LoginScreenView = ({
  email,
  password,
  emailError,
  passwordError,
  loading,
  setEmail,
  setPassword,
  handleSubmit,
}: LoginScreenViewProps) => {
  return (
    <SafeAreaView className="flex flex-1  mx-2">
      <KeyboardAvoidingView
        keyboardVerticalOffset={30}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Spinner
              visible={loading}
              textContent={'Loading...'}
              color="orange"
            />
            <Text className="text-3xl text-red-300">Welcome back!</Text>
            <Text className="text-3xl text-orange-400">Let's start now</Text>
            <Image
              source={{
                uri: 'https://img.freepik.com/premium-psd/psd-white-t-shirt-mockup-with-flowerpot-background_1168401-34.jpg',
              }}
              className="self-center rounded-3xl m-4"
              style={styles.welcomeImage}
            />
            <View className="px-8">
              <CustomTextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                backgroundColor="bg-gray-300"
                containerStyle=" my-2  "
                errorMessage={emailError}
              />
              <CustomTextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                backgroundColor="bg-gray-300"
                containerStyle="my-2 "
                secureText={true}
                errorMessage={passwordError}
              />
              <TouchableOpacity
                onPress={() => console.log('Forgot Password pressed')}>
                <Text className="text-right mb-2 text-blue-700">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <CustomButton
                title="Login"
                titleColor="text-white"
                backgroundColor="bg-orange-400"
                containerStyle="my-6"
                onPress={() => {
                  console.log('Button Pressed');
                  handleSubmit();
                }}
              />
              <View className="flex-row justify-between mb-7">
                <IconsButton name="facebook" size={24} color="orange" />
                <IconsButton name="apple" size={24} color="orange" />
                <IconsButton name="google" size={24} color="orange" />
              </View>
              <View className="self-center flex-row items-center">
                <Text className=" text-black">Don't have account? </Text>
                <TouchableOpacity
                  onPress={() => console.log('Register Now pressed')}>
                  <Text className="text-orange-400">Register Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreenView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 6,
  },
  welcomeImage: {
    width: '90%',
    height: 310,
  },
});
