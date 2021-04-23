import React, { useEffect } from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import {useHistory} from 'react-router-native';
import FormikTextInput from './FormikTextInput';
import Text from  './Text';
import * as yup from 'yup';
import useCreateReview from '../Hooks/useCreateReview';


const initialValues={
    ownerName:'',
    repositoryName:'',
    rating:'',
    review:''
}

const validationSchema= yup.object().shape({
    ownerName: yup
        .string()
        .min(3,'repository owner name must be longer than 3 characters')
        .required('repository owner name is required'),
    repositoryName: yup
        .string()
        .min(3,'repository name must be longer than 3 character')
        .required('repository name is required'),
    rating: yup
        .number()
        .min(0,'rating must be greater than 0')
        .max(100,'rating must be lower than 100')
        .required('rating is required'),
    review: yup
        .string()   
})

const CreateReview = () => {
    let history = useHistory();
    const [createReview,result] = useCreateReview();
    const onSubmit = async (values) => {
        const {ownerName,repositoryName,rating,review} = values;
        if(!ownerName || !repositoryName || !rating){
            console.log('missing value');
            return;
        }
        try {
            await createReview({ownerName,repositoryName,rating,review});
            if(result.data){
                history.push('/');
            }
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <View>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({handleSubmit}) => <ReviewForm onSubmit={handleSubmit} />}
            </Formik>
        </View>
    )
}

const ReviewForm = ({onSubmit}) => {
    return (
        <View>
            <FormikTextInput name='ownerName' placeholder='Repository Owner Name'/>
            <FormikTextInput name='repositoryName' placeholder='Repository Name'/>
            <FormikTextInput name='rating' placeholder='Rating between 0 to 100'/>
            <FormikTextInput name='review' placeholder='Review'/>
            <Pressable style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>SignIn</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    button:{
        borderWidth: 2,
        borderRadius: 5,
        borderColor:'blue',
        backgroundColor:'blue',
        justifyContent:'center',
        height: 40,
        margin: 12
    },
    buttonText:{
        color:'white',
        fontSize:10
    },
})

export default CreateReview;
