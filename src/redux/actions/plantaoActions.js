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
    const currentTime = new Date();
    const token = await AsyncStorage.getItem("plantao_id");
    
    let statusPlantao = null;
    let canChangePlantaoStatus = null;

    
    if (currentTime.getMinutes() > 20 && currentTime.getMinutes() < 50) {
        if (!token) {
            statusPlantao = 'Fechado';
            canChangePlantaoStatus = true;
        }
        else if (token) {
            statusPlantao = 'Aberto';
            try {
                // Checar há quanto tempo foi marcado o último plantão
                const response = await HerokuApiGetAuth.get('/plantao/');
                const user_id = await parseInt(AsyncStorage.getItem("user_id"));
                const horarios = [];
                response.data.forEach((objeto) => {
                    if (objeto.usuario[0].user_id == user_id) {
                        if (objeto.status === 'Aberto') {
                            horarios.push(
                                objeto.primeiro_plantao,
                                objeto.segundo_plantao,
                                objeto.horario_entrada
                            );
                        };
                    };
                });

                if (horarios.length === 0) { //Nao foi encontrado, o plantão foi aberto há muito tempo
                    canChangePlantaoStatus = true;
                }
                else if (horarios.length !== 0) {
                    if (wasOpenedLessThen30MinutesAgo(horarios[-1])) {
                        canChangePlantaoStatus = true;
                    } else if (!wasOpenedLessThen30MinutesAgo(horarios[-1])) {
                        canChangePlantaoStatus = false;
                    };
                };

            } catch (error) {
                alert(error.message)
            };
        };
    }
    else if (currentTime.getMinutes() < 20 || currentTime.getMinutes() > 50) {
        canChangePlantaoStatus = false;
        if (!token) {
            statusPlantao = 'Fechado';

        }
        else if (token) {
            statusPlantao = 'Aberto';
        
        };
    };
    
    console.log(statusPlantao, canChangePlantaoStatus)

    dispatch({ 
        type: CHANGE_PLANTAO_STATUS,
        payload: {
            statusPlantao: statusPlantao,
            canChangePlantaoStatus: canChangePlantaoStatus
        }
    });

};


export const fecharPlantao = (qrCodeURL) => async (dispatch) => {
        // alert("Fechar Plantao Chamado")
        let token = await AsyncStorage.getItem("plantao_id");
        token = parseInt(token);
        try {
            if (qrCodeURL !== 'https://fluxoconsultoria.poli.ufrj.br/appfluxoeobicho') throw "Por gentileza, scannear o QR code localizado na sede da Fluxo"
            if (!token) throw "Sem token";
            const json = JSON.stringify({ fechar: 1 });
            const response = await HerokuApiPostAuth.put(`/plantao/${token}/`, json);
            await AsyncStorage.removeItem("plantao_id");
            dispatch({ 
                type: CHANGE_PLANTAO_STATUS, 
                payload: {
                    statusPlantao: 'Fechado',
                    canChangePlantaoStatus: true //VERIFICAR ISSO: dependendo do horário é false
                }
            });
            
        } catch (error) {
            alert(error)
        } finally {      
            RootNavigation.navigate('Utilidades');
        };
};


export const abrirPlantao = (qrCodeURL) => async (dispatch) => {
        try {
            if (qrCodeURL !== 'https://fluxoconsultoria.poli.ufrj.br/appfluxoeobicho') throw "Por gentileza, scannear o QR code localizado na sede da Fluxo"
            let postID = convertHourToPlantaoId();
            if (postID === "Não é possível abrir um plantão antes de 6AM ou depois de 17AM") throw "Não é possível abrir um plantão antes de 6AM ou depois de 17AM";
            const json = JSON.stringify({ primeiro_plantao: postID, segundo_plantao: null }) // lidar com marcação de dois plantoes
            const response = await HerokuApiPostAuth.post('/plantao/', json);
            await AsyncStorage.setItem("plantao_id", String(response.data.item_id));
            console.log(json)

            dispatch({ 
                type: CHANGE_PLANTAO_STATUS, 
                payload: {
                    statusPlantao: 'Aberto',
                    canChangePlantaoStatus: false
                }
            });

        } catch (error) {
            alert("Erro na função abrirPlantao: " + error)
        } finally {
            RootNavigation.navigate('Utilidades');
        };
};

