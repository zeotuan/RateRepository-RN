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
    const RepositoryResult = useQuery(GET_REPOSITORY,{
        variables:{id}
    })
    if(RepositoryResult.loading){
        return <Text>Loading Repository</Text>
    }
    const reviewNodes = RepositoryResult.data.repository.reviews.edges.map(edge => edge.node)

    return (
        <View style={styles.repository}> 
            <RepositoryItem item={RepositoryResult.data.repository}/>
            <Button title='Open in Github' style={styles.button} onPress={()=>{Linking.openURL(`${RepositoryResult.data.repository.url}`)}}></Button>
            <RepositoryReviews reviewNodes={reviewNodes} />
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
