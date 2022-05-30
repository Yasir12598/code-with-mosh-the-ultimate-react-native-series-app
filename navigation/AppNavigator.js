import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ListingEditScreen from '../Screens/ListingEditScreen';
import FeedNavigation from './FeedNavigation';
import AccountNavigator from './AccountNavigator';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../config/Colors';


const Tab= createBottomTabNavigator();

const AppNavigator=()=>(
    <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor:Colors.primary,
            tabBarInactiveTintColor:Colors.medium,
            tabBarLabelStyle:{
                fontSize:12
            },  
        }}
    >
        <Tab.Screen name='Feed' component={FeedNavigation}
            options={{
                tabBarIcon:({size, color})=>(
                    <MaterialCommunityIcons name='home' size={size} color={color}/>
                )
            }}
        />
        <Tab.Screen name='ListingEdit' component={ListingEditScreen}
             options={{
                tabBarIcon:({size, color})=>(
                    <MaterialCommunityIcons name='plus-circle' size={size} color={color}/>
                )
            }}
        />
        <Tab.Screen name='Account' component={AccountNavigator}
             options={{
                tabBarIcon:({size, color})=>(
                    <MaterialCommunityIcons name='account' size={size} color={color}/>
                )
            }}
        />
    </Tab.Navigator>
);
export default AppNavigator;