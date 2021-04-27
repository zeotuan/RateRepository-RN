import {useEffect,useState} from 'react'
import {useLazyQuery} from '@apollo/client';
import {REPOSITORIES_CONNECTION} from '../graphql/queries'

const useRepositories = () => {
    const [variables,setVariables] = useState({
        orderBy:'CREATED_AT',
        orderDirection:'ASC',
        searchKeyword:'',
    });
    const [getRepositoriesConnection,{data,loading}] = useLazyQuery(REPOSITORIES_CONNECTION, {
        onCompleted: data => console.log('complted'),
        variables
    })
    
    // const fetchRepositories = async () => {
    //     setLoading(true);

    //     const response = await fetch('http://192.168.1.25:5000/api/repositories');
    //     const json = await response.json();
    //     setLoading(false);
    //     setRepositories(json);
    // }

    const fetchRepositories = async () => {
        getRepositoriesConnection({variables:variables});
    }
    
    const changeVariables = (values) => {
        setVariables({...variables,...values})
    }

    useEffect(()=>{
        fetchRepositories();
    },[])

    return {repositories:data,loading,refetch:fetchRepositories, changeVariables};
}

export default useRepositories;