import React from 'react';
import { StatusBar, Alert } from 'react-native';
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
import LogoutButton from '../../assets/DrawerNavigation/LogoutButton';
import { SimpleLineIcons } from '@expo/vector-icons';
//Styling
import { screenWidth, screenHeight } from '../../../constants/dimensions';
//Redux for logout
import { connect } from 'react-redux';
import { signOut } from '../../../redux/actions/authActions';


const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} >
            <DrawerHeader />
            <DrawerItemList
            itemStyle={{height: screenHeight * 0.05, justifyContent: 'center'}}
            labelStyle={{color: 'black', fontWeight: '700', fontSize: screenWidth * 0.04}}
            {...props} />
            <DrawerItem
            icon={() => <SimpleLineIcons name="logout" size={screenWidth * 0.07} color="red" />}
                label="Sair"
                labelStyle={{
                    color: 'red', fontWeight: '700', alignItems:'center',
                    fontSize: screenWidth * 0.05,
                }}
                onPress={
                    () => 
                    Alert.alert(
                        "Você deseja mesmo sair?",
                        "Vamos sentir sua falta /:",
                        [
                            { text: "Não", style: 'cancel'},
                            { text: "Sim", onPress: () =>  props.signOut(), style: 'default'}
                        ],
                        {cancelable: true}
                    )
                } 
            />
        </DrawerContentScrollView>
    );
};
const ReduxCustomDrawerContent = connect(null,{ signOut })(CustomDrawerContent);

const Drawer = createDrawerNavigator();
export const DrawerFlow = (props) => {
    return (
        <NavigationContainer ref={navigationRef}>
        <StatusBar backgroundColor="orange" barStyle='dark-content' />
        <Drawer.Navigator
            drawerType='front'
            drawerContent={props => <ReduxCustomDrawerContent {...props} />} 
            drawerContentOptions={{
                activeTintColor: 'orange',
                backgroundColor: '#F5F5F5',
                itemStyle: {
                    // alignItems: 'center'
                }
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
