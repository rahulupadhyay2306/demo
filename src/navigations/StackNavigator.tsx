import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Booking from '../screens/Booking';



const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default AuthStack;