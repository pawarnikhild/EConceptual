import { View, Text } from 'react-native'
import React, { useState } from 'react'

import AuthContext from './app/context/AuthContext'

import LoginScreen from './app/screens/Login/LoginScreen'
import HomeScreen from './app/screens/Home/HomeScreen'
import ProfileScreen from './app/screens/Profile/ProfileScreen'
import MainStackNavigation from './app/routes/MainStackNavigation'
import SplashScreen from './app/screens/Splash/SplashScreen'
import ToastExp from './app/experimental/ToastExp'

const App = () => {
  const [token, setToken] = useState('');

  return (
    // <LoginScreen />
    // <HomeScreen />
    // <ProfileScreen />
    // <DropdownComponent />
    // <SplashScreen />
    // <ToastExp />
    <AuthContext.Provider value={{
      token, setToken
    }} >
      <MainStackNavigation />
    </AuthContext.Provider>
    
  )
}

export default App