import React from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';



import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import defaultStyles from "../config/Styles"
function AppTextInput({ passwordEyeOnpress, icon,passwordEyeIcon ,width="100%" ,...otherProps }) {
    return (
        <View style={[styles.container, {width:width}]}>
            {icon && <MaterialCommunityIcons
                style={styles.icon}
                name={icon}
                size={25}
                color={defaultStyles.Colors.medium}
            />}
            <TextInput
                placeholderTextColor={defaultStyles.Colors.medium}
                style={[defaultStyles.text ,{flex:1}]}
                {...otherProps}
            />
            {passwordEyeOnpress &&
                <TouchableOpacity onPress={passwordEyeOnpress}>
                <MaterialCommunityIcons
                    
                    style={styles.icon}
                    name={passwordEyeIcon}
                    size={25}
                    color={defaultStyles.Colors.medium}

                />
                </TouchableOpacity>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.Colors.light,
        borderRadius: 25,
        flexDirection: 'row',
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