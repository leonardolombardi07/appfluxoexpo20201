import { GET_REUNIOES, ADD_REUNIAO } from '../actions/types';

const initialState = {
    reunioes: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REUNIOES:
            return action.payload;
        case ADD_REUNIAO:
            return {
                reunioes: [...action.payload]
            }; //consertar
        default: 
            return state;
    };
};