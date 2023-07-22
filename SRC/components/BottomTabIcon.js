import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {widthToDp} from '../common/Responsive';

function BottomTabIcon({source, tintColor}) {
  return (
    <Image
      source={source}
      style={{...styles.icon, ...{tintColor: tintColor}}}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    height: widthToDp(6),
    width: widthToDp(6),
    resizeMode: 'contain',
  },
});

export default BottomTabIcon;
