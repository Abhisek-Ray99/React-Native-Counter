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

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="Home"
                component={Home}
            />
            <MainStack.Screen
                name="ColorPalette"
                component={ColorPalette}
                options={({ route }) => ({ title: route.params.paletteName })}
            />
            <MainStack.Screen
                name="Counter"
                component={Counter}
            />
            <MainStack.Screen
                name="Quote"
                component={Quote}
            />
        </MainStack.Navigator>

    )
}

const FormTab = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="Form Screen"
                component={Form}
            />
            <MainStack.Screen
                name="Submit Form"
                component={SubmitForm}
            />
        </MainStack.Navigator>
    )
}


const App = () => {
    return (
        <RootStack.Navigator mode="modal">
            <RootStack.Screen
                name="Main"
                component={HomeTab}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );
};


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
                component={App}
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