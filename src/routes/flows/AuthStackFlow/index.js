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
        <AuthStack.Navigator>
          <AuthStack.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
            options={{ headerShown: false }}
          />
          <AuthStack.Screen 
            name="ResetPasswordScreen" 
            component={ResetPasswordScreen} 
            options={{ 
              headerTitle: 'Recuperação de Senha',
              headerTintColor: '#000000',
              headerStyle: {
                backgroundColor: '#4A87B6',
              }
            }}
          />
        </AuthStack.Navigator>
        </NavigationContainer>
    );
};