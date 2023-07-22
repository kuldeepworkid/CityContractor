import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import globalStyle from '../common/globalStyleSheet';
import {HeaderSlab} from '../components/HeaderSlab';
import Carousal from '../components/Carousal';
import {widthToDp} from '../common/Responsive';
import fonts from '../common/fontObject';
import globalPixel from '../common/GlobalPixel';
import colors from '../common/Colors';
import {ButtonAuth} from '../components/Buttons';
import ModalCustom from '../components/ModalCustom';
import DeactivateAccount from '../components/DeactivateAccount';

function Details(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <View style={globalStyle.container}>
        <HeaderSlab title="Details" onPress={() => props.navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Carousal isBigSlider={true} />
          <Text style={styles.title}>Excavator</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </ScrollView>
        <View style={[globalStyle.horizontalSpaceBetween, styles.divider]}>
          <View>
            <Text style={styles.price}>Price</Text>
            <Text style={styles.value}>₹ 1,190/day</Text>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonAuth title="Book Now" onPress={() => setShowModal(true)} />
          </View>
        </View>
        {/* <ModalCustom
          visible={showModal}
          onRequestClose={() => setShowModal(false)}>
          <Text>hey</Text>
        </ModalCustom> */}
        <DeactivateAccount
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        />
      </View>
      <SafeAreaView style={{backgroundColor: colors.white}} />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.JakartaBold,
    fontSize: globalPixel.pixel_20,
    color: colors.black,
    lineHeight: globalPixel.pixel_32,
    marginVertical: widthToDp(2),
  },
  paragraph: {
    fontFamily: fonts.JakartaRegular,
    fontSize: globalPixel.pixel_14,
    color: colors.black,
    lineHeight: globalPixel.pixel_20,
  },
  buttonContainer: {width: '60%'},
  price: {
    fontFamily: fonts.JakartaMedium,
    fontSize: globalPixel.pixel_16,
    color: colors.black_8c,
  },
  value: {
    fontFamily: fonts.JakartaSemiBold,
    fontSize: globalPixel.pixel_18,
    color: colors.black,
  },
  divider: {
    borderTopWidth: 2,
    borderColor: colors.black_20,
    paddingTop: widthToDp(5),
  },
});

export default Details;
