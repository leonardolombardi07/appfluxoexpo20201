import axios from 'axios';
import { AsyncStorage } from 'react-native';

const HerokuBaseUrl = 'https://appfluxo192.herokuapp.com';

export const HerokuApiPost = axios.create({
    baseURL: HerokuBaseUrl,
    headers: {
        "content-type": 'application/json'
    }
});

export const HerokuApiPostAuth = axios.create({
    baseURL: HerokuBaseUrl,
    headers: {
        "content-type": 'application/json'
    }
});
HerokuApiPostAuth.interceptors.request.use(
    async (config) => {
        const access_token = await AsyncStorage.getItem("access_token");
        if (access_token) {
            config.headers.Authorization = access_token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export const HerokuApiGet = axios.create({
    baseURL: HerokuBaseUrl, 
})


export const HerokuApiGetAuth = axios.create({
    baseURL: HerokuBaseUrl, 
});
HerokuApiGetAuth.interceptors.request.use(
    async (config) => {
        const access_token = await AsyncStorage.getItem("access_token");
        if (access_token) {
            config.headers.Authorization = access_token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);