import { HerokuApiGetAuth, HerokuApiPostAuth } from '../../apis/HerokuApi';
import { GET_REUNIOES, MARCAR_REUNIAO, SHOW_PRIORIDADES_MODAL } from './types';
import * as RootNavigation from '../../routes/navigationFunctions/RootNavigation';
import { 
    convertHerokuReunioesToValidData,
    fillEmptyDates 
} from '../../screens/LoggedIn/UtilidadesScreen/AgendaScreen/agendaLogicFunctions';

export const fetchReunioes = () => async (dispatch) => {
    // alert("fetchReunioes foi chamada")
    try {
        const response = await HerokuApiGetAuth.get('/reuniao/');
        // console.log(response.data)
        const data = convertHerokuReunioesToValidData(response.data);
        const fullData = fillEmptyDates(data);
        dispatch({ type: GET_REUNIOES, payload: fullData })
    } catch (error) {
        alert(error.message)
        const fullData = {};
        dispatch({ type: GET_REUNIOES, payload: fullData })
    };
};

export const marcarReuniao = (formsData) => async (dispatch) => {
    // alert("marcarReuniao foi chamada")
    console.log("MARCAR REUNIAO")
    try {
        let dia = formsData.dia.getDate();
        let mes = formsData.dia.getMonth();
        let ano = formsData.dia.getFullYear();

        if (mes.toString().length === 1) {
            mes = "0" + mes;
        };
        
        if (dia.toString().length === 1) {
            dia = "0" + dia
        };

        const json = JSON.stringify({
            dia: dia + "-" + mes + "-" + ano,
            prioridade: formsData.prioridade,
            hora_inicio: ano + "-" + mes + "-" + dia + " " + formsData.hora_inicio.toLocaleTimeString(),
            hora_final: ano + "-" + mes + "-" + dia + " " + formsData.hora_final.toLocaleTimeString()
        })
        const response = await HerokuApiPostAuth.post('/reuniao/', json);
        // dispatch({ type: MARCAR_REUNIAO, payload: response.data }) //mudar pra isso pra melhorar a perfomance
        await dispatch(fetchReunioes())
    
    } catch (error) {
        alert(error.message)
    } finally {
        RootNavigation.navigate('Agenda');
    };
};

export const openPrioridadesModal = () => (dispatch) => {
    dispatch({ type: SHOW_PRIORIDADES_MODAL, payload: true })
};

export const closePrioridadesModal = () => (dispatch) => {
    dispatch({ type: SHOW_PRIORIDADES_MODAL, payload: false })
};