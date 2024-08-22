import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';

import {ProfileScreenViewProps} from './ProfileTypes';

const ProfileScreenView = ({
  profile,
  profileErrors,
  loading,
  editMode,
  setProfile,
  setEditMode,
  editProfile,
  logout,
}: ProfileScreenViewProps) => {
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
            <View className="mt-4 self-center h-29 w-29 rounded-full border-4 border-orange-400">
              <Image
                source={{
                  uri: 'https://c0.wallpaperflare.com/preview/230/644/1005/beard-bearded-bearded-man-beard-model.jpg',
                }}
                className="self-center h-28 w-28 rounded-full"
              />
            </View>
            <Text className="mb-4 text-center text-base text-black">
              Change picture
            </Text>
            <View className=" px-8">
              <Text className="text-base font-bold text-black mb-1 ml-1">
                Username
              </Text>
              <CustomTextInput
                placeholder="Enter your name"
                value={profile.name}
                editable={editMode}
                onChangeText={text =>
                  setProfile(prev => ({...prev, name: text}))
                }
                errorMessage={profileErrors.nameError}
                containerStyle="h-11 mb-5 border border-2 border-gray-500 rounded-lg "
              />
              <Text className="text-base font-bold text-black mb-1 ml-1">
                Email
              </Text>
              <CustomTextInput
                placeholder="Enter your email"
                value={profile.email}
                editable={editMode}
                onChangeText={text =>
                  setProfile(prev => ({...prev, email: text}))
                }
                errorMessage={profileErrors.emailError}
                containerStyle="h-11 mb-5 border border-2 border-gray-500 rounded-lg "
              />

              <Text className="text-base font-bold text-black mb-1 ml-1">
                City
              </Text>
              <CustomTextInput
                placeholder="Enter your city"
                value={profile.city}
                editable={editMode}
                onChangeText={text =>
                  setProfile(prev => ({...prev, city: text}))
                }
                errorMessage={profileErrors.cityError}
                containerStyle="h-11 mb-5 border border-2 border-gray-500 rounded-lg "
              />
              <Text className="text-base font-bold text-black mb-1 ml-1">
                Country
              </Text>
              <CustomTextInput
                placeholder="Enter your coutry"
                value={profile.country}
                editable={editMode}
                onChangeText={text =>
                  setProfile(prev => ({...prev, country: text}))
                }
                errorMessage={profileErrors.countryError}
                containerStyle="h-11 mb-5 border border-2 border-gray-500 rounded-lg "
              />
              <Text className="text-base font-bold text-black mb-1 ml-1">
                Pincode
              </Text>
              <CustomTextInput
                placeholder="Enter your pincode"
                value={profile.pincode.toString()}
                editable={editMode}
                onChangeText={text =>
                  setProfile(prev => ({...prev, pincode: Number(text)}))
                }
                errorMessage={profileErrors.pincodeError}
                containerStyle="h-11 mb-5 border border-2 border-gray-500 rounded-lg "
              />
              {editMode ? (
                <>
                  <CustomButton
                    title="Update"
                    titleColor="text-white"
                    backgroundColor="bg-orange-400"
                    containerStyle="mt-2 mx-4"
                    onPress={() => {
                      console.log('Update Pressed');
                      //   handleSubmit();
                      editProfile();
                    }}
                  />
                  <CustomButton
                    title="Cancel"
                    titleColor="text-white"
                    backgroundColor="bg-black"
                    containerStyle="mt-2 mx-24 mb-4"
                    onPress={() => {
                      console.log('Cancel Pressed');
                      setEditMode(false);
                    }}
                  />
                </>
              ) : (
                <>
                  <CustomButton
                    title="Edit"
                    titleColor="text-white"
                    backgroundColor="bg-orange-400"
                    containerStyle="mt-2 mx-4"
                    onPress={() => {
                      setEditMode(true);
                    }}
                  />
                  <CustomButton
                    title="Log out"
                    titleColor="text-white"
                    backgroundColor="bg-black"
                    containerStyle="mt-2 mx-4 mb-4"
                    onPress={() => {
                      logout();
                    }}
                  />
                </>
              )}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileScreenView;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  selectedTextStyle: {
    color: 'black',
  },
});
