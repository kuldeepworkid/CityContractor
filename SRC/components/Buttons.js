import React from 'react';
import {StyleSheet, Pressable, Image, Text, View} from 'react-native';
import icons from '../common/IconObject';
import {widthToDp} from '../common/Responsive';
import {phoneOsHandler} from '../common/commonFunction';
import globalPixel from '../common/GlobalPixel';
import globalStyle from '../common/globalStyleSheet';

export function ButtonBack({onPress}) {
  // return (
  //   <Pressable hitSlop={hitSlop} onPress={onPress}>
  //     <Image source={icons.backArrow} style={styles.icon} />
  //   </Pressable>
  // );
  return (
    <ImgButton
      source={icons.backArrow}
      iconStyle={styles.icon}
      onPress={onPress}
    />
  );
}

export function ButtonForward({onPress}) {
  // return (
  //   <Pressable hitSlop={hitSlop} onPress={onPress}>
  //     <Image source={icons.rightArrow} style={styles.rightIconStyle} />
  //   </Pressable>
  // );
  return (
    <ImgButton
      source={icons.rightArrow}
      iconStyle={styles.rightIconStyle}
      onPress={onPress}
    />
  );
}

export function ButtonDownArrow({onPress}) {
  // return (
  //   <Pressable hitSlop={hitSlop} onPress={onPress}>
  //     <Image source={icons.downArrow} style={styles.downArrowIconStyle} />
  //   </Pressable>
  // );
  return (
    <ImgButton
      source={icons.downArrow}
      iconStyle={styles.downArrowIconStyle}
      onPress={onPress}
    />
  );
}

export function ButtonBackAuth({onPress}) {
  return (
    <ImgButton
      source={icons.backArrow}
      iconStyle={styles.backArrow}
      onPress={onPress}
    />
  );
}

function ImgButton({source, onPress, iconStyle}) {
  return (
    <Pressable hitSlop={hitSlop} onPress={onPress}>
      <Image source={source} style={iconStyle} />
    </Pressable>
  );
}

export function ButtonAuth({
  title,
  enableIcon,
  onPress,
  bgColor = '#000',
  color = '#FFF',
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{...styles.authContainer, ...{backgroundColor: bgColor}}}>
      <View style={globalStyle.centerInRow}>
        <Text style={{...styles.authTitle, ...{color: color}}}>{title}</Text>
        {enableIcon ? (
          <Image
            source={icons.arrowRightWhite}
            style={[styles.authImg, styles.authImgMargin]}
            resizeMode="contain"
          />
        ) : (
          <View style={styles.authImg} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: globalPixel.pixel_24,
    width: globalPixel.pixel_24,
    resizeMode: 'contain',
  },
  rightIconStyle: {
    width: widthToDp(phoneOsHandler(3.12, 2.9)),
    height: widthToDp(phoneOsHandler(2.6, 2.4)),
    resizeMode: 'contain',
  },
  downArrowIconStyle: {
    width: globalPixel.pixel_14,
    height: globalPixel.pixel_14,
    resizeMode: 'contain',
  },

  authContainer: {
    paddingVertical: widthToDp(4.2),
    borderRadius: widthToDp(2),
    width: '90%',
  },
  authTitle: {
    fontSize: globalPixel.pixel_16,
  },
  authImg: {
    width: globalPixel.pixel_24,
    height: globalPixel.pixel_24,
  },
  authImgMargin: {marginLeft: widthToDp(2)},
  backArrow: {
    height: globalPixel.pixel_24,
    width: globalPixel.pixel_24,
    resizeMode: 'contain',
    margin: widthToDp(3),
  },
});

const hitSlop = {
  bottom: widthToDp(3),
  left: widthToDp(3),
  right: widthToDp(3),
  top: widthToDp(3),
};
