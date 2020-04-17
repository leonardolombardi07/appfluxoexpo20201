import React from 'react';
import { StatusBar } from 'react-native';
//Redux
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { useSelector } from 'react-redux';
//Navigation Flows
import SplashScreen from './src/screens/LoggedOut/SplashScreen';
import { AuthStackFlow } from './src/routes/flows/AuthStackFlow';
import { DrawerFlow } from './src/routes/flows/DrawerFlow';

const AppNavigator = () => {
  const { loadingAccessToken, access_token } = useSelector(state => state.authData);

  if (loadingAccessToken) {
    return <SplashScreen />
  };
  
  if (!access_token) {
    return <AuthStackFlow />
  };
  
  return <DrawerFlow />
};

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="orange" barStyle='light-content' />
      <AppNavigator />
    </Provider>
  )
}
