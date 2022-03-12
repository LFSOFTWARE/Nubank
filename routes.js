import React from "react";
import Login from './src/pages/login'
import Home from './src/pages/index'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



const Routes = () =>{
 
    return(
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                options={{headerShown:false}}
                name="Login" 
                component={Login}  
                />
                 <Stack.Screen
                options={{headerShown:false}}
                name="Home" 
                component={Home}  
                />
               
            </Stack.Navigator>
      </NavigationContainer>
    )
}


export default Routes