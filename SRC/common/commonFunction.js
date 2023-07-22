import {Platform, Alert} from 'react-native';
import {alert_title} from './messages';

export const phoneOsHandler = (androidVal, iosVal) =>
  Platform.OS === 'ios' ? iosVal : androidVal;

export const alertCustom = (message, title) => {
  Alert.alert(title || alert_title, message, [
    {
      text: 'OK',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    // {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
};
