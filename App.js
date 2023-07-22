import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import StackNav from './SRC/navigations/StackNav';
import BottomTabNav from './SRC/navigations/BottomTabNav';
import colors from './SRC/common/Colors';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView />
      <StackNav />
      {/* <BottomTabNav /> */}
    </NavigationContainer>
  );
}

export default App;
