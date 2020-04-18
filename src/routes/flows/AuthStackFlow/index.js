import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '../../navigationFunctions/RootNavigation';
//Screens
import LoginScreen from '../../../screens/LoggedOut/LoginScreen';
import ResetPasswordScreen from '../../../screens/LoggedOut/ResetPasswordScreen';

const AuthStack = createStackNavigator();
export const AuthStackFlow = () => {
    return (
        <NavigationContainer ref={navigationRef}>
        <StatusBar backgroundColor="orange" barStyle='dark-content' />
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
          <AuthStack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        </AuthStack.Navigator>
        </NavigationContainer>
    );
};