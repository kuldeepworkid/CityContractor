import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import globalStyle from '../common/globalStyleSheet';
import {BookingCard, Divider} from '../components/BookingCard';
import {HeaderSlab} from '../components/HeaderSlab';

function Bookings() {
  return (
    <View style={globalStyle.container}>
      <HeaderSlab title="Bookings" />
      <Divider />
      <BookingCard
        title="Excavator"
        subTitle="₹ 5,870"
        date="Delivery by 24 Aug"
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Bookings;
