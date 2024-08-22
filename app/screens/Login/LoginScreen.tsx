import React, {useState, useEffect, useContext} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackNavigationParamList} from '../../routes/MainStackNavigation';

import AuthContext from '../../context/AuthContext';
import {login} from '../../services/auth-services';
import {storeToken} from '../../utils/asyncStorage';

import LoginScreenView from './LoginScreenView';

const LoginScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<NativeStackNavigationParamList, 'Login'>
    >();
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error('AuthContext is missing values!');
  }
  const {setToken} = authContext;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    let hasError = false;
    setEmailError('');
    setPasswordError('');
    if (!email.trim()) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.trim())) {
      setEmailError('Invalid email format');
      hasError = true;
    }
    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      hasError = true;
    }
    if (hasError) {
      return;
    } else {
      try {
        setLoading(true);
        const result = await login(email, password);
        console.log('rrrrrrrrrrrr', result);
        // email: admin@econceptual.com
        // password: admin-password
        if (result.error) {
          Alert.alert('Login Failed', result.error);
        } else {
          setToken(result);
          storeToken(result);
          Alert.alert('Login Successful', 'You have logged in successfully!', [
            {
              text: 'Ok',
              onPress: () => navigation.replace('Tab'),
            },
          ]);
        }
      } catch (error) {
        console.log('Error in logging in: ', JSON.stringify(error));
        Alert.alert('Something went wrong. Kindly try again!');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <LoginScreenView
      email={email}
      password={password}
      emailError={emailError}
      passwordError={passwordError}
      loading={loading}
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginScreen;
