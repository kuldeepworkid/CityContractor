import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {phoneOsHandler} from '../common/commonFunction';
import fonts from '../common/fontObject';
import icons from '../common/IconObject';
import {widthToDp} from '../common/Responsive';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ButtonAuth} from '../components/Buttons';
import OtpComp from '../components/OtpComp';
import colors from '../common/Colors';
import globalPixel from '../common/GlobalPixel';
import ModalCustom from '../components/ModalCustom';

function DeactivateAccount({visible, onRequestClose}) {
  return (
    <ModalCustom visible={visible} onRequestClose={onRequestClose}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <KeyboardAwareScrollView
          style={styles.keyboardAwareStyle}
          contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.restContainer}>
            <View style={styles.subContainer}>
              <>
                <Text style={styles.title}>Verification Code</Text>
                <Text style={styles.subTitle}>
                  Enter the 6 digit verification code sent to +918973032323
                </Text>
              </>
              <View style={{height: widthToDp(phoneOsHandler(12, 13.5))}} />
              <OtpComp />
            </View>
            <View style={styles.subContainer}>
              <ButtonAuth
                title="Verify"
                bgColor={colors.orange_yellow_moderate}
                color={colors.black}
                // onPress={() => props.navigation.navigate('BottomTabNav')}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ModalCustom>
  );
}

const styles = StyleSheet.create({
  img: {height: widthToDp(90), width: '100%'},
  title: {
    fontFamily: fonts.JakartaBold,
    fontSize: globalPixel.pixel_26,
    alignSelf: 'flex-start',
    paddingHorizontal: widthToDp(5),
  },
  subTitle: {
    fontFamily: fonts.JakartaRegular,
    fontSize: globalPixel.pixel_14,
    alignSelf: 'flex-start',
    paddingHorizontal: widthToDp(5),
  },
  message: {
    color: colors.black_auth,
    fontFamily: fonts.JakartaMedium,
    fontSize: widthToDp(phoneOsHandler(3.5, 3.1)),
    paddingHorizontal: widthToDp(5),
    alignSelf: 'flex-start',
    marginTop: widthToDp(5),
  },
  keyboardAwareStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  safeAreaContainer: {flex: 1, backgroundColor: '#181818'},
  restContainer: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  subContainer: {
    alignItems: 'center',
    width: '100%',
    paddingBottom: widthToDp(2),
  },
  contentContainerStyle: {
    justifyContent: 'space-between',
    flexGrow: 1,
    alignItems: 'center',
  },
  linkText: {textDecorationLine: 'underline'},
});

export default DeactivateAccount;
