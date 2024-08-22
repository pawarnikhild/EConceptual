import React, {useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackNavigationParamList} from '../../routes/MainStackNavigation';

import AuthContext from '../../context/AuthContext';
import {retrieveToken} from '../../utils/asyncStorage';

import SplashScreenView from './SplashScreenView';

const SplashScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<NativeStackNavigationParamList, 'Login'>
    >();
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error('AuthContext is missing values!');
  }
  const {setToken} = authContext;

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const userToken = await retrieveToken();
      if (userToken) {
        console.log('User has logged in already');
        setToken(userToken);
        setTimeout(() => {
          navigation.replace('Tab');
        }, 2000);
      } else {
        console.log('No user token found, you have to login!');
        setTimeout(() => {
          navigation.replace('Login');
        }, 2000);
      }
    } catch (error) {
      console.error('Failed to check login status', error);
    }
  };
  return <SplashScreenView />;
};

export default SplashScreen;
