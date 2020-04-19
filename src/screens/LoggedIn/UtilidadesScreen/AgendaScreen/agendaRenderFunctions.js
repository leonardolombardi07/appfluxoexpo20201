import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { screenWidth, screenHeight } from '../../../../constants/dimensions';
import { PRIMARY_COLOR_LIGHT } from '../../../../constants/colors';
import { 
    PRIORIDADE_1_COLOR, 
    PRIORIDADE_2_COLOR, 
    PRIORIDADE_3_COLOR, 
    PRIORIDADE_4_COLOR, 
    PRIORIDADE_OUTRO_COLOR
} from '../../../../constants/colors/prioridadeColors';
import { EvilIcons, Feather } from '@expo/vector-icons';
import ShowError from '../../../../components/ShowError';

export const renderItem = (item, firstItemInDay) => {
    if (item.hora_inicio !== null) {
        item.hora_inicio = item.hora_inicio.slice(0,5);
    };

    if (item.hora_final !== null) {
        item.hora_final = item.hora_final.slice(0,5);
    };
 
    const setPrioridadeStyle = (prioridadeNumber) => {
        switch(prioridadeNumber) {
            case 1:
                return { backgroundColor:  PRIORIDADE_1_COLOR, borderRadius: screenWidth * 0.12 / 2 };
            case 2:
                return { backgroundColor:  PRIORIDADE_2_COLOR, borderRadius: screenWidth * 0.12 / 2 };
            case 3:
                return { backgroundColor:  PRIORIDADE_3_COLOR, borderRadius: screenWidth * 0.12 / 2 };
            case 4:
                return { backgroundColor:  PRIORIDADE_4_COLOR, borderRadius: screenWidth * 0.12 / 2 };
            case null:
                return null;
            default: 
                return { backgroundColor:  PRIORIDADE_OUTRO_COLOR, borderRadius: screenWidth * 0.12 / 2 };
        };
    };

    return (
    <View style={itemStyles.itemContainer}>
        <View style={itemStyles.informationContainer}>
            <Text style={itemStyles.titleStyle}>{item.title}</Text>
            <Text style={itemStyles.horariosStyle}>{item.hora_inicio} - {item.hora_final}</Text>
    
        </View>
        <View style={itemStyles.prioridadeContainer}>
            <View style={[itemStyles.prioridadeCircle, setPrioridadeStyle(item.prioridade)]}>
                <Text style={itemStyles.prioridadeTextStyle}>{item.prioridade}</Text>
            </View>
        </View>
        </View>
    );
};



const itemStyles = StyleSheet.create({
    itemContainer: {
        minHeight: screenHeight * 0.125,
        width: '95%',
        backgroundColor: '#D6D6D6',
        flexDirection: 'row',
        marginTop: screenHeight * 0.03,
        marginBottom: screenHeight * 0.02,
        borderRadius: screenHeight * 0.015,

    },
    informationContainer: {
        flexDirection: 'column',
        width: '70%',
        backgroundColor: 'transparent',
        paddingLeft: screenWidth * 0.04,
        paddingTop: screenHeight * 0.05,
        paddingBottom: screenHeight * 0.01

    },
    titleStyle: {
        color: PRIMARY_COLOR_LIGHT,
        fontWeight: 'bold',
        fontSize: screenHeight * 0.025
    },
    horariosStyle: {
        color: PRIMARY_COLOR_LIGHT,
        fontStyle:'italic',
        fontSize: screenHeight * 0.02,
    },
    prioridadeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: '30%',
        backgroundColor: 'transparent',
    },
    prioridadeCircle: {
        width: screenWidth * 0.12,
        height: screenWidth * 0.12,
        borderRadius: screenWidth * 0.12 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    prioridadeTextStyle: {
        fontSize: screenWidth * 0.12 * 0.5,
        color: 'black',
        fontWeight: '900'
    }
})

export const renderKnob = () => {
    return (
        <View style={knobStyles.knobContainer}>
            <Feather name="arrow-down" size={28} color="orange"/>
        </View>
    );
};

const knobStyles = StyleSheet.create({
    knobContainer: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: -4.5
    }
});

export const renderEmptyDate = () => {
    return null;
}

export const renderEmptyData = (day) => {
    return <ShowError errorMessage="agendaRenderFunction, linha 132: Erro no fetch das reunioes"/>
}