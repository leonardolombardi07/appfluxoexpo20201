import React from 'react';
//Redux
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { useSelector } from 'react-redux';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Screens
  //LoggedOut
import SplashScreen from './src/screens/LoggedOut/SplashScreen';
import LoginScreen from './src/screens/LoggedOut/LoginScreen';
  //LoggedIn
import HomeScreen from './src/screens/LoggedIn/HomeScreen';


const Drawer = createDrawerNavigator();
const AuthStack = createStackNavigator();


const AppNavigator = () => {
  const { loadingAccessToken, access_token } = useSelector(state => state.authData);

  if (loadingAccessToken) {
    return <SplashScreen />
  };
  
  if (!access_token) {
    return (
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
        </AuthStack.Navigator>
      </NavigationContainer>
    )
  };
  
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}
