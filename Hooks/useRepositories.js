import {useEffect} from 'react'
import {useLazyQuery} from '@apollo/client';
import {REPOSITORIES_CONNECTION} from '../graphql/queries'

const useRepositories = () => {
    const [getRepositoriesConnection,{data,loading}] = useLazyQuery(REPOSITORIES_CONNECTION, {
        //onCompleted: data => console.log(data)
    })
    // const fetchRepositories = async () => {
    //     setLoading(true);

    //     const response = await fetch('http://192.168.1.25:5000/api/repositories');
    //     const json = await response.json();
    //     setLoading(false);
    //     setRepositories(json);
    // }

    const fetchRepositories = async (orderBy='CREATED_AT',orderDirection='ASC', searchKeyword='') => {
        // let order
        // if(orderBy){
        //     order.orderBy = orderBy
        // }
        // if(orderDirection){
        //     order.orderDirection = orderDirection
        // }
        getRepositoriesConnection({variables:{orderBy,orderDirection,searchKeyword}});
    }
    
    useEffect(()=>{
        fetchRepositories();
    },[])

    return {repositories:data,loading,refetch:fetchRepositories};
}

export default useRepositories;