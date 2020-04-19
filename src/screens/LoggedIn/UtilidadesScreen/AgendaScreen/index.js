import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { portugueseLocales, agendaTheme } from './agendaThemes';
LocaleConfig.locales['pt'] = portugueseLocales;
LocaleConfig.defaultLocale = 'pt';
import { renderItem, renderEmptyData, renderEmptyDate, renderKnob } from './agendaRenderFunctions';
import PlusButton from '../../../../components/PlusButton';
import { connect } from 'react-redux';
import { fetchReunioes, marcarReuniao } from '../../../../redux/actions/reunioesActions';


const AgendaScreen = (props) => {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = async () => {
        setIsRefreshing(true);
        await props.fetchReunioes();
        setIsRefreshing(false)
    };

    useEffect(() => {
        props.fetchReunioes();
    },[])

    return (
        <View style={styles.agendaContainer}>
            <Agenda
            items={props.reunioesData}
            renderItem={renderItem}
            renderEmptyDate={renderEmptyDate}
            renderEmptyData={renderEmptyData}
            renderKnob={renderKnob}
            selected={new Date()}
            onRefresh={handleRefresh}
            refreshing={isRefreshing}
            pastScrollRange={1}
            futureScrollRange={1}
            />
            <PlusButton onPress={() => props.navigation.navigate('MarcarReuniaoScreen')}/>
        </View>
        
    );
};

const styles = StyleSheet.create({
    agendaContainer: {
        flex: 1
    }
})



const mapStateToProps = (state) => {
    return { reunioesData: state.reunioesData }
};

export default connect(
    mapStateToProps,
    { fetchReunioes, marcarReuniao }
)(AgendaScreen);