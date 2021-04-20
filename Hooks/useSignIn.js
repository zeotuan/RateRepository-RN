import {useMutation} from '@apollo/client';
import {SIGNIN} from '../graphql/mutations';

const useSignIn = () => {
    const [mutate,result] = useMutation(SIGNIN,({
        //onCompleted:(data)=>{console.log(data)}
    }));

    const signIn = async ({username,password}) => {
        mutate({variables:{credentials:{username,password}}});
    }

    return [signIn,result]
}

export default useSignIn