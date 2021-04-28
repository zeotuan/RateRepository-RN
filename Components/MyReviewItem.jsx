import React from 'react';
import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useHistory} from 'react-router-native';
import Text from './Text';
import Theme from '../theme';

const MyReviewItem = (props) => {
    const {rating,createdAt, text,repository} = props.item
    const history = useHistory()
    const handleDeleteReview  = () => {
        Alert.alert(
            'Delete review',
            'Are you sure you want to delete this review?',
            [
                {
                    text:'CANCEL',
                    onPress:()=>{console.log('cancel pressed')},
                    style:'cancel'
                },
                {
                    text:'DELETE',
                    onPress:()=>{console.log('delete pressed')},
                    style:'default'
                }
            ]
        )
    };



    return (
        <View style={styles.reviewContainer}>
            <View style={styles.reviewInfoContainer}>
                <Text style={styles.ratingContainer}>{rating}</Text>
                <View style={styles.reviewInfoSubContainer}>
                    <Text style={styles.repositoryName}>{repository.name}</Text>
                    <Text>{createdAt}</Text>
                    <Text>{text}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>{history.push(`/repositories/${repository.id}`)}}>
                    <Text style={styles.buttonText}>View Repository</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Theme.deleteButton} onPress={handleDeleteReview}>
                    <Text style={styles.buttonText}>Delete Review</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    reviewContainer:{
        flexDirection:'column',
        backgroundColor:'white',
        padding:10,
        justifyContent:'space-between'
    },
    reviewInfoContainer:{
        flexDirection:'row',
    },
    reviewInfoSubContainer:{
        flexDirection:'column'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    button:{
        ...Theme.button,
    },
    buttonText:{
        ...Theme.buttonText
    },
    repositoryName:{
        fontWeight:'bold'
    },
    ratingContainer:{
        height:40,
        width:40,
        borderRadius:20,
        borderWidth: 2,
        borderColor:Theme.colors.primary,
        backgroundColor:'white',
        color:Theme.colors.primary,
        padding:5,
        paddingTop:10,
        textAlign:'center',
    }
})

export default MyReviewItem;


