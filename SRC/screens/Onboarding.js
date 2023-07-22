import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';
import colors from '../common/Colors';
import {phoneOsHandler} from '../common/commonFunction';
import fonts from '../common/fontObject';
import globalPixel from '../common/GlobalPixel';
import icons from '../common/IconObject';
import {widthToDp} from '../common/Responsive';
import {ButtonAuth} from '../components/Buttons';

function Onboarding(props) {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ImageBackground style={styles.container} source={icons.pocklane}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, styles.titleColor1]}>
            Construction inventory
          </Text>
          <Text style={[styles.title, styles.titleColor2]}>
            for all your needs
          </Text>
          {/* <Text style={styles.title}>needs</Text> */}
        </View>
        <Image source={icons.group} style={styles.iconGroup} />
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <ButtonAuth
          title="Get Started"
          onPress={() => props.navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 0.88, backgroundColor: colors.white},
  iconGroup: {
    resizeMode: 'cover',
    width: '100%',
    flex: 1,
    // backgroundColor: 'red',
    marginTop: widthToDp(25),
  },
  safeContainer: {flex: 1, justifyContent: 'space-between'},
  buttonContainer: {flex: 0.12, justifyContent: 'center', alignItems: 'center'},
  title: {
    fontFamily: fonts.JakartaSemiBold,
    fontSize: globalPixel.pixel_50,
    lineHeight: globalPixel.pixel_59,
  },
  textContainer: {position: 'absolute', paddingHorizontal: widthToDp(5)},
  titleColor1: {color: colors.orange_yellow_vibrant},
  titleColor2: {color: colors.black},
});

export default Onboarding;
