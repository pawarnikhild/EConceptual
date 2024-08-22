import React, {useEffect, useState, useContext} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackNavigationParamList} from '../../routes/MainStackNavigation';

import AuthContext from '../../context/AuthContext';
import {fetchProfile, updateProfile} from '../../services/profile-services';
import {removeToken} from '../../utils/asyncStorage';

import ProfileScreenView from './ProfileScreenView';

const ProfileScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<NativeStackNavigationParamList, 'Login'>
    >();

  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error('AuthContext is missing values!');
  }
  const {token} = authContext;

  const [profile, setProfile] = useState({
    id: 0,
    name: '',
    email: '',
    city: '',
    country: '',
    pincode: 0,
  });
  const [profileErrors, setProfileErrors] = useState({
    nameError: '',
    emailError: '',
    cityError: '',
    countryError: '',
    pincodeError: '',
  });
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      setLoading(true);
      const result = await fetchProfile(token);
      if (result) {
        setLoading(false);
        setProfile(result);
      } else {
        setLoading(false);
        Alert.alert('Failure in fetching profile data', result.error);
      }
    } catch (error) {
      console.log(
        'Error in getting profile data on ProfileScreen: ',
        JSON.stringify(error),
      );
      Alert.alert('Something went wrong. Kindly try again!');
    } finally {
      setLoading(false);
    }
  };

  const validateFields = () => {
    const newErrors = {
      nameError: '',
      emailError: '',
      cityError: '',
      countryError: '',
      pincodeError: '',
    };

    if (!profile.name.trim()) {
      newErrors.nameError = 'Name is required';
    } else if (/[^a-zA-Z\s'-]/.test(profile.name)) {
      newErrors.nameError = 'Name contains invalid characters';
    }
    if (!profile.email.trim()) {
      newErrors.emailError = 'Email is required';
    } else if (
      !/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(profile.email.trim())
    ) {
      newErrors.emailError = 'Invalid email format';
    }
    if (!profile.city.trim()) newErrors.cityError = 'City is required';
    // if dropdown then validation needed?
    if (!profile.country.trim()) newErrors.countryError = 'Country is required';
    if (profile.pincode === undefined || profile.pincode === null) {
      newErrors.pincodeError = 'Pincode is required';
    } else if (isNaN(profile.pincode)) {
      newErrors.pincodeError = 'Pincode must be a number';
    } else if (profile.pincode.toString().length !== 6) {
      // Assuming pincode should be 5 digits long
      newErrors.pincodeError = 'Pincode must be 6 digits long';
    }
    console.log('newErrors', newErrors);

    setProfileErrors(newErrors);

    return !Object.values(newErrors).some(error => error);
  };

  const editProfile = async () => {
    if (validateFields()) {
      try {
        setLoading(true);
        const result = await updateProfile(token, profile);
        if (result) {
          setLoading(false);
          setProfile(result);
          setEditMode(false);
        } else {
          setLoading(false);
          Alert.alert('Failure in updating profile data', result.error);
        }
      } catch (error) {
        console.log(
          'Error in updating profile data on ProfileScreen: ',
          JSON.stringify(error),
        );
        Alert.alert('Something went wrong. Kindly try again!');
      } finally {
        setLoading(false);
      }
    } else {
      console.log('Error in validation', profileErrors);
    }
  };

  const logout = async () => {
    Alert.alert('Logged out', 'Do you want to log out?', [
      {
        text: 'Go back',
      },
      {
        text: 'logout',
        onPress: async () => {
          try {
            await removeToken();
            navigation.replace('Login');
          } catch (error) {
            console.log('Error in logging out: ', JSON.stringify(error));
            Alert.alert('Something went wrong. Kindly try again!');
          }
        },
      },
    ]);
  };

  return (
    <ProfileScreenView
      profile={profile}
      profileErrors={profileErrors}
      loading={loading}
      apiError={apiError}
      editMode={editMode}
      setProfile={setProfile}
      setEditMode={setEditMode}
      editProfile={editProfile}
      logout={logout}
    />
  );
};

export default ProfileScreen;
