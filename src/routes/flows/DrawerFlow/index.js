import React from 'react';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem 
} from '@react-navigation/drawer';
import { navigationRef } from '../../navigationFunctions/RootNavigation';
import { 
    HomeStackFlow,
    UtilidadesStackFlow,
    CCEStackFlow,
    CELStackFlow,
    MNPStackFlow,
    PROStackFlow,
    QABStackFlow
} from '../StacksFlow';
//Assets
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


const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerHeader />
            <DrawerItemList
            labelStyle={{color: 'black', fontWeight: '700', fontSize: screenWidth * 0.04}}
            {...props} />
            <DrawerItem 
                label="Sair"
                labelStyle={{
                    color: 'red', fontWeight: '700', 
                    fontSize: screenWidth * 0.05, marginTop: screenWidth*0.03,
                }}
                onPress={() => props.signOut()} 
            />
        </DrawerContentScrollView>
    );
};
const ReduxCustomDrawerContent = connect(null,{ signOut })(CustomDrawerContent);

const Drawer = createDrawerNavigator();
export const DrawerFlow = () => {
    return (
        <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
            drawerType='front'
            drawerContent={props => <ReduxCustomDrawerContent {...props} />} 



            drawerContentOptions={{
                activeTintColor: 'orange',
                backgroundColor: '#F5F5F5'
            }}
        >
            <Drawer.Screen 
                name="Home" 
                component={HomeStackFlow} 
                options={{
                    drawerIcon: () => <HomeIcon />,
                }}
            />
            <Drawer.Screen 
                name="Utilidades" 
                component={UtilidadesStackFlow}
                options={{
                    drawerIcon: () => <UtilidadesIcon />,
                }}
            />
            <Drawer.Screen 
                name="CCE" 
                component={CCEStackFlow}
                options={{
                    drawerIcon: () => <CCEIcon />
                }}
            />
            <Drawer.Screen 
                name="CEL" 
                component={CELStackFlow}
                options={{
                    drawerIcon: () => <CELIcon />,
                }}
            />
            <Drawer.Screen 
                name="MNP" 
                component={MNPStackFlow}
                options={{
                    drawerIcon: () => <MNPIcon />
                }}
            />
            <Drawer.Screen 
                name="PRO" 
                component={PROStackFlow}
                options={{
                    drawerIcon: () => <PROIcon />
                }}
            />
            <Drawer.Screen 
                name="QAB" 
                component={QABStackFlow}
                options={{
                    drawerIcon: () => <QABIcon />
                }}
            />
        </Drawer.Navigator>
        </NavigationContainer>
    );
};
