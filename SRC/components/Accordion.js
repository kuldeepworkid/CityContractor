import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../common/Colors';
import fonts from '../common/fontObject';
import globalPixel from '../common/GlobalPixel';
import globalStyle from '../common/globalStyleSheet';
import icons from '../common/IconObject';
import {widthToDp} from '../common/Responsive';
import {ButtonDownArrow} from './Buttons';

function Accordion({title, children}) {
  const [show, setShow] = useState(true);
  const handleShowHide = () => setShow(!show);
  return (
    <>
      <View
        style={[
          globalStyle.horizontalSpaceBetween,
          globalStyle.dividerProfile,
        ]}>
        <Text style={styles.title}>{title}</Text>
        <ButtonDownArrow onPress={handleShowHide} />
      </View>
      {show && children}
      <Image source={icons.line} style={styles.lineIcon} />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    ...globalStyle.dividerProfile,
    fontFamily: fonts.JakartaSemiBold,
    fontSize: globalPixel.pixel_14,
    color: colors.black,
  },
  lineIcon: {
    width: '100%',
    height: widthToDp(0.4),
    ...globalStyle.dividerProfile,
  },
});

export default Accordion;
