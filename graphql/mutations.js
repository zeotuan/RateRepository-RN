import {gql} from '@apollo/client';

export const SIGNIN = gql`
    mutation signin($credentials:AuthorizeInput){
        authorize(credentials:$credentials){
            accessToken
        }
    }
`

export const CREATE_REVIEW = gql`
    mutation createReview($review: CreateReviewInput){
        createReview(review:$review){
            id,
            rating,
            createdAt,
            text
        }
    }
`