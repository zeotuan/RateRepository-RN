import {gql} from '@apollo/client';
import {UserFullDetailFragment} from './fragments';

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

export const SIGN_UP = gql`
    mutation createUser($user: CreateUserInput){
        createUser(user:$user){
            ...UserFullDetailFragment
        }
    }${UserFullDetailFragment}
`