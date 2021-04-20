import React from 'react';
import {View,Text, StyleSheet, FlatList} from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../Hooks/useRepositories';

const RepositoryList = () => {

  const {repositories} = useRepositories();
  const repositoryNodes = repositories
  ? repositories.repositories.edges.map(edge => edge.node)
  : []
  
  return (
    <FlatList
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