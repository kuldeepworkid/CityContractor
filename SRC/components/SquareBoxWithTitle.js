import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import icons from '../common/IconObject';
import {widthToDp} from '../common/Responsive';
import TitleSlab from './TitleSlab';

function SquareBoxWithTitle({onPress}) {
  return (
    <View style={styles.container}>
      <Image source={icons.truck} style={styles.img} />
      <TitleSlab onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: widthToDp(42), paddingBottom: widthToDp(4)},
  img: {
    width: widthToDp(42),
    height: widthToDp(42),
    resizeMode: 'contain',
    marginBottom: widthToDp(2),
  },
});

export default SquareBoxWithTitle;
