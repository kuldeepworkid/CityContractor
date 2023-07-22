import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../common/Colors';
import fonts from '../common/fontObject';
import globalPixel from '../common/GlobalPixel';
import globalStyle from '../common/globalStyleSheet';
import {widthToDp} from '../common/Responsive';
import {ButtonForward} from './Buttons';

export default function TitleSlab({title, onPress}) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        JCB
      </Text>
      <ButtonForward onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyle.horizontalSpaceBetween,
    paddingHorizontal: widthToDp(0.9),
  },
  icon: {height: widthToDp(6), width: widthToDp(6)},
  title: {
    fontFamily: fonts.JakartaBold,
    fontSize: globalPixel.pixel_12,
    color: colors.black,
    width: '80%',
  },
});
