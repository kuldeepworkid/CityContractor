import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {alertCustom, phoneOsHandler} from '../common/commonFunction';
import fonts from '../common/fontObject';
import icons from '../common/IconObject';
import {widthToDp} from '../common/Responsive';
import Input from '../components/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ButtonAuth, ButtonBackAuth} from '../components/Buttons';
import colors from '../common/Colors';
import globalPixel from '../common/GlobalPixel';
import {validatePhoneNumber} from '../common/Validates';
import {alert_msg_phone} from '../common/messages';

function Login(props) {
  const [phoneNumber, setPhoneNumber] = useState(null);

  const onPressLogin = () => {
    if (validatePhoneNumber(phoneNumber)) {
      props.navigation.navigate('Signup');
    } else {
      alertCustom(alert_msg_phone);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAwareScrollView
        style={styles.keyboardAwareStyle}
        contentContainerStyle={styles.contentContainerStyle}>
        <ImageBackground source={icons.frame} style={styles.img}>
          <ButtonBackAuth onPress={() => props.navigation.goBack()} />
        </ImageBackground>

        <View style={styles.restContainer}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Let's Get Started</Text>
            <View style={{height: widthToDp(phoneOsHandler(5, 6.5))}} />
            <Input
              title="Phone Number"
              placeholder="Enter Your phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.subContainer}>
            <ButtonAuth
              title="Login"
              bgColor={colors.orange_yellow_moderate}
              color={colors.black}
              onPress={onPressLogin}
            />
            <Text style={styles.message}>
              By proceeding, you are agreeing to our
              <Text style={styles.linkText}> Terms & Conditions</Text> and
              <Text style={styles.linkText}> Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {height: widthToDp(90), width: '100%'},
  title: {
    fontFamily: fonts.JakartaBold,
    color: colors.white,
    fontSize: globalPixel.pixel_26,
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
    backgroundColor: colors.black_9,
  },
  safeAreaContainer: {flex: 1, backgroundColor: colors.black_9},
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

export default Login;
