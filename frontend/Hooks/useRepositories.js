import {useEffect,useState} from 'react'
import {useQuery    } from '@apollo/client';
import {REPOSITORIES_CONNECTION} from '../graphql/queries'

const useRepositories = () => {
    const [variables,setVariables] = useState({
        first:2,
        orderBy:'CREATED_AT',
        orderDirection:'ASC',
        searchKeyword:'',
    });
    const {data,loading,fetchMore,...result} = useQuery(REPOSITORIES_CONNECTION, {
        onCompleted: data => console.log(data),
        variables
    })
    
    
    const changeVariables = (values) => {
        setVariables({...variables,...values})
    }

    const handleFetchMore = () => {
        const canHandleFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

        if(!canHandleFetchMore){
            return;
        }

        fetchMore({
            variables:{
                after:data.repositories.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    return {
        repositories:data,
        fetchMore:handleFetchMore,
        loading,
        changeVariables, 
        ...result};
}

export default useRepositories;