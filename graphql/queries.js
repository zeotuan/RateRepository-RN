import {gql} from '@apollo/client';
import {
    RepositoriesConnectionDetailFragment,
    RepositoryFullDetailsFragment
} from './fragments'


export const REPOSITORIES_CONNECTION = gql`
    query getRepositoriesConnection($after: String, $first: Int,$orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String, $ownerName:String){
        repositories(after:$after, first:$first,orderDirection:$orderDirection, orderBy:$orderBy, searchKeyword:$searchKeyword, ownerName:$ownerName ){
            ...RepositoriesConnectionDetails
        }
    }
    ${RepositoriesConnectionDetailFragment}
`
export const CHECK_AUTHORIZATION = gql`
    query getAuthorizedUser{
        authorizedUser{
            id,
            username,
            reviewCount,
        }
    }
`


export const GET_REPOSITORY = gql`
    query getRepository($id: ID!){
        repository(id:$id){
        ...RepositoryFullDetails
        }
    }${RepositoryFullDetailsFragment}
`