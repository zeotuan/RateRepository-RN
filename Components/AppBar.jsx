import React from 'react';
import { View, StyleSheet, Pressable , Text, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {Link, useHistory} from 'react-router-native';
import {GET_AUTHORIZED_USER} from '../graphql/queries'
import { useQuery } from '@apollo/client';
import useAuthStorage from '../Hooks/useAuthStorage';
import {useApolloClient} from '@apollo/client'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'black',
    opacity:0.5,
    
    // ...
  },
  appBarText:{
      color:'white'
  },
  scrollViewContentContainer:{
      flexDirection:'row',
      justifyContent:'space-evenly'
  }
  // ...
});

const GuessAppBar = () => {
    return (
        <>
            <Link to="/SignIn"><Text style={styles.appBarText}>Sign In</Text></Link>
            <Link to='/SignUp'><Text style={styles.appBarText}>Sign Up</Text></Link>
        </> 
    )
}

const UserAppBar = ({signOut,authorizedUser}) => {
    return (
        <>
            <Link to='/CreateReview'><Text style={styles.appBarText}>Create Review</Text></Link>
            <Link to='/MyReview'><Text style={styles.appBarText}>My Reviews</Text></Link>
            <Text style={styles.appBarText} onPress={signOut}>Sign Out</Text>
        </>
    )
}

const AppBar = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient()
    const history = useHistory()
    const result = useQuery(GET_AUTHORIZED_USER);
    const signOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
        console.log(result)
        history.push('/');
    }
    console.log(result)
    

    return (
        <Pressable onPress={()=>{}}>
            <View style={styles.container}>
                <ScrollView horizontal >
                    <View style={styles.scrollViewContentContainer}>
                        <Link to="/"><Text style={styles.appBarText}>Repositories</Text></Link>
                        {
                            result.data?
                                result.data.authorizedUser?
                                    UserAppBar({signOut,authorizedUser:result.data.authorizedUser})
                                    :GuessAppBar()
                                :GuessAppBar()
                        }
                    </View>
                
                </ScrollView>
            </View>
        </Pressable>
        );
};

export default AppBar;