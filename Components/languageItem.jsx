import React from 'react';
import {Text, StyleSheet } from 'react-native';
import Theme from '../theme';

const LanguageItem = ({language}) => {
    return (
        <Text style={styles.languageItem}> {language} </Text>             
    )
}

const styles = StyleSheet.create({
    languageItem:{
        backgroundColor:Theme.colors.primary,
        color:'white',
        borderRadius:5
    }
})

export default LanguageItem;