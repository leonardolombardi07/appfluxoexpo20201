import React from 'react';
//Redux
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { useSelector } from 'react-redux';
//Navigation Flows
import SplashScreen from './src/screens/LoggedOut/SplashScreen';
import { AuthStackFlow } from './src/routes/flows/AuthStackFlow';
import { MainFlow } from './src/routes/flows/DrawerFlow';

const AppNavigator = () => {
  const { loadingAccessToken, access_token } = useSelector(state => state.authData);
  console.log(access_token)

  if (loadingAccessToken) {
    return <SplashScreen />
  };
  
  if (!access_token) {
    return <AuthStackFlow />
  };
  
  return <MainFlow />
};

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}
