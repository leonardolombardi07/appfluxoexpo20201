import { SIGN_IN, SIGN_OUT, TRY_LOCAL_SIGN_IN, ADD_ERROR } from './types';
import { HerokuApiPost } from '../../apis/HerokuApi';
import { AsyncStorage } from 'react-native';
import * as RootNavigation from '../../routes/navigationFunctions/RootNavigation';

export const tryLocalSignIn = () => async (dispatch) => {
    const refresh_token = await AsyncStorage.getItem('refresh_token');
    if (refresh_token) {
        const endPoint = `https://podio.com/oauth/token?grant_type=refresh_token&client_id=appfluxo&client_secret=snwczBivL56WeU2tHeA4oSPoxuOo0BL9VnmmWTOuESZ3x1m0VrDbPrj7bfBTzQEL&refresh_token=${refresh_token}`
        
        try {
           const response = await HerokuApiPost.post(endPoint);
           await AsyncStorage.setItem('access_token', response.data.access_token);
           await AsyncStorage.setItem('refresh_token', response.data.refresh_token);
           console.log(response.data.access_token)
           dispatch({ 
               type: TRY_LOCAL_SIGN_IN,
               payload: {
                   loadingAccessToken: false,
                   access_token: response.data.access_token,
                   refresh_token: response.data.refresh_token
               }
             })
        } catch (error) {
            alert(error.message)
        };

    } else {
        // console.log("tryLocalSignIN em authActions chamada: não há refresh_token")
        dispatch({ 
            type: TRY_LOCAL_SIGN_IN,
            payload: {
                loadingAccessToken: false,
                access_token: null,
                refresh_token: null
            }
          })
    }
}

export const signIn = ({ email, password }) => async (dispatch) => {
    try {
        const json = JSON.stringify({ email: email, password: password });
        const response = await HerokuApiPost.post ('/auth/', json);
        await AsyncStorage.setItem ("access_token", response.data.access_token);
        await AsyncStorage.setItem ("refresh_token", response.data.refresh_token);
        dispatch ({ 
            type: SIGN_IN, 
            payload: { 
            access_token: response.data.access_token, 
            refresh_token: response.data.refresh_token
         }
        });
        RootNavigation.navigate('Home')

    } catch (error) {
        dispatch({
            type: ADD_ERROR,
            payload: "Infelizmente não foi possível efetuar o Login"
        });
    };

}

export const signOut = () => async (dispatch) => {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("refresh_token");
    dispatch({ type: SIGN_OUT })
};
