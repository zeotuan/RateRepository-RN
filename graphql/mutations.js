import {gql} from '@apollo/client';

export const SIGNIN = gql`
    mutation signin($credentials:AuthorizeInput){
        authorize(credentials:$credentials){
            accessToken
        }
    }
`