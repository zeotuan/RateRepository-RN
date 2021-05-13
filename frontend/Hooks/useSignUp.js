import {useMutation} from '@apollo/client';
import {SIGN_UP} from '../graphql/mutations';


const useSignUp = () => {
    const [signUpUser,result] = useMutation(SIGN_UP);

    const signUp = async ({username,password}) => {
        await signUpUser({
            variables:{
                user:{username,password}
            }
        });
    }

    return [signUp,result];

}

export default useSignUp;