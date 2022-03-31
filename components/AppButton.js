import React from 'react';
import { 
StyleSheet,
TouchableOpacity,
Text,
TouchableNativeFeedback,

 } from 'react-native';
 import Colors from '../config/Colors';
function AppButton({buttonTitle, buttonOnPress, buttonColor=Colors.primary}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor:buttonColor}]} onPress={buttonOnPress}>
            <Text style={styles.text}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
    }
const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.primary,
        borderRadius:25,
        justifyContent:'center',
        alignItems:"center",
        padding:15,
        width:'100%',
    },
    text:{
        color: Colors.white,
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold',
    }
})
export default AppButton;