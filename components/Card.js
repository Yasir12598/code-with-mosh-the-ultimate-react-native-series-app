import React from 'react';

import { 
StyleSheet,
View,
Text,
Image,
 } from 'react-native';

 
import Colors from '../config/Colors';
 
 function Card({title,subTitle,image}) {
     return (
         <View style={styles.card}> 
            <Image style={styles.image}  source={image} />

            <View style={styles.detailContainer}>
            <Text style={[styles.title,{fontWeight:"bold"}]}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
         </View>
     );
 }
 
 const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:Colors.white,
        margin:20,
        overflow:'hidden',
      
        
    },
    detailContainer:{
        padding:20,
        },
    image:{
        width:"100%",
        height:250,

    },
    title:{
        marginBottom:6,
        

    },
    subTitle:{
        color: Colors.secondary,
        fontWeight:'bold',
    }
     
 })
 export default Card;