import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Card, CardItem, Text } from "native-base";
import convertSecondsToShowTime from "../constants/functions/convertSecondsToShowTime";

export default function TempoSemVender(props) {
  const [tempoSemVender, setTempoSemVender] = useState(props.tempoSemVender);

  useEffect(() => {
    const interval = setInterval(() => {
      setTempoSemVender((tempoSemVender) => parseFloat(tempoSemVender) + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.cardContainerStyle}>
      <Card style={styles.cardStyle}>
        <CardItem style={styles.cardItemStyle}>
          <Text style={styles.cardItemTextStyle}>
            Tempo sem vender: {convertSecondsToShowTime(tempoSemVender)}
          </Text>
        </CardItem>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainerStyle: {
    width: "90%",
  },
  cardStyle: {
    borderRadius: 50,
    flex: 0,
    flexDirection: "row",
    minHeight: 60,
  },
  cardItemStyle: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 25,
    borderWidth: 1,
    paddingBottom: 2,
    paddingTop: 2,
  },
  cardItemTextStyle: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
});
