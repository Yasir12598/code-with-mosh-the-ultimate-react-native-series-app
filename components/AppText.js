import React from 'react';
import {
    Text,
    StyleSheet,

} from 'react-native';

function AppText({ name, children }) {
    console.log(name)
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        color: 'black',
    }
})
export default AppText;