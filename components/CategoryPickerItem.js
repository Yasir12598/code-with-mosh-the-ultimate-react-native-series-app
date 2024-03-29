import React from 'react';
import {TouchableOpacity, StyleSheet, } from 'react-native';

import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({ item, onPress }) {
    return (
        <TouchableOpacity  style={styles.container} onPress={onPress}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            <AppText style={styles.label}>{item.label}</AppText>
        </TouchableOpacity>
 

    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal:20,
        paddingVertical:15,
        alignItems:'center',
        width:'33%',
    },
    label:{
        textAlign:'center'
    }
})
export default CategoryPickerItem;