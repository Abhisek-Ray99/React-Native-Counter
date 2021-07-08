import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';


import Home from '../screens/Home';
import ColorPalette from '../screens/ColorPalette';
import Counter from '../components/Counter';
import Quote from '../components/Quote';
import Form from '../screens/Form';
import SubmitForm from '../screens/SubmitForm';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="ColorPalette"
                component={ColorPalette}
                options={({ route }) => ({ title: route.params.paletteName })}
            />
            <Stack.Screen
                name="Counter"
                component={Counter}
            />
            <Stack.Screen
                name="Quote"
                component={Quote}
            />
        </Stack.Navigator>

    )
}

const FormTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Form Screen"
                component={Form}
            />
            <Stack.Screen
                name="Submit Form"
                component={SubmitForm}
            />
        </Stack.Navigator>
    )
}


const Appstack = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#e91e63',
                tabStyle: {
                    // paddingVertical: 3
                },
                style: {
                    // backgroundColor: 'transparent',
                },
                labelStyle: {
                    // fontSize: 15
                },
                tabStyle: {
                    height: 44,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeTab}
                options={({ route }) => ({
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Form"
                component={FormTab}
                options={({ route }) => ({
                    tabBarLabel: 'Form',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="wechat"
                            color={color}
                            size={size}
                        />
                    ),

                })}

            />
        </Tab.Navigator>
    );
}


export default Appstack;