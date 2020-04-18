import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { portugueseLocales, agendaTheme } from './agendaThemes';
LocaleConfig.locales['pt'] = portugueseLocales;
LocaleConfig.defaultLocale = 'pt';
import { renderItem, renderEmptyData, renderEmptyDate } from './agendaFunctions';
import PlusButton from '../../../../components/PlusButton';
import { connect } from 'react-redux';
import { fetchReunioes, marcarReuniao } from '../../../../redux/actions/reunioesActions';


const AgendaScreen = (props) => {
    return (
        <View style={styles.agendaContainer}>
            <Agenda
            // items={}
            renderItem={renderItem}
            renderEmptyDate={renderEmptyDate}
            renderEmptyData={renderEmptyData}
            selected={new Date()}
            onRefresh={() => props.fetchReunioes()}
            refreshing={false}
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