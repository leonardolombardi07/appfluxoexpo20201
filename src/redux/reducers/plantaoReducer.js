import { CHANGE_PLANTAO_STATUS } from '../actions/types';

const initialState = 'fechado';

export default function (state=initialState, action) {
    switch (action.type) {
        case CHANGE_PLANTAO_STATUS:
            return action.payload;
        default:
            return state;
    }
}