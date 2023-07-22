import colors from './Colors';

const {StyleSheet} = require('react-native');
const {widthToDp} = require('./Responsive');

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: widthToDp(4),
    paddingHorizontal: widthToDp(5),
    backgroundColor: colors.white,
  },
  dividerProfile: {marginBottom: widthToDp(3)},
  horizontalSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowVerticalCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerInRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default globalStyle;
