import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import globalStyle from '../common/globalStyleSheet';
import {widthToDp} from '../common/Responsive';
import {HeaderSlab} from '../components/HeaderSlab';
import SquareBoxWithTitle from '../components/SquareBoxWithTitle';

function ProductList(props) {
  const renderItem = ({item}) => (
    <SquareBoxWithTitle onPress={() => props.navigation.navigate('Details')} />
  );
  return (
    <View style={globalStyle.container}>
      <HeaderSlab title="Machines" onPress={() => props.navigation.goBack()} />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  columnWrapperStyle: {justifyContent: 'space-between'},
  flatList: {paddingTop: widthToDp(4)},
});

export default ProductList;
