import React from 'react';
import { View, StyleSheet, Pressable , Text, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {Link, useHistory} from 'react-router-native';
import {CHECK_AUTHORIZATION} from '../graphql/queries'
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


const AppBar = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient()
    const history = useHistory()
    const result = useQuery(CHECK_AUTHORIZATION);
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
                                    <>
                                        <Link to="/CreateReview"><Text style={styles.appBarText}>Create Review</Text></Link>
                                        <Text style={styles.appBarText} onPress={signOut}>SignOut</Text>
                                    </>
                                    :<Link to="/SignIn"><Text style={styles.appBarText}>SignIn</Text></Link>
                                :<Link to="/SignIn"><Text style={styles.appBarText}>SignIn</Text></Link>
                        }
                    </View>
                
                </ScrollView>
            </View>
        </Pressable>
        );
};

export default AppBar;