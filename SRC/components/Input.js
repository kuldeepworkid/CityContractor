import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import colors from '../common/Colors';
import {phoneOsHandler} from '../common/commonFunction';
import fonts from '../common/fontObject';
import globalPixel from '../common/GlobalPixel';
import {widthToDp} from '../common/Responsive';

function Input({
  title,
  placeholder,
  onChangeText,
  value,
  keyboardType = 'default',
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.black_60}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: '90%'},
  title: {
    color: colors.white,
    marginBottom: widthToDp(2),
    fontSize: globalPixel.pixel_14,
    fontFamily: fonts.JakartaRegular,
  },
  textInput: {
    backgroundColor: colors.black_2f,
    paddingVertical: phoneOsHandler(undefined, widthToDp(4)),
    color: colors.white,
    borderRadius: widthToDp(2),
    paddingLeft: widthToDp(4),
  },
});

export default Input;
