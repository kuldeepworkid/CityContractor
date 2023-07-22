import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GridListSection from '../section/GridListSection';
import globalStyle from '../common/globalStyleSheet';
import {ImgTextHome} from '../components/ImgText';
import icons from '../common/IconObject';
import fonts from '../common/fontObject';
import globalPixel from '../common/GlobalPixel';
import colors from '../common/Colors';
import {widthToDp} from '../common/Responsive';
import {phoneOsHandler} from '../common/commonFunction';
import SearchBox from '../components/SearchBox';
import Carousal from '../components/Carousal';

function Home(props) {
  return (
    <View style={globalStyle.container}>
      <ImgTextHome source={icons.location} title="Noida 56" />
      <View style={{marginBottom: widthToDp(phoneOsHandler(2, 2.5))}} />

      <Text style={styles.title}>Construction Inventory</Text>
      <Text style={styles.subTitle}>for all your needs</Text>
      <View style={{marginBottom: widthToDp(8)}} />

      <SearchBox />
      <View style={{marginBottom: widthToDp(8)}} />

      <GridListSection
        ListHeaderComponent={ListHeaderComponent}
        navigation={props.navigation}
      />
    </View>
  );
}

function ListHeaderComponent() {
  return (
    <>
      <Carousal />
      <Text numberOfLines={1} style={styles.heading}>
        JCB
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.JakartaBold,
    fontSize: globalPixel.pixel_22,
    color: colors.orange_yellow_medium,
  },
  subTitle: {
    fontFamily: fonts.JakartaRegular,
    fontSize: globalPixel.pixel_22,
    color: colors.bluish_purple_pastel,
  },
  heading: {
    fontFamily: fonts.JakartaBold,
    fontSize: globalPixel.pixel_12,
    color: colors.black,
    marginTop: widthToDp(2),
  },
});

export default Home;
