import { 
    
    GET_REUNIOES, 
    EDIT_FORMS_DATA, 
    MARCAR_REUNIAO, 
    SHOW_PRIORIDADES_MODAL 
} from '../actions/types';


const initialState = {
    reunioes: {},
    formsData: {
        titulo: '',
        dia: '',
        prioridade: 1,
        hora_inicio: '',
        hora_final: ''
    },
    isPrioridadesModalOpen: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REUNIOES:
            return {
                ...state,
                reunioes: action.payload
            };
        case EDIT_FORMS_DATA:
            return {
                ...state,
                formsData: action.payload
            } //consertar
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