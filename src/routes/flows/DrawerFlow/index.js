import React from 'react';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem 
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '../../navigationFunctions/RootNavigation';
//Screens
import HomeScreen from '../../../screens/LoggedIn/HomeScreen';
import UtilidadesScreen from '../../../screens/LoggedIn/UtilidadesScreen';
import CCEScreen from '../../../screens/LoggedIn/CCEScreen';
import CELScreen from '../../../screens/LoggedIn/CELScreen';
import MNPScreen from '../../../screens/LoggedIn/MNPScreen';
import PROScreen from '../../../screens/LoggedIn/PROScreen';
import QABScreen from '../../../screens/LoggedIn/QABScreen';
//Assets
import MainHeaderButton from '../../assets/MainHeader/MainHeaderButton';
import DrawerHeader from '../../assets/DrawerNavigation/DrawerHeader';
import { 
    HomeIcon, 
    UtilidadesIcon, 
    CCEIcon, CELIcon, 
    MNPIcon,
    PROIcon,
    QABIcon 
} from '../../assets/Icons/DrawerMenuIcons';
//Styling
import { screenWidth } from '../../../constants/dimensions';
//Redux for logout
import { connect } from 'react-redux';
import { signOut } from '../../../redux/actions/authActions';

const MainHeader = createStackNavigator();
export const MainFlow = () => {
    return (
        <NavigationContainer ref={navigationRef}>
        <MainHeader.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'black'
                },
                headerTitleStyle: {
                    color: 'white'
                },
                headerLeft: () => <MainHeaderButton />
            }}
        >
            <MainHeader.Screen 
            name="Fluxo" 
            component={DrawerFlow}
            // options={({ route }) => console.log(route.params)}
            />
        </MainHeader.Navigator>
        </NavigationContainer>
    )
}



const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerHeader />
            <DrawerItemList
            labelStyle={{color: 'black', fontWeight: '700', fontSize: screenWidth * 0.04}}
            {...props} />
            <DrawerItem 
                label="Sair"
                labelStyle={{color: 'red', fontWeight: '700', fontSize: screenWidth * 0.05}}
                onPress={() => props.signOut()} 
            />
        </DrawerContentScrollView>
    );
};
const ReduxCustomDrawerContent = connect(null,{ signOut })(CustomDrawerContent);





const Drawer = createDrawerNavigator();
export const DrawerFlow = () => {
    return (
        <Drawer.Navigator
            
            drawerType='slide'
            drawerContent={props => <ReduxCustomDrawerContent {...props} />}
            drawerContentOptions={{
                activeTintColor: 'orange',
                backgroundColor: '#F5F5F5'
            }}
        >
            <Drawer.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    drawerIcon: () => <HomeIcon />,
                }}
            />
            <Drawer.Screen 
                name="Utilidades" 
                component={UtilidadesScreen}
                options={{
                    drawerIcon: () => <UtilidadesIcon />,
                }}
            />
            <Drawer.Screen 
                name="CCE" 
                component={CCEScreen}
                options={{
                    drawerIcon: () => <CCEIcon />
                }}
            />
            <Drawer.Screen 
                name="CEL" 
                component={CELScreen}
                options={{
                    drawerIcon: () => <CELIcon />,
                }}
            />
            <Drawer.Screen 
                name="MNP" 
                component={MNPScreen}
                options={{
                    drawerIcon: () => <MNPIcon />
                }}
            />
            <Drawer.Screen 
                name="PRO" 
                component={PROScreen}
                options={{
                    drawerIcon: () => <PROIcon />
                }}
            />
            <Drawer.Screen 
                name="QAB" 
                component={QABScreen}
                options={{
                    drawerIcon: () => <QABIcon />
                }}
            />
        </Drawer.Navigator>
    );
};
