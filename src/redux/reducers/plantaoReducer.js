import { CHANGE_PLANTAO_STATUS } from '../actions/types';

const initialState = {
    statusPlantao: null,
    canChangePlantaoStatus: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_PLANTAO_STATUS:
            return {
                statusPlantao: action.payload.statusPlantao,
                canChangePlantaoStatus: action.payload.canChangePlantaoStatus
            };
        default:
            return state;
    };
};