import {useMutation,useApolloClient} from '@apollo/client';
import {SIGNIN} from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const [mutate,result] = useMutation(SIGNIN,({
        onCompleted:async (data)=>{
            await authStorage.setAccessToken(data.authorize.accessToken);
            apolloClient.resetStore();
        }
    }));
    
    const signIn = async ({username,password}) => {
        await mutate({variables:{credentials:{username,password}}});
    }

    return [signIn,result]
}

export default useSignIn