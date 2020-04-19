export const convertHerokuReunioesToValidData = (data) => {
    let newData = {};
    
    const addData = (reuniao) => {
        const reunioesNoDia = newData[reuniao.data.dia];
        
        const novaReuniao = {};
        novaReuniao['title'] = reuniao.title
        novaReuniao['prioridade'] = reuniao.prioridade
        novaReuniao['hora_inicio'] = reuniao.data.hora_inicio
        novaReuniao['hora_final'] = reuniao.data.hora_final
        
        if (!reunioesNoDia) {
            newData[reuniao.data.dia] = [novaReuniao]
        } else {
            newData[reuniao.data.dia] = [...reunioesNoDia, novaReuniao]
        }
    }
    
    data.forEach(addData)
    return newData;
};



export const fillEmptyDates = (responseData) => {
    const getTodayTimeStamp = () => {
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const timestamp = startOfDay / 1
        return timestamp;
    };
    
    const convertTimeStampToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    };
    
    const getArrayOfDates = (todayTimeStamp, dateRange = 70) => {
        let arrayOfDates = [];
        for (let dia = -dateRange; dia < dateRange; dia = dia + 1) {
            const dayTimeStamp = todayTimeStamp + dia * 24 * 60 * 60 * 1000;
            const strTime = convertTimeStampToString(dayTimeStamp);
            arrayOfDates.push(strTime)
        };
        return arrayOfDates;
    };
    
    const fillResponseDataEmptyDates = (arrayOfDates, responseData) => {
        arrayOfDates.forEach((day) => {
            if (responseData[day] === undefined) {
                responseData[day] = []
            };
        });
        return responseData;
    };

    const todayTimeStamp = getTodayTimeStamp();
    const arrayOfDates= getArrayOfDates(todayTimeStamp);
    const fulfilledResponseData = fillResponseDataEmptyDates(arrayOfDates, responseData)
    return fulfilledResponseData;
};


