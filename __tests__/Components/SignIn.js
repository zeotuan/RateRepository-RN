import React from 'react';
import {View,Pressable,StyleSheet, Text as NativeText} from 'react-native';
import {Formik} from 'formik'
import FormikTextInput from '../../Components/FormikTextInput'
import Text from '../../Components/Text';
import * as yup from 'yup';
import { fireEvent, render, act, waitFor} from '@testing-library/react-native';

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
            <FormikTextInput 
                name='username' 
                placeholder='username' 
                testID="usernameField"
            />
            <FormikTextInput 
                name='password' 
                placeholder='password' 
                secureTextEntry={true} 
                testID="passwordField"
            />
            <Pressable style={styles.button} onPress={onSubmit} testID="submitButton">
                <Text style={styles.buttonText}>SignIn</Text>
            </Pressable>
        </View>
    )
}

const SignIn = ({signIn}) => {
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


describe('SignIn', ()=>{
    describe('SignInContainer', ()=>{
        it('call onSubmit function with correct argument when a valid form is submitted ', async () => {
            const signIn = jest.fn();
                const {getByTestId } = render(<SignIn signIn={signIn}/>);
                await act(async () => {
                    await fireEvent.changeText(getByTestId('usernameField'),'kalle');
                });
                await act(async () => {
                    await fireEvent.changeText(getByTestId('passwordField'),'password');
                });
                await act(async () => {
                    await fireEvent.press(getByTestId('submitButton'));
                });

                  
                    
                
                
            await waitFor(()=>{
                expect(signIn).toHaveBeenCalledTimes(1);
                expect(signIn.mock.calls[0][0]).toEqual({
                    username:'kalle',
                    password:'password'
                })
            })
        })
    })
})