import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function CELScreen(props) {
  return (
    <View style={styles.container}>
      <Text>CELScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

