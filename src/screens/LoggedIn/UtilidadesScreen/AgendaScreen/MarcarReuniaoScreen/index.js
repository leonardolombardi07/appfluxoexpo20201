import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { marcarReuniao } from '../../../../../redux/actions/reunioesActions';

const MarcarReuniaoScreen = (props) => {
    return (
        <View style={styles.marcarReuniaoContainer}>
            <Text>Hello</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    marcarReuniaoContainer: {
        backgroundColor: 'red',
        flex: 1
    }
});

const mapStateToProps = (state) => {
    return { reunioesData: state.reunioesData }
};

export default connect(
    mapStateToProps,
    { marcarReuniao }
)(MarcarReuniaoScreen);