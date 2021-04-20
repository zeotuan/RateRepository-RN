import React from 'react';
import { View, StyleSheet, Pressable , Text, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {Link} from 'react-router-native';

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
  return (
    <Pressable onPress={()=>{}}>
        <View style={styles.container}>
            <ScrollView horizontal >
                <View style={styles.scrollViewContentContainer}>
                    <Link to="/"><Text style={styles.appBarText}>Repositories</Text></Link>
                    <Link to="/SignIn"><Text style={styles.appBarText}>SignIn</Text></Link>
                </View>
            
            </ScrollView>
        </View>
    </Pressable>
    );
};

export default AppBar;