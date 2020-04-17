import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CCEScreen(props) {

  return (
    <View style={styles.container}>
      <Text>CCEScreen</Text>
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

