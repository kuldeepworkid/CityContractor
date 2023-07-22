import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Bookings from '../screens/Bookings';
import Notifications from '../screens/Notifications';
import BottomTabIcon from '../components/BottomTabIcon';
import icons from '../common/IconObject';
import Cart from '../screens/Cart';
import colors from '../common/Colors';

const Tab = createBottomTabNavigator();

const IconRenderer = (icon, tintColor) => (
  <BottomTabIcon source={icon} tintColor={tintColor} />
);

function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.orange_yellow_moderate,
        tabBarInactiveTintColor: colors.black,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => IconRenderer(icons.home, color),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({focused, color}) => IconRenderer(icons.bell, color),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarIcon: ({focused, color}) => IconRenderer(icons.calender, color),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color}) => IconRenderer(icons.user, color),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNav;
