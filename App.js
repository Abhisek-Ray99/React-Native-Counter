import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Appstack from './navigation/Appstack';


const App = () => {
  return (
    <NavigationContainer>
      <Appstack/>
    </NavigationContainer>

  )
}


export default App;