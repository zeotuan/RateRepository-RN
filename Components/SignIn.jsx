import React, { useEffect } from 'react';
import {View,Pressable,StyleSheet, Text as NativeText} from 'react-native';
import {Formik, validateYupSchema} from 'formik'
import FormikTextInput from './FormikTextInput'
import Text from './Text';
import * as yup from 'yup';
import useSignIn from '../Hooks/useSignIn'
import AuthStorage from '../utils/authStorage'

const initialValues = {
    username:'',
    password:''
}

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(3,'username must be longer than 3 character')
        .required('username is required'),
    password: yup
        .string()
        .min(3,'password must be longer than 3 character')
        .required('password is required'),
});

const SignInForm = ({onSubmit}) => {
    return (
        <View>
            <FormikTextInput name='username' placeholder='username'/>
            <FormikTextInput name='password' placeholder='password' secureTextEntry={true}/>
            <Pressable style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>SignIn</Text>
            </Pressable>
        </View>
    )
}

const SignIn = () => {
    const [signIn,result] = useSignIn(); 
    useEffect(()=>{
        if(result.data){
            console.log(result.data)
        }
    },[result.data])

    const onSubmit = async (values) => {
        const {username,password} = values
        if(!username || !password){
            console.log(`invalid username or password`);
        }
        try {
            await signIn({ username, password });

          } catch (e) {
            console.log(e);
        }
    }

    return (
        <View>
            <NativeText>The sign in View</NativeText>
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({handleSubmit}) => <SignInForm onSubmit= {handleSubmit}/>}
            </Formik>
        </View>

    )
};

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
    
});

export default SignIn