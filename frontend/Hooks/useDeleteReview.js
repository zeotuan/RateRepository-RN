import {useMutation} from '@apollo/client';
import {DELETE_REVIEW} from '../graphql/mutations';

const useDeleteReview = ({refetch}) => {
    const [deleteR,result] = useMutation(DELETE_REVIEW,{
        onCompleted: () => {refetch()}
    })
    
    const deleteReview = ({id}) => {
        deleteR({
            variables:{id}
        });
    };

    return [deleteReview,result];
}

export default useDeleteReview;