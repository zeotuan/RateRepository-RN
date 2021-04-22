import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import LanguageItem from './languageItem'
import {useHistory} from  'react-router-native'
const RepositoryItem = (props) => {
    const {id,fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount,ownerAvatarUrl } = props.item
    const history = useHistory()
    return (
        <Pressable onPress={()=>{history.push(`/repositories/${id}`)}}>
            <View testID="RepositoryContainer" style={styles.RIContainer}>
                <View style={styles.avatarNameContainer}>
                    <Image style={styles.avatar} source={{uri:ownerAvatarUrl}}/>
                    <View style={styles.NameDescriptionContainer}>
                        <Text testID='RepositoryFullName'style={{fontWeight:'bold'}}>{fullName}</Text>
                        <Text>{description}</Text>
                        <View style={styles.languagesContainer}>
                            <LanguageItem language={language}/> 
                        </View>
                        
                    </View>
                </View>
                
                <View style={styles.statContainer}>
                    <View style={styles.statItem}>
                        <Text>forkCount</Text>
                        <Text> {forksCount}</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text>stargazorsCount</Text>
                        <Text> {stargazersCount}</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text>ratingAverage</Text>
                        <Text> {ratingAverage}</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text>reviewCount</Text>
                        <Text> {reviewCount}</Text>
                    </View>
                    
                    
                </View>
            </View>
        </Pressable>
    )
};


const styles = StyleSheet.create({
    RIContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor:'white',
        elevation:5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1, 
        
        
    },
    avatar:{
        width:30,
        height:30
    },
    avatarNameContainer:{
        flexDirection:'row',
    },
    NameDescriptionContainer:{
        flexDirection:'column',
        //flex:'1 1 0'
    },
    languagesContainer:{
        flexDirection:'row'
    },
    statContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    statItem:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
});


export default RepositoryItem;