import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../common/Colors';
import {phoneOsHandler} from '../common/commonFunction';
import fonts from '../common/fontObject';
import globalPixel from '../common/GlobalPixel';
import globalStyle from '../common/globalStyleSheet';
import icons from '../common/IconObject';
import {widthToDp} from '../common/Responsive';

export function BookingCard({title, subTitle, date, isCartCard}) {
  return (
    <View style={globalStyle.rowVerticalCenter}>
      <Image
        source={icons.jcb}
        style={isCartCard ? styles.cartImg : styles.img}
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={isCartCard ? styles.dateText : styles.price}>
          {subTitle}
        </Text>
        <Text>
          {!isCartCard && (
            <View style={globalStyle.rowVerticalCenter}>
              <Image source={icons.dot} style={styles.dot} />
              <Text style={styles.date}>{date}</Text>
            </View>
          )}
        </Text>
      </View>
    </View>
  );
}

export function Divider() {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.line} />
      <Text>20Aug, 2023</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    resizeMode: 'contain',
    width: widthToDp(phoneOsHandler(22.2, 20.33)),
    height: widthToDp(phoneOsHandler(21.7, 19.81)),
    borderRadius: widthToDp(2),
  },
  cartImg: {
    resizeMode: 'contain',
    width: widthToDp(phoneOsHandler(18.9, 17.3)),
    height: widthToDp(phoneOsHandler(18.4, 16.9)),
    borderRadius: widthToDp(2),
  },
  dot: {
    resizeMode: 'contain',
    width: widthToDp(1.5),
    height: widthToDp(1.5),
    marginRight: widthToDp(1),
    tintColor: colors.orange_yellow_vibrant,
  },
  title: {
    fontFamily: fonts.JakartaBold,
    fontSize: globalPixel.pixel_20,
    lineHeight: widthToDp(phoneOsHandler(8.9, 8.11)),
    color: colors.black,
  },
  price: {
    fontSize: globalPixel.pixel_14,
    fontFamily: fonts.JakartaSemiBold,
  },
  date: {
    fontSize: globalPixel.pixel_13,
  },
  subContainer: {marginLeft: widthToDp(2)},
  dividerContainer: {
    ...globalStyle.horizontalSpaceBetween,
    overflow: 'hidden',
  },
  line: {
    borderWidth: 1,
    borderColor: colors.black_20,
    width: '35%',
    overflow: 'hidden',
  },
  dateText: {
    fontFamily: fonts.JakartaRegular,
    fontSize: globalPixel.pixel_16,
  },
});
