import {phoneOsHandler} from './commonFunction';
import {widthToDp} from './Responsive';

const globalPixel = {
  pixel_12: widthToDp(phoneOsHandler(3.3, 3.02)),
  pixel_13: widthToDp(phoneOsHandler(3.6, 3.3)),
  pixel_14: widthToDp(phoneOsHandler(3.9, 3.6)),
  pixel_16: widthToDp(phoneOsHandler(4.4, 4.1)),
  pixel_18: widthToDp(5),
  pixel_20: widthToDp(phoneOsHandler(5.6, 5.1)),
  pixel_22: widthToDp(phoneOsHandler(6.1, 5.6)),
  pixel_24: widthToDp(phoneOsHandler(6.7, 6.1)),
  pixel_26: widthToDp(phoneOsHandler(7.2, 6.6)),
  pixel_32: widthToDp(phoneOsHandler(8.9, 8.12)),
  pixel_50: widthToDp(phoneOsHandler(11.1, 11.2)),
  pixel_59: widthToDp(phoneOsHandler(13.6, 13.5)),
};
export default globalPixel;
