import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = 'HomeScreen' component = { HomeScreen } />
        </Tab.Navigator>
    )
}