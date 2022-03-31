import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Switch

} from 'react-native';
import AppPicker from './components/AppPicker';


import AppTextInput from './components/AppTextInput';



export default function App() {
  const [isNew, setIsNew] = useState(false);
  
  return (
    <View style={styles.container}>
        <AppPicker placeholder={"Category"}
          icon="apps"
          />
        <AppTextInput
          placeholder={'Email'}
          icon={"email"}
          />



    </View >

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});