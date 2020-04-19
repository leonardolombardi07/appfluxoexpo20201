import React, { useState } from 'react';
import { View,  StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import { screenWidth, screenHeight } from '../constants/dimensions';
import { connect } from 'react-redux';
import { editFormsData } from '../redux/actions/reunioesActions';

const DatePicker = (props) => {
    console.log(props.formsData)
    const now = new Date();
    const initialState =  
        (props.mode === 'date') ? 
        now.toISOString().split('T')[0] :
        now.toISOString().split('T')[1].substr(0,5)
    
    const [date, setDate] = useState(new Date());
    const [displayDate, setDisplayDate] = useState(initialState);
    const [showDatePicker, setShowDatePicker] = useState(false);


    const handleDatePickerPress = (event, selectedDate) => {
        try {
            switch (props.type) {
                case 'dia':
                    props.editFormsData({...props.formsData, dia: selectedDate })
                    setDisplayDate(selectedDate.toISOString().split('T')[0])
                    break;
                case 'hora_inicio':
                    props.editFormsData({...props.formsData, hora_inicio: selectedDate })
                    setDisplayDate(selectedDate.toISOString().split('T')[1].substr(0,5))
                    break;
                case 'hora_final':
                    props.editFormsData({...props.formsData, hora_final: selectedDate })
                    setDisplayDate(selectedDate.toISOString().split('T')[1].substr(0,5))
                    break;
            }
            // console.log(selectedDate.toISOString().split('T')[1].substr(0,5))
        } catch (error) {
            // console.log(error.message)
        } finally {
            setShowDatePicker(false)
        }
        
    }

    return (
        <View style={styles.dateTimePickerButtonContainer}>
        <TouchableOpacity 
            style={styles.dateTimePickerButtonContainer} 
            onPress={() => setShowDatePicker(true)}
        >
            { showDatePicker ? 
             <DateTimePicker
             value={date}
             mode={props.mode}
             onChange={handleDatePickerPress}
             /> : null}
            <Text style={styles.datePickerTextStyle}>{displayDate}</Text>
            <MaterialIcons name='keyboard-arrow-down' size={25} color="grey" />
        </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    dateTimePickerButtonContainer: {
        flexDirection: 'row',
        flexDirection: 'row',
        marginRight: '1%',
        // borderBottomWidth: 0.6,
        // borderColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    datePickerTextStyle: {
        fontSize: screenHeight * 0.02, 
        color: 'black'
    },
});

const mapStateToProps = (state) => {
    return { formsData: state.reunioesData.formsData };
}

export default connect(
    mapStateToProps,
    { editFormsData }
)(DatePicker);