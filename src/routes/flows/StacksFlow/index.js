import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MainHeaderButton from '../../assets/MainHeader/MainHeaderButton';
import MainHeaderBackButton from '../../assets/MainHeader/MainHeaderBackButton';
import MainHeaderPrioridadesButton from '../../../routes/assets/MainHeader/MainHeaderPrioridadesButton';
const HomeStack = createStackNavigator();
const UtilidadesStack = createStackNavigator();
const CCEStack = createStackNavigator();
const CELStack = createStackNavigator();
const MNPStack = createStackNavigator();
const PROStack = createStackNavigator();
const QABStack = createStackNavigator();
import HomeScreen from '../../../screens/LoggedIn/HomeScreen';
import UtilidadesScreen from '../../../screens/LoggedIn/UtilidadesScreen';
import QRCodeScreen from '../../../screens/LoggedIn/UtilidadesScreen/QRCodeScreen';
import AgendaScreen from '../../../screens/LoggedIn/UtilidadesScreen/AgendaScreen';
import MarcarReuniaoScreen from '../../../screens/LoggedIn/UtilidadesScreen/AgendaScreen/MarcarReuniaoScreen';
import CCEScreen from '../../../screens/LoggedIn/CCEScreen';
import CELScreen from '../../../screens/LoggedIn/CELScreen';
import MNPScreen from '../../../screens/LoggedIn/MNPScreen';
import PROScreen from '../../../screens/LoggedIn/PROScreen';
import QABScreen from '../../../screens/LoggedIn/QABScreen';

export const HomeStackFlow = () => {
    return (
        <HomeStack.Navigator 
            screenOptions={{
            headerStyle: {backgroundColor: 'black'},
            headerTitleStyle: {color: 'white'},
            headerLeft: () => <MainHeaderButton />
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    )
};

export const UtilidadesStackFlow = () => {
    return (
        <UtilidadesStack.Navigator
            
            screenOptions={{
            headerStyle: {backgroundColor: 'black'},
            headerTitleStyle: {color: 'white'},
            headerLeft: () => <MainHeaderButton />
        }}>
            <UtilidadesStack.Screen name="Utilidades" component={UtilidadesScreen}  />
            <UtilidadesStack.Screen
            
                name="QRCodeScreen" 
                component={QRCodeScreen}
                
                options={{
                    headerShown: false,
                }}    
            />
            <UtilidadesStack.Screen 
                name="Agenda" 
                component={AgendaScreen}
                
                options={{
                   headerLeft: () => <MainHeaderBackButton />,
                   headerRight: () => <MainHeaderPrioridadesButton />
                }}    
            />
            <UtilidadesStack.Screen 
                name="MarcarReuniaoScreen" 
                component={MarcarReuniaoScreen}
                
                options={{
                   headerShown: false
                }}    
            />
        </UtilidadesStack.Navigator>
    )
};

export const CCEStackFlow = () => {
    return (
        <CCEStack.Navigator 
            screenOptions={{
            headerStyle: {backgroundColor: 'black'},
            headerTitleStyle: {color: 'white'},
            headerLeft: () => <MainHeaderButton />
        }}>
            <CCEStack.Screen name="CCE" component={CCEScreen} />
        </CCEStack.Navigator>
    )
};

export const CELStackFlow = () => {
    return (
        <CELStack.Navigator 
            screenOptions={{
            headerStyle: {backgroundColor: 'black'},
            headerTitleStyle: {color: 'white'},
            headerLeft: () => <MainHeaderButton />
        }}>
            <CELStack.Screen name="CEL" component={CELScreen} />
        </CELStack.Navigator>
    )
};

export const MNPStackFlow = () => {
    return (
        <MNPStack.Navigator 
            screenOptions={{
            headerStyle: {backgroundColor: 'black'},
            headerTitleStyle: {color: 'white'},
            headerLeft: () => <MainHeaderButton />
        }}>
            <MNPStack.Screen name="MNP" component={MNPScreen} />
        </MNPStack.Navigator>
    )
};

export const PROStackFlow = () => {
    return (
        <PROStack.Navigator 
            screenOptions={{
            headerStyle: {backgroundColor: 'black'},
            headerTitleStyle: {color: 'white'},
            headerLeft: () => <MainHeaderButton />
        }}>
            <PROStack.Screen name="PRO" component={PROScreen} />
        </PROStack.Navigator>
    )
};

export const QABStackFlow = () => {
    return (
        <QABStack.Navigator 
            screenOptions={{
            headerStyle: {backgroundColor: 'black'},
            headerTitleStyle: {color: 'white'},
            headerLeft: () => <MainHeaderButton />
        }}>
            <QABStack.Screen name="QAB" component={QABScreen} />
        </QABStack.Navigator>
    )
};