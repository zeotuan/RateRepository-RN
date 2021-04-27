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
    query getRepository($id: ID!, $first:Int, $after:String){
        repository(id:$id){
            id,
            ownerName,
            name,
            createdAt,
            fullName,
            reviews(first:$first, after:$after){
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                },
                pageInfo{
                    hasPreviousPage,
                    hasNextPage,
                    startCursor,
                    endCursor
                }
            },
            ratingAverage,
            reviewCount,
            stargazersCount,
            watchersCount,
            forksCount,
            openIssuesCount,
            url,
            ownerAvatarUrl,
            description,
            language,
            authorizedUserHasReviewed,
        }
    }
`