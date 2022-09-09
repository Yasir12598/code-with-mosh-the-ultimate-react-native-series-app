import React from 'react'
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default function AppActivityIndicator({visiable=false}){
    if(!visiable) return null;
  return (
    <LottieView 
        source={require('../asserts/animations/loading.json')} 
        autoPlay
        loop
    />
  );
}

const styles = StyleSheet.create({
   container: {}
});