import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {loreum} from '../common/dummyData';
import fonts from '../common/fontObject';
import globalStyle from '../common/globalStyleSheet';
import {widthToDp} from '../common/Responsive';
import {HeaderSlab} from '../components/HeaderSlab';

function StaticPage() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={globalStyle.container}>
      <HeaderSlab title="Terms&Condition" />
      <Text style={styles.paragraph}>{String(loreum).repeat(2)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: fonts.JakartaRegular,
    fontSize: widthToDp(4.4),
    paddingTop: widthToDp(4),
    lineHeight: widthToDp(7.2),
    marginBottom: widthToDp(7.2),
  },
});

export default StaticPage;
