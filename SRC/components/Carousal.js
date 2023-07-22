import React, {useRef, useState} from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import icons from '../common/IconObject';
import {widthToDp} from '../common/Responsive';
import colors from '../common/Colors';

function Carousal({isBigSlider}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  });

  const onViewableItemsChanged = React.useCallback(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }, []);

  const renderItem = ({}) => {
    return (
      <View style={styles.imgContainer}>
        <Image
          source={isBigSlider ? icons.jcb : icons.rectangle}
          style={isBigSlider ? styles.imgBig : styles.img}
        />
      </View>
    );
  };

  const keyExtractor = (_, i) => String(i);

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        data={[1, 2, 3]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.flatList}
        viewabilityConfig={viewabilityConfig.current}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <View style={styles.indicatorContainer}>
        {[1, 2, 3].map((_, i) => (
          <View
            key={String(i)}
            style={{
              ...styles.indicator,
              ...{
                backgroundColor:
                  currentIndex === i ? colors.black : colors.white,
              },
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {borderRadius: widthToDp(2), overflow: 'hidden'},
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: widthToDp(2),
  },
  indicator: {
    height: widthToDp(2),
    width: widthToDp(2),
    borderRadius: widthToDp(1),
    borderWidth: 1,
    marginRight: widthToDp(1),
  },
  imgContainer: {
    borderRadius: widthToDp(2),
    overflow: 'hidden',
  },
  img: {
    width: widthToDp(90),
    height: widthToDp(38),
  },
  imgBig: {
    width: widthToDp(90),
    height: widthToDp(85),
  },
});

export default Carousal;
