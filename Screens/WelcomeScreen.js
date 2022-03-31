import React from 'react';

import{
ImageBackground,
View,
Text,
StyleSheet,
Image,
} from "react-native";

import AppButton from '../components/AppButton';
import Colors from '../config/Colors';

function WelcomeScreen(props) {
return (
    <ImageBackground
        style={styles.BGimage}
        source={require("../asserts/pic1.jpg")}
        blurRadius={2}
    >
        <View 
        style={styles.logoContainer}>
         <Image 
        style={styles.logo}
        source={require("../asserts/logo.png")}
        />
        <Text style={styles.text}>Sell what you want</Text>
    
        </View>

        <View style={styles.loginButton}>
            <AppButton buttonTitle={"Login"} buttonColor={Colors.primary} buttonOnPress={()=>console.log("Login Tapped")} />
        </View>
        <View
        style={styles.registerButton}>
            <AppButton buttonTitle={"Register"} buttonColor={Colors.secondary} buttonOnPress={()=>console.log("Registered Tapped")} />
        </View>
        
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    BGimage:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    loginButton:{
        width:'100%',
        padding:15,
        
    },
    registerButton:{
        width:'100%',
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:15,
    },
    logo:{
        width:100,
        height:100,
        
    },
    logoContainer:{
        position:'absolute',
        top:50,
        alignItems:'center'
    },
    text:{
        fontSize:25,
        fontWeight:"600",
        paddingTop:12,
    }
})

export default WelcomeScreen;