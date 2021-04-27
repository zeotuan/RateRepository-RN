import React from 'react';
import {View,StyleSheet, Button, Linking} from 'react-native';
import {useQuery} from '@apollo/client';
import {useParams} from  'react-router-native';
import Text from './Text';
import RepositoryItem from './RepositoryItem';
import {GET_REPOSITORY} from '../graphql/queries';
import RepositoryReviews from './RepositoryReviews';

const Repository = (props) => {
    const id = useParams().id
    const {data,loading,fetchMore} = useQuery(GET_REPOSITORY,{
        variables:{
            id,
            first:1,
        }
    })

    const handleFetchMore = () => {
        const canHandleFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage
        if(!canHandleFetchMore){
            return;
        }

        fetchMore({
            variables:{
                id,
                first:1,
                after:data.repository.reviews.pageInfo.endCursor,
            }
        })
    }

    if(loading){
        return <Text>Loading Repository</Text>
    }
    const reviewNodes = data.repository.reviews.edges.map(edge => edge.node)
    return (
        <View style={styles.repository}> 
            <RepositoryItem item={data.repository}/>
            <Button title='Open in Github' style={styles.button} onPress={()=>{Linking.openURL(`${data.repository.url}`)}}></Button>
            <RepositoryReviews reviewNodes={reviewNodes} fetchMore={handleFetchMore} />
        </View>
    )
}


const styles = StyleSheet.create({
    repository:{
        flexDirection:'column',
        padding:10,
    },
    button:{
        backgroundColor:'blue',
        color:'white',
        borderRadius:5,
    }
})


export default Repository
