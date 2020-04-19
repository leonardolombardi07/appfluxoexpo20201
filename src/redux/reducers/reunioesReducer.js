import { GET_REUNIOES, EDIT_FORMS_DATA, MARCAR_REUNIAO } from '../actions/types';


const initialState = {
    reunioes: {},
    formsData: {
        titulo: '',
        dia: '',
        prioridade: 1,
        hora_inicio: '',
        hora_final: ''
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REUNIOES:
            return {
                ...state,
                reunioes: action.payload
            };
        case EDIT_FORMS_DATA:
            return action.payload; //consertar
        case MARCAR_REUNIAO:
            return {
                ...state
            };
        default: 
            return state;
    };
};