import React, { useState } from 'react';
import {
  StyleSheet,
  View,

} from 'react-native';
import ListingEditScreen from './Screens/ListingEditScreen';
import MessagesScreen from './Screens/MessagesScreen';


import RegisterScreen from './Screens/RegisterScreen';


export default function App() {


  return (
    <View style={styles.container}>

    <ListingEditScreen/>


    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});


// const categories =[
//   {
//     label: "Furniture",
//     value: 1,
//   },
//   {
//     label: "Clothing",
//     value: 2,
//   },
//   {
//     label: "Cameras",
//     value: 3,
//   },
// ]


//const [category, setCategory] = useState();


{/* <AppPicker placeholder={"Category"}
        icon="apps"
        items={categories}
        selectedItem={category}
        onSelectItem={item=> setCategory(item)}
      /> */}