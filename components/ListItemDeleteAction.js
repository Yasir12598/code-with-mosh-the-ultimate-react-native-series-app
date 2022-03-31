import React from 'react';

import {
    View,
    StyleSheet

} from 'react-native';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from '../config/Colors';
function ListItemDeleteAction(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="trash-can" size={30} color={Colors.danger} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {


    }
})
export default ListItemDeleteAction;