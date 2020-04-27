import React, { useState } from "react";
import { Platform } from "react-native";
import roundDate from "../constants/functions/roundDate";

export default () => {
  const now = new Date();

  //States
  const [title, setTitle] = useState("");
  const [day, setDay] = useState(now);
  const [prioridade, setPrioridade] = useState(1);
  const [horaInicio, setHoraInicio] = useState(
    roundDate({ date: new Date(), moment: "past" })
  );
  const [horaFinal, setHoraFinal] = useState(
    roundDate({ date: new Date(), moment: "future" })
  );

  //DatePicker States
  const [showDay, setShowDay] = useState(false);
  const [showHoraInicio, setShowHoraInicio] = useState(false);
  const [showHoraFinal, setShowHoraFinal] = useState(false);

  //DatePicker functions
  const onDayChange = (event, selectedDate) => {
    setShowDay(Platform.OS === "ios");
    if (selectedDate === undefined) {
      setDay(day);
    } else {
      const currentDay = selectedDate || day;
      setDay(currentDay);
    }
  };

  const onHoraInicioChange = (event, selectedDate) => {
    setShowHoraInicio(Platform.OS === "ios");
    if (selectedDate === undefined) {
      setHoraInicio(horaInicio);
    } else {
      const currentHoraInicio = selectedDate || day;
      setHoraInicio(currentHoraInicio);
    }
  };

  const onHoraFinalChange = (event, selectedDate) => {
    setShowHoraFinal(Platform.OS === "ios");
    if (selectedDate === undefined) {
      setHoraFinal(horaFinal);
    } else {
      const currentHoraFinal = selectedDate || day;
      setHoraFinal(currentHoraFinal);
    }
  };

  return {
    title: title,
    setTitle: setTitle,

    day: day,
    showDay: showDay,
    setDay: setDay,
    setShowDay: setShowDay,
    onDayChange: onDayChange,

    prioridade: prioridade,
    setPrioridade: setPrioridade,

    horaInicio: horaInicio,
    showHoraInicio: showHoraInicio,
    setHoraInicio: setHoraInicio,
    setShowHoraInicio: setShowHoraInicio,
    onHoraInicioChange: onHoraInicioChange,

    horaFinal: horaFinal,
    showHoraFinal: showHoraFinal,
    setHoraFinal: setHoraFinal,
    setShowHoraFinal: setShowHoraFinal,
    onHoraFinalChange: onHoraFinalChange,
  };
};
