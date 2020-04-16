const initialState = {
    loadingAccessToken: true,
    access_token: null,
    refresh_token: null, 
    user_id: null
}

export default function (state=initialState, action) {
    switch (action.type) {
        case "1":
            return true;
        case "2":
            return false;
        default:
            return state;
    }
}