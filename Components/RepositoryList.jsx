import React, {useState, useRef} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../Hooks/useRepositories';
import ReviewFilter from './ReviewFilter';

const RepositoryList = () => {
  const {repositories,refetch} = useRepositories();
  const repositoryNodes = repositories
  ? repositories.repositories.edges.map(edge => edge.node)
  : []

  // const applyFilter = (orderBy, orderDirection) => {
  //   refetch(orderBy,orderDirection)
  // }

  const onEndReach = () => {
    console.log('reached end')
  }

  return (
    <FlatList
      onEndReached={onEndReach}
      ListHeaderComponent={<ReviewFilter refetch={refetch}/>}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item})=> <RepositoryItem key={item.id} item={item}/>}
    />
  )
}



const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

const ItemSeparator = () => <View style={styles.separator} />;




export default RepositoryList