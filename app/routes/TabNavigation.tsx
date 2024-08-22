import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import CategoryScreen from '../screens/Category/CategoryScreen';
import CartScreen from '../screens/Cart/CartScreen';
import WishlistScreen from '../screens/Wishlist.tsx/WishlistScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const returnTabBarIconColor = (focused: boolean) =>
    focused ? 'orange' : 'black';

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SimpleLineIcons
              name="home"
              size={28}
              color={returnTabBarIconColor(focused)}
              style={styles.tabBarIconStyle}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="category"
              size={28}
              color={returnTabBarIconColor(focused)}
              style={styles.tabBarIconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcons
              name="shopping-cart"
              size={30}
              color={returnTabBarIconColor(focused)}
              style={styles.tabBarIconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <OcticonsIcons
              name="heart"
              size={28}
              color={returnTabBarIconColor(focused)}
              style={styles.tabBarIconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesignIcons
              name="user"
              size={28}
              color={returnTabBarIconColor(focused)}
              style={styles.tabBarIconStyle}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarIconStyle: {
    marginTop: 8,
  },
  tabBarLabelStyle: {
    color: 'black',
    fontSize: 13,
    marginBottom: 8,
    fontWeight: '400',
  },
});
