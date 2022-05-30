import React from 'react';

import { 
View,
StyleSheet,

 } from 'react-native';

import Card from '../components/Card';
import ListItem from '../components/ListItem';
 
 function ListingDetailScreen({route}) {
     const listing = route.params;
     return (
         <View>
             <Card
             title={listing.title}
             subTitle={"$" + listing.price}
             image={listing.image}
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