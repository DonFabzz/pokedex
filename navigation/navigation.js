import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabRouter } from 'react-navigation';
import Home from '../screens/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PokemonStack() {
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="Pokedex" component={Home} />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{title: "pokemon", headerTintColor:"white"}}
                            name="Home"
                            component={PokemonStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}