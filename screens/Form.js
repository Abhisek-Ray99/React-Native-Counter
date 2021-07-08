import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AwesomeButton from "react-native-really-awesome-button";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Form = ({navigation}) => {
    return (
        <View style={styles.container}>
                <AwesomeButton
                backgroundColor="#fffc6c"
                activityColor="#6c6a00"
                backgroundShadow="#b9b500"
                backgroundActive="#fffb3e"
                borderRadius={7}
                width={200}
                onPress={() => {navigation.navigate('Submit Form')}}
                >
                    <Icon 
                        name="form-dropdown" 
                        style={styles.iText}
                    />
                    <Text style={styles.fText}>Fill the Form</Text>
                </AwesomeButton>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
    fText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
