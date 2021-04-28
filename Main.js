import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './Components/RepositoryList';
import AppBar from './Components/AppBar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import CreateReview from './Components/CreateReview';
import {Route, Switch} from 'react-router-native';
import Repository from './Components/Repository';
import MyReview from './Components/MyReview';


export default function Main() {
  return (
        <View style={styles.container}>
          <AppBar />
          <Switch>
            <Route path='/' exact>
              <RepositoryList />
            </Route>
            <Route path='/SignIn' exact>
              <SignIn />
            </Route>
            <Route path='/SignUp' exact>
              <SignUp />
            </Route>
            <Route path='/Repositories/:id'>
              <Repository />
            </Route>
            <Route path='/CreateReview'>
              <CreateReview />  
            </Route> 
            <Route path='/MyReview'>
              <MyReview />
            </Route> 
        </Switch>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor:'#F0F0F0'
  },
});

