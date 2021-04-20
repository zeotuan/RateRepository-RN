import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RepositoryList from './Components/RepositoryList';
import AppBar from './Components/AppBar';
import SignIn from './Components/SignIn';
import {NativeRouter, Redirect, Route, Switch} from 'react-router-native';
import {ApolloProvider} from '@apollo/client'
import Constants from 'expo-constants';

import createApolloClient from './utils/apolloClient';
import AuthStorage from './utils/authStorage'

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  //console.log(Constants.manifest);
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <View style={styles.container}>
          <AppBar />
          <Switch>
            <Route path='/' exact>
              <RepositoryList />
            </Route>
            <Route path='/SignIn' exact>
              <SignIn />
            </Route>
        </Switch>
        </View>
      </ApolloProvider>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor:'#F0F0F0'
  },
});

