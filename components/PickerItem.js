import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
} from 'react-native';
import AppText from "../components/AppText";
import Styles from '../config/Styles';
function PickerItem({ item, onPress }) {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <AppText style={styles.text}>
                    {item.label}
                </AppText>
            </TouchableOpacity>
            <View style={styles.separator}/>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        padding: 20,
    },
    separator:{
        width:'100%',
        height:3,
        backgroundColor:Styles.Colors.light,
    }
})
export default PickerItem;