import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import ReviewItem from './ReviewItem'

const RepositoryReviews = (props) => {
    const {reviewNodes} = props
    const onEndReach = () => {
      props.fetchMore();
    }
    return (
        <FlatList
                onEndReached={onEndReach}
                data={reviewNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({item})=> <ReviewItem key={item.id} item={item}/>}
        />
    );
}

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

const ItemSeparator = () => <View style={styles.separator} />;

export default RepositoryReviews;