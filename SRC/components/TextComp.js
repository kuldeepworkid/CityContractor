import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../common/Colors';
import fonts from '../common/fontObject';
import globalPixel from '../common/GlobalPixel';
import globalStyle from '../common/globalStyleSheet';

function TextComp({title, value, isBold}) {
  return (
    <View style={globalStyle.horizontalSpaceBetween}>
      <Text style={[styles.text, isBold ? styles.bold : {}]}>{title}</Text>
      <Text style={[styles.text1, isBold ? styles.bold : {}]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    ...globalStyle.dividerProfile,
    fontFamily: fonts.JakartaRegular,
    fontSize: globalPixel.pixel_16,
  },
  text1: {
    ...globalStyle.dividerProfile,
    fontFamily: fonts.JakartaMedium,
    fontSize: globalPixel.pixel_16,
    color: colors.black,
  },
  bold: {fontFamily: fonts.JakartaBold},
});

export default TextComp;
