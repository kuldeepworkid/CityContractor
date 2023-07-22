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
import {
  alert_msg_email_empty,
  alert_msg_email_invalid,
  alert_msg_name,
} from '../common/messages';
import {validateEmail} from '../common/Validates';

function Signup(props) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  const onPressSignup = () => {
    if (!name) {
      alertCustom(alert_msg_name);
    } else if (!email) {
      alertCustom(alert_msg_email_empty);
    } else if (!validateEmail(email)) {
      alertCustom(alert_msg_email_invalid);
    } else {
      props.navigation.navigate('Otp');
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAwareScrollView
        style={styles.keyboardAwareStyle}
        contentContainerStyle={styles.contentContainerStyle}>
        {/* <Image source={icons.frame} style={styles.img} /> */}
        <ImageBackground source={icons.frame} style={styles.img}>
          <ButtonBackAuth onPress={() => props.navigation.goBack()} />
        </ImageBackground>
        <View style={styles.restContainer}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Let's Create Your Account</Text>
            <View style={{height: widthToDp(phoneOsHandler(5, 6.5))}} />
            <Input
              title="Full Name"
              placeholder="Enter our full name"
              onChangeText={setName}
              value={name}
            />
            <View style={{height: widthToDp(6)}} />
            <Input
              title="Email"
              placeholder="Enter your email address"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
            />
          </View>
          <ButtonAuth
            title="Signup"
            bgColor={colors.orange_yellow_moderate}
            color={colors.black}
            onPress={onPressSignup}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
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
    paddingBottom: widthToDp(2),
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

export default Signup;
