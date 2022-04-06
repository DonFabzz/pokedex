import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabRouter } from 'react-navigation';
import Detail from '../components/Detail'
import Home from '../screens/Home';
import Equipe from '../screens/Equipe';
import Parametre from '../screens/Parametres';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Recherche from '../screens/Recherche';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PokemonStack() {
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="Pokedex" component={Home} />
            <Stack.Screen name="Détails" component={Detail} />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{title: "Pokemon", headerTintColor:"white", tabBarIcon: ({}) => {return <Ionicons name={'home'} size={24} color={'black'}/>}}}
                            name="Home"
                            component={PokemonStack} />
                <Tab.Screen options={{title: "Team", headerTintColor:"white",  tabBarIcon: ({}) => {return <Ionicons name={'people'} size={24} color={'black'}/>}}}
                            name="Equipe"
                            component={Equipe} />
                <Tab.Screen options={{title: "Parametre", headerTintColor:"white", tabBarIcon: ({}) => {return <Ionicons name={'settings'} size={24} color={'black'}/>}}}
                            name="Parametre"
                            component={Parametre} />
                <Tab.Screen options={{title: "Recherche", headerTintColor:"white", tabBarIcon: ({}) => {return <Ionicons name={'search'} size={24} color={'black'}/>}}}
                            name="Recherche"
                            component={Recherche} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}