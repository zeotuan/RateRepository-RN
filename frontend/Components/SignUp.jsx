import React from 'react';
import {Pressable,StyleSheet,View} from 'react-native';
import {useHistory} from 'react-router-native';
import {Formik} from 'formik';
import useSignUp from '../Hooks/useSignUp';
import * as yup from 'yup';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const initialValues = {
    username:'',
    password:'',
    confirmPassword:''
}

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(1,'username is too short!')
        .max(30,'username is too long!')
        .required('username is required!'),
    password: yup
        .string()
        .min(5,'password is too short!')
        .max(50,'password is too long!')
        .required('password is required!'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')],'password does not match')
        .required('confirm password is required')
})

const SignUpForm = ({onSubmit}) => {
    return(
        <View>
            <FormikTextInput name='username' placeholder='Username'/>
            <FormikTextInput name='password' placeholder='Password' secureTextEntry={true}/>
            <FormikTextInput name='confirmPassword' placeholder='Confirm Password' secureTextEntry={true}/>
            <Pressable style={theme.button} onPress={onSubmit}>
                <Text style={theme.buttonText}>Sign Up</Text>
            </Pressable>
        </View>
    )
}

const SignUp = () => {
    let history = useHistory();
    const [signUp,result] = useSignUp();

    const onSubmit = async (values) => {
        const {username,password,confirmPassword} = values;
        if(!username || !password || !confirmPassword){
            console.log('missing values');
        }
        try {
            await signUp({username,password});
            if(result.data){
                history.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <View>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
            {({handleSubmit}) => <SignUpForm onSubmit={handleSubmit} />}
            </Formik>
        </View>
    )
    
}

export default SignUp;

