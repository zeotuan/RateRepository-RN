import React from 'react';
import {TextInput as NativeInput, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    textInputContainer:{
        height: 40,
        margin: 12,
        borderWidth: 2,
        borderRadius: 5,
    }
})

const TextInput = ({style,error,...props}) => {
    const textInputStyle = [
        styles.textInputContainer,
        style
    ];
    return <NativeInput style={textInputStyle} {...props}/>
};

export default TextInput;