import { CHANGE_PLANTAO_STATUS } from './types';
import { HerokuApiGetAuth, HerokuApiPostAuth } from '../../apis/HerokuApi';
import { AsyncStorage } from 'react-native';
import {
    wasOpenedLessThen30MinutesAgo,
    wasOpenedLessThen90MinutesAgo,
    convertHourToPlantaoId
} from '../../constants/functions/plantaoFunctions';
import * as RootNavigation from '../../routes/navigationFunctions/RootNavigation';


export const checkPlantaoStatus = () => async (dispatch) => {
    alert("CheckPlantaoStatus foi chamada")
    const currentTime = new Date(); //Verficar horario atual (convert newDate to minutes)
    try {
        if (currentTime.getMinutes() > 20 && currentTime.getMinutes() < 50) {
            // If entre 20 e 50 minutos, statusPlantao = null
            alert("Dispatch null. Não se pode abrir nem fechar plantões entre x:20 e x:50")
            dispatch({ type: CHANGE_PLANTAO_STATUS, payload: null })
        } else {
            // Else (minutos entre 0-20 ou 50-60)
            const response = await HerokuApiGetAuth.get('/plantao/') //Pegar do back lista com 20 últimos plantões
            const user_id = await parseInt(AsyncStorage.getItem("user_id")); //Pegar Id do usuário
            // Checar se usuário ta nessa lista
            const horarios = [];
            response.data.forEach((objeto) => {
                if (objeto.usuario[0].user_id == user_id) {
                    if (objeto.status === 'fechado') { // Se o plantao já estiver fechado
                        dispatch({ type: CHANGE_PLANTAO_STATUS, payload: 'fechado' })
                    } else {
                        horarios.push(
                            objeto.primeiro_plantao,
                            objeto.segundo_plantao,
                            objeto.horario_entrada
                        )
                    }
                }
            });
    
            // If usuário está na lista de últimos plantões
            if (horarios.length != 0) {
                if (horarios[1] != null) { //Se foram marcados dois plantões
                    if (wasOpenedLessThen90MinutesAgo(horarios[-1])) {
                        dispatch({ type: CHANGE_PLANTAO_STATUS, payload: null })
                    } else {
                        dispatch({ type: CHANGE_PLANTAO_STATUS, payload: 'aberto' })
                    }
                } else { // Se foi marcado apenas um plantão
                    //Checar se o último plantão foi realizado há menos de 30 minutos
                    if (wasOpenedLessThen30MinutesAgo(horarios[-1])) {
                        // Se foi há menos que 30 minutos
                        dispatch({ type: CHANGE_PLANTAO_STATUS, payload: null })
                    } else {
                        // Se foi há mais que 30 minutos
                        dispatch({ type: CHANGE_PLANTAO_STATUS, payload: 'aberto' })
                    }
                }
    
    
            } else { //(usuário não está na lista de últimos plantões)
                dispatch({ type: CHANGE_PLANTAO_STATUS, payload: 'fechado' })
                console.log("Usuario não está na lista, plantao fechado e portanto pode abrir um plantao")
            }
        };
    } catch (error) {
        alert(error.message)
    }
};

export const fecharPlantao = () => async (dispatch) => {
        alert("Fechar Plantao Chamado")
        // importante: devemos usar o "data", url passado pelo QR code, para evitar que as
        // pessoas marquem plantao com qualquer qr code
        try {
            const json = JSON.stringify({ fechar: 1 });
            const response = await HerokuApiPostAuth.post('/plantao/', json);
            dispatch({ type: CHANGE_PLANTAO_STATUS, payload: 'fechado' })
        } catch (error) {
            alert(error.message)
        } finally {
            RootNavigation.navigate('Utilidades');
        }
    }


export const abrirPlantao = () => async (dispatch) => {
        alert("Abrir Plantao chamada")
        // importante: devemos usar o "data", url passado pelo QR code, para evitar que as
        // pessoas marquem plantao com qualquer qr code
        try {
            let postID = convertHourToPlantaoId();
            const json = JSON.stringify({ primeiro_plantao: postID, segundo_plantao: null }) // lidar com marcação de dois plantoes
            const response = await HerokuApiPostAuth.post('/plantao/', json);
            dispatch({ type: CHANGE_PLANTAO_STATUS, payload: 'aberto' })
        } catch (error) {
            alert("Erro na função abrirPlantao: " + String(error.message))
        } finally {
            RootNavigation.navigate('Utilidades');
        }
    }

