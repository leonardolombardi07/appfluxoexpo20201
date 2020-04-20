import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { portugueseLocales, agendaTheme } from './agendaThemes';
LocaleConfig.locales['pt'] = portugueseLocales;
LocaleConfig.defaultLocale = 'pt';
import { renderItem, renderEmptyData, renderEmptyDate, renderKnob } from './agendaRenderFunctions';
import PrioridadesModal from '../../../../components/PrioridadesModal';
import PlusButton from '../../../../components/PlusButton';
import { connect } from 'react-redux';
import { fetchReunioes, marcarReuniao, closePrioridadesModal } from '../../../../redux/actions/reunioesActions';


const AgendaScreen = (props) => {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = async () => {
        setIsRefreshing(true);
        await props.fetchReunioes();
        setIsRefreshing(false)
    };

    useEffect(() => {
        setTimeout(() => {
            props.fetchReunioes()}, 1000)
    },[]);

    let now = new Date();
    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days)
        return date
    };

    return (
        <View style={styles.agendaContainer}>
             <PrioridadesModal />
            <Agenda
            items={props.reunioesData.reunioes}
            renderItem={renderItem}
            renderEmptyDate={renderEmptyDate}
            // renderEmptyData={renderEmptyData}
            renderKnob={renderKnob}
            selected={now}
            onRefresh={handleRefresh}
            refreshing={isRefreshing}
            minDate={now.addDays(-60)}
            maxDate={now.addDays(60)}
            // pastScrollRange={3}
            // futureScrollRange={3}
            theme={{
                "stylesheet.agenda.main": {
                    knobContainer: {
                        // marginVertical: 2,
                        backgroundColor: 'white'
                    },
                    headerContainer: {
                        backgroundColor:'red',
                        // overflow: 'hidden',
                        justifyContent: 'flex-start',
                        height: '100%',
                        width: '100%'
                    },
                }
            }}
            />

            <PlusButton onPress={() => props.navigation.navigate('MarcarReuniaoScreen')}/>
        </View>

       
        
    );
};

const styles = StyleSheet.create({
    agendaContainer: {
        flex: 1,
        
    }
})

const mapStateToProps = (state) => {
    console.log(state);
    return { reunioesData: state.reunioesData }
};

export default connect(
    mapStateToProps,
    { fetchReunioes, marcarReuniao, closePrioridadesModal }
)(AgendaScreen);