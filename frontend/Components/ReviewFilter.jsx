import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import Text from './Text';
import Theme from '../theme';
import {useDebouncedCallback} from 'use-debounce';

const ReviewFilter = ({changeVariables}) => {
    const [orderBy, setOrderBy] = useState('CREATED_AT');
    const [orderDirection, setOrderDirection] = useState('ASC');
    const [searchKeyword, setSearchKeyWord] = useState('');
    
    const filterByKeyword = (query) => {
        setSearchKeyWord(query);
        //changeVariables({orderBy,orderDirection,searchKeyword});
        //refetch does not cause unmounted 
        debounced(query);
    }

    const debounced = useDebouncedCallback(
        
        (searchKeyWord) => {
            changeVariables({orderBy,orderDirection,searchKeyword});
        },
        // delay in ms
        500
    );

    const sort = () => {
        changeVariables({orderBy,orderDirection})
    }

    
    
    return (
        <View style={styles.filterContainer}>
            <Searchbar 
                placeholder='Enter KeyWord'
                value={searchKeyword}
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
                <Pressable style={styles.button} onPress={()=>{sort()}}>
                    <Text style={Theme.buttonText}>Sort Review</Text>
                </Pressable>
            </View>
            <Text>Reviews result for {searchKeyword?searchKeyword:'all'} sorted by {orderBy} {orderDirection}</Text>
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
        ...Theme.button,
        height:20,
        margin:0
    }
})

export default ReviewFilter;