import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, RefreshControl  } from 'react-native';
import useApiData from '../../../hooks/useApiData';
import LoadingIndicator from '../../../components/LoadingIndicator';
import ShowError from '../../../components/ShowError';

export default function HomeScreen(props) {
  const [results, errorMessage, fetchData] = useApiData('HOME');

  if (!results && !errorMessage) {
    return <LoadingIndicator />
  };

  if (errorMessage) {
    return <ShowError errorMessage={errorMessage} handleRefresh={fetchData}/>
  }
  
  return (
    <View style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false} >
        <Text>HomeScreen</Text>
      </ScrollView>
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

