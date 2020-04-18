import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import PlusButton from '../../../../components/PlusButton';
import { connect } from 'react-redux';
import { fetchReunioes, marcarReuniao } from '../../../../redux/actions/reunioesActions';


const AgendaScreen = (props) => {
    return (
        <View style={styles.agendaContainer}>
            <Agenda
            // items={}
            selected={new Date()}
            onRefresh={() => console.log("refreshing")}
            refreshing={false}
            />
            <PlusButton onPress={() => props.navigation.navigate('Utilidades')}/>
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