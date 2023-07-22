import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import colors from '../common/Colors';
import {phoneOsHandler} from '../common/commonFunction';
import fonts from '../common/fontObject';
import globalPixel from '../common/GlobalPixel';
import {widthToDp} from '../common/Responsive';
import icons from '../common/IconObject';
import globalStyle from '../common/globalStyleSheet';

function SearchBox({onChangeText, value}) {
  return (
    <View style={[styles.container, globalStyle.rowVerticalCenter]}>
      <Image source={icons.search} style={styles.icon} />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor={colors.black_60}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: colors.black_96,
    borderRadius: widthToDp(2),
  },
  textInput: {
    backgroundColor: colors.black_96,
    paddingVertical: phoneOsHandler(undefined, widthToDp(4)),
    borderRadius: widthToDp(2),
    paddingLeft: widthToDp(4),
    width: '100%',
  },
  icon: {
    height: widthToDp(4),
    width: widthToDp(4),
    resizeMode: 'contain',
    marginLeft: widthToDp(4),
  },
});

export default SearchBox;
