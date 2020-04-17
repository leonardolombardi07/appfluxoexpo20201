import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from '../../navigationFunctions/RootNavigation';
import HomeScreen from '../../../screens/LoggedIn/HomeScreen';
//Screens
import UtilidadesScreen from '../../../screens/LoggedIn/UtilidadesScreen';

const Drawer = createDrawerNavigator();
export const DrawerFlow = () => {
    return (
        <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="UtilidadesScreen" component={UtilidadesScreen} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
};