import React from 'react';

import { 
View,
StyleSheet,

 } from 'react-native';

import Card from '../components/Card';
import ListItem from '../components/ListItem';
 
 function ListingDetailScreen(props) {
     return (
         <View>
             <Card
             title={"Jacket for Sale"}
             subTitle={"$100"}
             image={require("../asserts/jacket2.jpg")}
             />

             <ListItem
             title={"Muhammad Yasir"}
             subTitle={"5 Listing"}
             image={require("../asserts/yasir.jpg")}
             />
         </View>
     );
 }
 
 const styles = StyleSheet.create({
     
 })
 export default ListingDetailScreen;