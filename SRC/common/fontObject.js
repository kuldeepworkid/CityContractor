import {Platform} from 'react-native';
const fonts = {
  JakartaBold:
    Platform.OS === 'ios' ? 'Plus Jakarta Sans Bold' : 'PlusJakartaSans-Bold',
  JakartaRegular:
    Platform.OS === 'ios'
      ? 'Plus Jakarta Sans Regular'
      : 'PlusJakartaSans-Regular',
  JakartaMedium:
    Platform.OS === 'ios'
      ? 'Plus Jakarta Sans Medium'
      : 'PlusJakartaSans-Medium',
  JakartaSemiBold:
    Platform.OS === 'ios'
      ? 'Plus Jakarta Sans SemiBold'
      : 'PlusJakartaSans-SemiBold',
};
export default fonts;
