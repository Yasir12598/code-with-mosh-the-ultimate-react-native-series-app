
import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';

import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import AuthNavigation from './navigation/AuthNavigation';




export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>

      <AppNavigator/>

    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
});

































// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Button,
//   Text,
// } from 'react-native';
// import ListingEditScreen from './Screens/ListingEditScreen';
// import AppButton from './components/AppButton';

// import MaterialCommunityyIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import AppText from './components/AppText';

// const Tweets=({navigation})=>(
//   <View>

//   <AppText>Tweets</AppText>
//   <Button title={'TweetDetails'} onPress={()=> navigation.navigate("TweetsDetails", {id: 1, name:"Yasir", title:'My Tweet Details'})}/>
//   </View>
// );

// const TweetDetails=({route, navigation})=>(
//   <View>

//   <AppText>Tweet Details id: {route.params.id} and name: {route.params.name} </AppText>
//   <Button title={'Back to Tweets'} onPress={()=> navigation.navigate("Tweets")}/>
//   </View>
// );

// const Account=()=>(
//   <View>
//     <AppText>Account Screen</AppText>
//   </View>
// );


// const Tab= createBottomTabNavigator();
// const TabNavigator=()=>(
//   <Tab.Navigator
//     screenOptions={{
//       tabBarActiveBackgroundColor:'tomato',
//       tabBarActiveTintColor:'white',
//       tabBarInactiveTintColor:'black',
//       headerShown:false,
//       //headerStyle:{backgroundColor:"red", borderRadius:40,},
    
//     }}
  
//   >
//     <Tab.Screen 
//     name='Feed' 
//     component={StackNavigator}
//       options={{
//         //tabBarActiveBackgroundColor:"blue",
//         //headerStyle:{backgroundColor:'yellow'},
//         //headerShown:false,
//         tabBarIcon:({size, color})=>(
//           <MaterialCommunityyIcons name='home' size={size} color={color} />
//         ),
//         tabBarActiveBackgroundColor:'green'
//       }}
//     />
//     <Tab.Screen 
//       name='Account' 
//       component={Account}
//       options={{
//         tabBarIcon:({size, color})=>(
//           <MaterialCommunityyIcons name='account' size={size} color={color}/>
//         )
//       }} 
//     />
//   </Tab.Navigator>
// );


// const Stack = createStackNavigator();
// const StackNavigator=()=>(
//   <Stack.Navigator
//     screenOptions={{
//       headerTintColor:'yellow',
//       headerStyle:{backgroundColor:"dodgerblue",},
//       headerShown:false,
//     }}
//   >
//     <Stack.Screen 
//     name='Tweets' 
//     component={Tweets} 
//     options={{
//       title:'My Tweets'
//      // headerShown:false,
//      // headerStyle:{},

      
//     }}
    
//     />
//     <Stack.Screen 
//     name='TweetsDetails' 
//     component={TweetDetails} 
//     options={
//       ({route})=> ({title:route.params.title,
//       //headerShown:true,
//      headerStyle:{backgroundColor:'tomato'},
      
//       })}
      
//     />
//   </Stack.Navigator>
// );

// export default function App() {
//   return (
//     <NavigationContainer>
//      <TabNavigator/>
//     </NavigationContainer>

//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    

//   },
// });
























