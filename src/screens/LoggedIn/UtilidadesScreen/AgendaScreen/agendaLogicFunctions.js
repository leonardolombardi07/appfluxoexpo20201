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