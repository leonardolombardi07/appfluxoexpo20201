import { HerokuApiGetAuth, HerokuApiPostAuth } from '../../apis/HerokuApi';
import { GET_REUNIOES, ADD_REUNIAO } from './types';
import * as RootNavigation from '../../routes/navigationFunctions/RootNavigation';
import { 
    convertHerokuReunioesToValidData,
    fillEmptyDates 
} from '../../screens/LoggedIn/UtilidadesScreen/AgendaScreen/agendaLogicFunctions';

export const fetchReunioes = () => async (dispatch) => {
    // alert("fetchReunioes foi chamada")
    try {
        const response = await HerokuApiGetAuth.get('/reuniao/');
        const data = convertHerokuReunioesToValidData(response.data);
        const fullData = fillEmptyDates(data);
        dispatch({ type: GET_REUNIOES, payload: fullData })
    } catch (error) {
        alert(error.message)
        // const fullData = fillEmptyDates({});
        const fullData = {};
        dispatch({ type: GET_REUNIOES, payload: fullData })
    };
};

export const marcarReuniao = () => async (dispatch) => {
    alert("addReuniao foi chamada")

    // try {
    //     const json = JSON.stringify({ fechar: 1 });
    //     const response = await HerokuApiPostAuth.post('/reuniao/', json);
    //     dispatch({ type: ADD_REUNIAO, payload: response.data })
    // } catch (error) {
    //     alert(error.message)
    // } finally {
    //     RootNavigation.navigate('Agenda');
    // };
};