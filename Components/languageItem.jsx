import React from 'react'
import {Text, StyleSheet } from 'react-native'

const LanguageItem = ({language}) => {
    return (
        <Text style={styles.languageItem}> {language} </Text>             
    )
}

const styles = StyleSheet.create({
    languageItem:{
        backgroundColor:'blue',
        color:'white',
        borderRadius:5
    }
})

export default LanguageItem;