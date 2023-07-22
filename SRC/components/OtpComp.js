import React, {useRef} from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import {View, StyleSheet, Text} from 'react-native';
import {widthToDp} from '../common/Responsive';
import fonts from '../common/fontObject';
import colors from '../common/Colors';

function OtpComp() {
  let otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue('1234');
  };

  return (
    <View>
      <OTPTextInput
        ref={e => (otpInput = e)}
        inputCount={6}
        inputCellLength={1}
        containerStyle={styles.textInputContainer}
        textInputStyle={styles.roundedTextInput}
      />
      <Text style={styles.text}>
        Didn't get the code?<Text style={styles.subText}> Resend</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: widthToDp(4),
  },
  roundedTextInput: {
    borderRadius: widthToDp(2),
    borderBottomWidth: 0,
    backgroundColor: colors.black_2f,
    height: widthToDp(12),
    width: widthToDp(12),
    color: colors.white,
  },
  text: {color: colors.white, fontFamily: fonts.JakartaRegular},
  subText: {
    color: colors.blue_medium,
    fontFamily: fonts.JakartaBold,
    textDecorationLine: 'underline',
  },
});

export default OtpComp;
