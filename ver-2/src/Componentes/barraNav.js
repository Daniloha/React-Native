/*
*Barra de Navegação
*/

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../Views/home';
import Search from '../Views/search';
import Notifications from '../Views/notifications';
import Entrar from '../Views/entrar';

const Tab = createBottomTabNavigator();

export function NavBar() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
}
            })}>

            <Tab.Screen name="Home"
             component={Home}
             options = {{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                )
             }}
             />
            <Tab.Screen name="Search" 
            component={Search}
            options = {{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                tabBarLabel: 'Pesquisar',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="search" color={color} size={size} />
                )
            }}
            />
            <Tab.Screen name="Notifications" 
            component={Notifications}
            options = {{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                tabBarLabel: 'Notificações',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="notifications" color={color} size={size} />
                )
            }}
            />
            <Tab.Screen name="Entrar" 
            component={Entrar}
            options = {{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                tabBarLabel: 'Entrar',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="log-in" color={color} size={size} />
                )
            }}
             />

        </Tab.Navigator>
    );
}