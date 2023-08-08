import { View, Text,StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { Card } from '../components';
import { list } from '../data/cardList';

const AllContest = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item}) => <Card item={item}/>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default AllContest;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FAFAFA',
        padding:16
    }
})