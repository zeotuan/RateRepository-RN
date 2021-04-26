import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import Text from './Text';
import theme from '../theme';
import {useDebouncedCallback} from 'use-debounce';

const ReviewFilter = ({refetch}) => {
    const [orderBy, setOrderBy] = useState('CREATED_AT');
    const [orderDirection, setOrderDirection] = useState('ASC');
    const [searchKeyWord, setSearchKeyWord] = useState('');
    
    const filterByKeyword = (query) => {
        //setSearchKeyWord(query);
        //refetch does not cause unmounted 
        debounced(query);
    }

    const debounced = useDebouncedCallback(
        
        (searchKeyWord) => {
            setSearchKeyWord(searchKeyWord);
            refetch(orderBy,orderDirection,searchKeyWord);
        },
        // delay in ms
        500
      );
    return (
        <View style={styles.filterContainer}>
            <Searchbar 
                placeholder='Enter KeyWord'
                value={searchKeyWord}
                onChangeText={query=>{filterByKeyword(query)}}
            />
            <View style={styles.sortContainer}>
                <View style={styles.sortItem}>
                    <Text>Order By:</Text>
                    <Picker
                        mode='dropdown'
                        selectedValue={orderBy}
                        onValueChange={(itemValue, itemIndex) =>
                            setOrderBy(itemValue)
                            
                        }>
                        <Picker.Item label='CREATED_AT' value='CREATED_AT' />
                        <Picker.Item label='RATING_AVERAGE' value='RATING_AVERAGE' />
                    </Picker>
                </View>
                <View style={styles.sortItem}>
                    <Text>Order Direction:</Text>
                    <Picker
                        selectedValue={orderDirection}
                        onValueChange={(itemValue, itemIndex) =>
                            setOrderDirection(itemValue)
                        }>
                        <Picker.Item label='ASC' value='ASC' />
                        <Picker.Item label='DESC' value='DESC' />
                    </Picker>
                </View>
                <Pressable style={styles.button} onPress={()=>{refetch(orderBy,orderDirection,searchKeyWord)}}>
                    <Text style={theme.buttonText}>Filter Review</Text>
                </Pressable>
            </View>
            <Text>Reviews result for {searchKeyWord?searchKeyWord:'all'} sorted by {orderBy} {orderDirection}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    filterContainer:{
        flexDirection:'column'
    },
    sortContainer:{
        flexDirection:'row'
    },
    sortItem:{
        flexDirection:'row'
    },
    button:{
        ...theme.button,
        height:20,
        margin:0
    }
})

export default ReviewFilter;