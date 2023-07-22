import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import StaticPage from '../screens/StaticPage';
import List from '../screens/ProductList';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Onboarding from '../screens/Onboarding';
import Otp from '../screens/Otp';
import BottomTabNav from './BottomTabNav';
import Details from '../screens/Details';
import ProductList from '../screens/ProductList';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="ProductList" component={ProductList} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
export default StackNav;
