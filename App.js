import React from 'react';
import {
  StyleSheet, View
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppText from './components/AppText';
import { GolbalStyle } from './components/GlobalSyle';



export default function App() {
  return (
    <View style={GolbalStyle.container}>
      <AntDesign name='forward' size={20} color='black' />
      <AppText name="komail"> Hellohhhhhhhhhhhhhhhhhhhhhh </AppText>

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});