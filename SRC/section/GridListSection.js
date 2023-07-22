import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SquareBoxWithTitle from '../components/SquareBoxWithTitle';
import {widthToDp} from '../common/Responsive';

function GridListSection({ListHeaderComponent, navigation}) {
  const renderItem = ({item}) => (
    <SquareBoxWithTitle onPress={() => navigation.navigate('ProductList')} />
  );
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapperStyle}
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  columnWrapperStyle: {justifyContent: 'space-between'},
  flatList: {paddingTop: widthToDp(4)},
});

export default GridListSection;
