import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../common/Colors';
import fonts from '../common/fontObject';
import globalPixel from '../common/GlobalPixel';
import globalStyle from '../common/globalStyleSheet';
import {widthToDp} from '../common/Responsive';

function ImgText({source, title, iconStyle, titleStyle}) {
  return (
    <View style={[globalStyle.rowVerticalCenter, globalStyle.dividerProfile]}>
      <Image source={source} style={iconStyle} />
      <Text style={titleStyle}>{title}</Text>
    </View>
  );
}

export function ImgTextProfile({title, source}) {
  return (
    <ImgText
      title={title}
      source={source}
      iconStyle={styles.icon}
      titleStyle={styles.title}
    />
  );
}

export function ImgTextHome({title, source}) {
  return (
    <ImgText
      title={title}
      source={source}
      iconStyle={styles.iconHome}
      titleStyle={styles.titleHome}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    height: widthToDp(4),
    width: widthToDp(4),
    resizeMode: 'contain',
    tintColor: colors.black_8c,
    marginRight: widthToDp(2.5),
  },
  title: {
    color: colors.black_8c,
    fontFamily: fonts.JakartaRegular,
    fontSize: globalPixel.pixel_16,
  },
  iconHome: {
    height: widthToDp(4.2),
    width: widthToDp(4.2),
    resizeMode: 'contain',
    tintColor: colors.red_moderate,
    marginRight: widthToDp(0.8),
  },
  titleHome: {
    color: colors.bluish_purple_pastel,
    fontFamily: fonts.JakartaRegular,
    fontSize: globalPixel.pixel_14,
    textDecorationLine: 'underline',
  },
});
