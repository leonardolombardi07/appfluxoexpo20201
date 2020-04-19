import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { openPrioridadesModal } from '../../../redux/actions/reunioesActions';
import { AntDesign } from '@expo/vector-icons';
import { screenWidth, screenHeight } from '../../../constants/dimensions';

const MainHeaderPrioridadesButton = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.openPrioridadesModal()}
            style={styles.buttonContainerStyle}
        >
            <AntDesign name="question" size={screenWidth*0.06} color="black" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainerStyle: {
        marginRight: screenWidth * 0.05,
        width: screenWidth * 0.08,
        height: screenWidth * 0.08,
        borderRadius: screenWidth * 0.08 / 2, 
        backgroundColor: '#D6D6D6',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default connect(
    null,
    { openPrioridadesModal }
)(MainHeaderPrioridadesButton);