import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "native-base";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { screenWidth, screenHeight } from "../../../../../constants/dimensions";
import { connect } from "react-redux";
import { marcarReuniao } from "../../../../../redux/actions/reunioesActions";
import useFormsData from "../../../../../hooks/useFormsData";

const MarcarReuniaoScreen = (props) => {
  const formsData = useFormsData();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const handleFormSubmit = async (formsData) => {
    setIsLoadingSubmit(true);
    await props.marcarReuniao(formsData);
    setIsLoadingSubmit(false);
  };

  return (
    <View style={styles.formsScreenContainer}>
      {/* Primeira Linha */}
      <View style={styles.formsContainer}>
        <TextInput
          style={styles.formsTitleInputText}
          placeholder="Adicionar título"
          value={formsData.title}
          onChangeText={(newTitle) => formsData.setTitle(newTitle)}
          autoCorrect={false}
          spellCheck={false}
        />
        {/* Segunda Linha */}
        <View style={styles.formsRowContainer}>
          <Ionicons name="md-clock" size={30} color="grey" />
          {/* Day Date Picker */}
          <View style={styles.dateTimePickerButtonContainer}>
            <TouchableOpacity
              style={styles.dateTimePickerButtonContainer}
              onPress={() => formsData.setShowDay(true)}
            >
              {formsData.showDay && (
                <DateTimePicker
                  testID="dayTimePicker"
                  value={formsData.day}
                  mode="date"
                  onChange={formsData.onDayChange}
                />
              )}
              <Text style={styles.datePickerTextStyle}>
                {formsData.day.toLocaleDateString()}
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={25}
                color="grey"
              />
            </TouchableOpacity>
          </View>
          {/* HoraInicio Date Picker */}
          <View style={styles.dateTimePickerButtonContainer}>
            <TouchableOpacity
              style={styles.dateTimePickerButtonContainer}
              onPress={() => formsData.setShowHoraInicio(true)}
            >
              {formsData.showHoraInicio && (
                <DateTimePicker
                  testID="horaInicioTimePicker"
                  value={formsData.horaInicio}
                  mode="time"
                  is24Hour={true}
                  onChange={formsData.onHoraInicioChange}
                />
              )}
              <Text style={styles.datePickerTextStyle}>
                {formsData.horaInicio.toLocaleTimeString().substr(0, 5)}
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={25}
                color="grey"
              />
            </TouchableOpacity>
          </View>
          {/* HoraFinal Date Picker */}
          <View style={styles.dateTimePickerButtonContainer}>
            <TouchableOpacity
              style={styles.dateTimePickerButtonContainer}
              onPress={() => formsData.setShowHoraFinal(true)}
            >
              {formsData.showHoraFinal && (
                <DateTimePicker
                  testID="horaFinalTimePicker"
                  value={formsData.horaFinal}
                  mode="time"
                  is24Hour={true}
                  onChange={formsData.onHoraFinalChange}
                />
              )}
              <Text style={styles.datePickerTextStyle}>
                {formsData.horaFinal.toLocaleTimeString().substr(0, 5)}
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={25}
                color="grey"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Erro */}
        {formsData.horaFinal.toLocaleTimeString().substr(0, 5) <
        formsData.horaInicio.toLocaleTimeString().substr(0, 5) ? (
          <Text style={styles.validationErrorText}>
            Uops... Reunião terminando antes de começar?{" "}
          </Text>
        ) : null}
        {/* Terceira linha */}
        <View style={styles.formsRowContainer}>
          <AntDesign name="exclamation" size={30} color="grey" />
          <Text style={styles.prioridadePickerTextStyle}>Prioridade: </Text>
          <Picker
            mode="dropdown"
            selectedValue={formsData.prioridade}
            onValueChange={(value) => formsData.setPrioridade(value)}
          >
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
          </Picker>
        </View>
        <View style={styles.formsButtonRowContainer}>
          <TouchableOpacity
            style={styles.formsButton}
            onPress={() => props.navigation.goBack()}
          >
            <Text style={styles.formsButtonText}>Cancelar</Text>
          </TouchableOpacity>
          {!isLoadingSubmit ? (
            <TouchableOpacity
              style={styles.formsButton}
              onPress={() =>
                Alert.alert(
                  "Você deseja mesmo marcar a reunião?",
                  "Por gentileza, verifique os dados...",
                  [
                    { text: "Não", style: "cancel" },
                    {
                      text: "Sim",
                      onPress: () =>
                        handleFormSubmit({
                          dia: formsData.day,
                          prioridade: formsData.prioridade,
                          hora_inicio: formsData.horaInicio,
                          hora_final: formsData.horaFinal,
                        }),
                      style: "default",
                    },
                  ],
                  { cancelable: true }
                )
              }
            >
              <Text style={styles.formsButtonText}>Salvar </Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.formsButton}>
              <ActivityIndicator size="large" color="white" />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formsScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formsContainer: {
    elevation: 10,
    width: screenWidth * 0.9,
    backgroundColor: "white",
    borderRadius: screenHeight * 0.01,
  },
  formsTitleInputText: {
    borderBottomWidth: 1,
    borderColor: "grey",
    fontSize: screenHeight * 0.05,
    marginLeft: screenWidth * 0.1,
    marginRight: screenWidth * 0.02,
    marginVertical: screenHeight * 0.01,
  },
  formsRowContainer: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "grey",
    marginVertical: screenHeight * 0.01,
    marginHorizontal: screenWidth * 0.02,
    minHeight: screenHeight * 0.065,
    alignItems: "center",
    paddingLeft: screenWidth * 0.01,
    justifyContent: "space-between",
  },
  datePickerTextStyle: {
    fontSize: screenHeight * 0.02,
    color: "black",
  },
  prioridadePickerTextStyle: {
    fontSize: screenHeight * 0.025,
    color: "black",
  },
  dateTimePickerButtonContainer: {
    width: "20%",
    flexDirection: "row",
    paddingHorizontal: 2,
    marginRight: "2%",
    backgroundColor: "blue",
  },
  formsButtonRowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: screenHeight * 0.065,
    marginVertical: screenHeight * 0.03,
    alignItems: "center",
  },
  formsButton: {
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    marginHorizontal: screenWidth * 0.06,
    width: screenWidth * 0.3,
    height: "80%",
  },
  formsButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: screenHeight * 0.03,
  },
  dateTimePickerButtonContainer: {
    flexDirection: "row",
    flexDirection: "row",
    marginRight: "1%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  datePickerTextStyle: {
    fontSize: screenHeight * 0.02,
    color: "black",
  },
  validationErrorText: {
    textAlign: "right",
    color: "red",
    fontWeight: "bold",
    fontStyle: "italic",
    marginRight: screenWidth * 0.02,
    marginTop: -screenHeight * 0.006,
  },
});

export default connect(null, { marcarReuniao })(MarcarReuniaoScreen);
