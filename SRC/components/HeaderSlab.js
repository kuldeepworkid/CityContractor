import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../common/Colors';
import {phoneOsHandler} from '../common/commonFunction';
import fonts from '../common/fontObject';
import globalStyle from '../common/globalStyleSheet';
import {widthToDp} from '../common/Responsive';
import {ButtonBack} from './Buttons';

export function HeaderSlab({title, onPress}) {
  return (
    <View style={globalStyle.horizontalSpaceBetween}>
      <ButtonBack onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {height: widthToDp(6), width: widthToDp(6)},
  title: {
    fontFamily: fonts.JakartaMedium,
    fontSize: widthToDp(5),
    color: colors.black,
    lineHeight: widthToDp(phoneOsHandler(13.6, 12.5)),
  },
});
