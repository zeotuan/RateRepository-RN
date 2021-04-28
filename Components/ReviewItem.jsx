import React from 'react';
import {View,StyleSheet,Text,Pressable} from 'react-native';
import Theme from '../theme'

const ReviewItem = (props) => {
    const {text,rating,createdAt,user} = props.item
    return (
        <View style={styles.reviewContainer}>
            <Text style={styles.ratingContainer}>{rating}</Text>
            <View style={styles.rightSideReviewSubContainer}> 
                <Text style={styles.userName}>{user.username}</Text>
                <Text>{createdAt}</Text>
                <Text>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    reviewContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:10,
        justifyContent:'space-between'
    },
    rightSideReviewSubContainer:{
        flexDirection:'column'
    },
    ratingContainer:{
        height:40,
        width:40,
        borderRadius:20,
        borderWidth: 2,
        borderColor: Theme.colors.primary,
        backgroundColor:'white',
        color:Theme.colors.primary,
        padding:5,
        paddingTop:10,
        textAlign:'center',
    },
    userName:{
        fontWeight:'bold'
    }
})


export default ReviewItem;