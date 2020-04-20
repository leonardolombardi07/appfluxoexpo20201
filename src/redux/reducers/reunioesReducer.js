import { 
    GET_REUNIOES, 
    MARCAR_REUNIAO, 
    SHOW_PRIORIDADES_MODAL 
} from '../actions/types';


const initialState = {
    reunioes: {},
    isPrioridadesModalOpen: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REUNIOES:
            return {
                ...state,
                reunioes: action.payload
            };
        case MARCAR_REUNIAO:
            return {
                ...state
            };
        case SHOW_PRIORIDADES_MODAL:
            return {
                ...state,
                isPrioridadesModalOpen: action.payload
            }
        default: 
            return state;
    };
};