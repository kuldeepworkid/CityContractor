import React from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import {HeaderSlab} from '../components/HeaderSlab';
import globalStyle from '../common/globalStyleSheet';
import icons from '../common/IconObject';
import Accordion from '../components/Accordion';
import fonts from '../common/fontObject';
import {widthToDp} from '../common/Responsive';
import globalPixel from '../common/GlobalPixel';
import colors from '../common/Colors';
import {ImgTextProfile} from '../components/ImgText';

const helpArr = ['Terms & Conditions', 'Privacy Policy', 'Contact Us'];
function Profile() {
  return (
    <View style={globalStyle.container}>
      <HeaderSlab title="Profile" />
      <View style={{paddingTop: widthToDp(4)}}>
        <Text style={styles.title}>James Gavin</Text>
        <ImgTextProfile source={icons.email} title="james.gavin245@gmail.com" />
        <ImgTextProfile source={icons.call} title="+919828729832" />
        <View style={styles.divider} />
        <Accordion title="Settings">
          <View style={globalStyle.dividerProfile}>
            <View
              style={[
                globalStyle.horizontalSpaceBetween,
                globalStyle.dividerProfile,
              ]}>
              <Text style={styles.text}>Push Notification</Text>
              <Switch style={Platform.OS === 'ios' ? styles.switchIos : {}} />
            </View>
            <Text style={styles.text}>Deactivate Account</Text>
          </View>
        </Accordion>
        <Accordion title="Help">
          <View style={globalStyle.dividerProfile}>
            {helpArr.map(e => (
              <Text key={e} style={styles.text}>
                {e}
              </Text>
            ))}
          </View>
        </Accordion>
        <Text style={styles.logout}>Logout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {
    ...globalStyle.dividerProfile,
    fontFamily: fonts.JakartaRegular,
    fontSize: globalPixel.pixel_13,
    color: colors.black,
  },
  title: {
    ...globalStyle.dividerProfile,
    fontFamily: fonts.JakartaBold,
    fontSize: globalPixel.pixel_20,
    color: colors.black,
  },
  divider: {
    borderWidth: 2,
    borderColor: colors.black_20,
    marginTop: widthToDp(2),
    marginBottom: widthToDp(4),
  },
  switchIos: {transform: [{scaleX: 0.7}, {scaleY: 0.7}]},
  logout: {
    fontFamily: fonts.JakartaSemiBold,
    color: colors.red_moderate,
    fontSize: globalPixel.pixel_14,
  },
});

export default Profile;
