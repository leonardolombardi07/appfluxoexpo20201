export const convertHourToPlantaoId = () => {
    // Função que, dado o dia e horário em que é chamada, 
    // retorna o ID para marcar o plantao do horário
    // correspondente
    const horario_atual = new Date();
    let hora_atual = horario_atual.getHours();
    let hora_plantao;
    const minutos_atual = horario_atual.getMinutes();
    if (hora_atual < 6 || hora_atual >= 17 || (hora_atual === 16 && minutos_atual >= 20)) {
        return "Não é possível abrir um plantão antes de 6AM ou depois de 17AM"
    }

    if (minutos_atual > 50) {
        hora_plantao = hora_atual + 1
    } else {
        hora_plantao = hora_atual
    }

    switch (horario_atual.getDay()) {
        case 1: //segunda
            const segunda = {8: 653918811, 9: 653919077, 10: 653920156, 11: 653926877, 12: 653927226, 13: 653927592, 14: 653928102, 15: 653928340, 16: 653928548}
            return segunda[hora_plantao]

        case 2: //terça
            const terca = 
            {8: 653930182, 9: 653930443, 10: 653930939, 11: 653931752, 12: 653932761, 13: 653933050, 14: 653933278, 15: 653933792, 16: 653934008}
            return terca[hora_plantao]

        case 3: //quarta
            const quarta = {8: 653937574, 9: 653934677, 10: 653935124, 11: 653935867, 12: 653936027, 13: 653936592, 14: 653936901, 15: 653937367, 16: 653934379}
            return quarta[hora_plantao]

        case 4: //quinta
            const quinta = {8: 653937657, 9: 653937747, 10: 653937861, 11: 653937974, 12: 653938054, 13: 653938121, 14: 653939159, 15: 653938287, 16: 653938397}
            return quinta[hora_plantao]

        case 5: //sexta
            const sexta = {8: 800703362, 9: 653938444, 10: 653938465, 11: 653938512, 12: 653938726, 13: 653938753, 14: 653938796, 15: 653939022, 16: 653939064}
            return sexta[hora_plantao]

        case 6: //sabado
            return "Não é possível trabalhar sabado"

        case 0: //domingo
            return "Não é possível trabalhar domingo"
        default:
            return null

    }
}

export const wasOpenedLessThen30MinutesAgo = (ISOdate) => {
    // Verifica se a já se passaram 30 minutos da data passada como argumento
    const HALF_HOUR = 30 * 60 * 1000;
    const horario_atual = new Date();
    const horario_plantao = new Date(ISOdate);

    return (date.getTime() - HALF_HOUR < new_date.getTime())
};

  
export const wasOpenedLessThen90MinutesAgo = (ISOdate) => {
    // Verifica se a já se passaram 30 minutos da data passada como argumento
    const HALF_HOUR = 90 * 60 * 1000;
    const horario_atual = new Date();
    const horario_plantao = new Date(ISOdate);

    return (date.getTime() - HALF_HOUR < new_date.getTime())
}