import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../common/Colors';
import {phoneOsHandler} from '../common/commonFunction';
import fonts from '../common/fontObject';
import globalPixel from '../common/GlobalPixel';
import globalStyle from '../common/globalStyleSheet';
import {widthToDp} from '../common/Responsive';
import {BookingCard} from '../components/BookingCard';
import {ButtonAuth} from '../components/Buttons';
import {HeaderSlab} from '../components/HeaderSlab';
import TextComp from '../components/TextComp';

function Cart() {
  return (
    <View style={globalStyle.container}>
      <HeaderSlab title="Details" />
      <View style={{flex: 1}}>
        <BookingCard
          isCartCard={true}
          title="Excavator"
          subTitle="Jan 23 - Mar 24"
        />
        <View style={styles.divider} />
        <View>
          <Text style={styles.title}>Billing Details</Text>
          <TextComp title="Sub-total" value="₹ 5,870" />
          <TextComp title="GST (%)" value="₹ 0.00" />
          <TextComp title="Shipping fee" value="₹ 80" />
        </View>

        <View style={styles.divider1} />
        <TextComp title="Total" value="₹ 5,950" isBold={true} />
      </View>
      <View style={{alignItems: 'center'}}>
        <ButtonAuth title="Checkout" enableIcon={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    borderWidth: 2,
    borderColor: colors.black_20,
    marginVertical: widthToDp(5),
  },
  title: {
    ...globalStyle.dividerProfile,
    fontFamily: fonts.JakartaSemiBold,
    fontSize: globalPixel.pixel_14,
    color: colors.black,
  },
  divider1: {
    borderWidth: 0.5,
    borderColor: colors.black_20,
    marginVertical: widthToDp(5),
  },
});

export default Cart;
