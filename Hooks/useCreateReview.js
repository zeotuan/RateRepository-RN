import {useMutation} from '@apollo/client';
import {CREATE_REVIEW} from '../graphql/mutations';

const useCreateReview = () => {
    const [review,result] = useMutation(CREATE_REVIEW);

    const createReview = async ({repositoryName,ownerName,rating,text}) => {
        await review({
            variables:{
                repositoryName,ownerName,rating,text
            }
        });
    }

    return [createReview,result];

}


export default useCreateReview;