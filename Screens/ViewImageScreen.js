import React from 'react';

import{
    ImageBackground,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    } from "react-native";


import Colors from '../config/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <AntDesign name="close" color={Colors.white} size={35} />
            </View>
            <View style={styles.delIcon}>
            <AntDesign name="delete" color={Colors.white} size={35} />
            </View>
            <Image
            resizeMode='contain'
            style={styles.image}
             source={require("../asserts/pic3.jpg")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.black,
        flex:1,
    },
    closeIcon:{
        top:30,
        left:30,
        position:'absolute',
    },
    delIcon:{
        top:30,
        right:30,
        position:'absolute',
    },
    image:{
        width:'100%',
        height:'100%',

    }
})

export default ViewImageScreen;