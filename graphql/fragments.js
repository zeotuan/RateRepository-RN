import {gql} from '@apollo/client';

export const RepositoriesConnectionDetailFragment = gql`
    fragment RepositoriesConnectionDetails on RepositoryConnection{
        edges{
            node{
                id,
                reviewCount,
                ratingAverage,
                ownerAvatarUrl,
                description,
                language,
                stargazersCount,
                forksCount
            }
        }
    }
`