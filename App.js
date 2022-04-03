import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Switch

} from 'react-native';
import AppPicker from './components/AppPicker';


import AppTextInput from './components/AppTextInput';
import LoginScreen from './Screens/LoginScreen';





export default function App() {


  return (
    <View style={styles.container}>

    <LoginScreen/>


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