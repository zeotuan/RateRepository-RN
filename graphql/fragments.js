import {gql} from '@apollo/client';

export const RepositoriesConnectionDetailFragment = gql`
    fragment RepositoriesConnectionDetails on RepositoryConnection{
        edges{
            node{
                id,
                name,
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

export const RepositoryFullDetailsFragment = gql`
    fragment RepositoryFullDetails on Repository{
        id,
        ownerName,
        name,
        createdAt,
        fullName,
        reviews{
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
`