import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_AUTHORIZED_USER} from '../graphql/queries'
import Text from './Text';
import MyReviewItem from './MyReviewItem';

const MyReview = () => {
    const {result,refetch} = useQuery(GET_AUTHORIZED_USER);
    if(result.loading){
        return <Text> Loading reviews... </Text>
    }
    const onEndReach = () => {
        console.log('reached end')
    }

    const reviews = result.data.authorizedUser.reviews.edges.map(e => e.node)
    return (
        <View>
            <FlatList 
                onEndReached={onEndReach}
                data={reviews}
                renderItem={({item}) => {return (<MyReviewItem key={item.id} item={item} refetch={refetch}/>)}}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default MyReview;