import { TRY_LOCAL_SIGN_IN, SIGN_IN, SIGN_OUT } from '../actions/types';

const initialState = {
    loadingAccessToken: true,
    access_token: null,
    refresh_token: null, 
}

export default function (state=initialState, action) {
    switch (action.type) {
        case TRY_LOCAL_SIGN_IN:
            return {
                ...state,
                loadingAccessToken: false,
                access_token: action.payload.access_token, 
                refresh_token: action.payload.refresh_token,
            }
        case SIGN_IN:
            return {
                ...state,
                access_token: action.payload.access_token, 
                refresh_token: action.payload.refresh_token,
             };
        case SIGN_OUT:
            return {
                ...state,
                access_token: null, 
                refresh_token: null,
            };
        default:
            return state;
    }
}