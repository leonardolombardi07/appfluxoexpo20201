import React from 'react';
import { View, Text} from 'react-native';

export const renderEmptyDate = () => {
    return (
        <View>
            <Text>Não há nada nesse dia</Text>
        </View>
    )
}

export const renderEmptyData = () => {
    return (
        <View>
            <Text>Não há nada nesse dia</Text>
        </View>
    )
}

export const renderItem = (item, firstItemInDay) => {
    return (
    <View 
    style={{backgroundColor:'red', height: 50, flexDirection:'row',
    marginTop:40, justifyContent:'space-around'}}>
        <Text>{item.title}</Text>
        <Text>{item.prioridade}</Text>
        <Text>{item.hora_inicio}</Text>
        <Text>{item.hora_final}</Text>
        </View>
    )
}
