import React from 'react';

import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import defaultStyles from "../config/Styles"
function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons
                style={styles.icon}
                name={icon}
                size={25}
                color={defaultStyles.Colors.medium}
            />}
            <TextInput
                style={[defaultStyles.text, {width:"100%"}]}
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.Colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: "100%",
        padding: 5,
        marginVertical: 10,
    },
    icon: {
        margin: 10,
        // position:'absolute'
        alignSelf: 'center'
    },

})
export default AppTextInput;