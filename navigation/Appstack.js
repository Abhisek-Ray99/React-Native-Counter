import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/Home';
import ColorPalette from '../screens/ColorPalette';
import Counter from '../components/Counter';
import Quote from '../components/Quote';

const Stack = createStackNavigator();

const Header = ({ navigation }) => {
    return (
        <View
            style={{
                marginRight: 10
            }}
        >
            <TouchableOpacity
                style={styles.touchbutton}
                onPress={() => navigation.navigate('Quote')}
            >
                <Text style={styles.cTitle}>Counter Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

const Appstack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerRight: () => (
                        <Header/>
                    ),
                }}
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

const styles = StyleSheet.create({
    counterScreen: {
        flex: 1,
        backgroundColor: '#fff'
    },
    touchbutton: {
        backgroundColor: '#F5E9DB',
        padding: 10,
        borderRadius: 14,
    },
    cTitle: {
        textAlign: 'center',
        color: '#FFA764',
        fontSize: 20,
        fontWeight: 'bold'
    }

})


export default Appstack;