import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../Screens/ListingScreen";
import ListingDetailScreen from '../Screens/ListingDetailScreen';
const Stack = createNativeStackNavigator();

const FeedNavigation=()=>(
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
        }}
        mode="modal"
    >
        <Stack.Screen name="Listing" component={ListingScreen}
            
           
        />
        <Stack.Screen name="ListingDetails" component={ListingDetailScreen}/>
    </Stack.Navigator>
);

export default FeedNavigation;