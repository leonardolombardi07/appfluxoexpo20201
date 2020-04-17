import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useApiData from '../../../hooks/useApiData';
import LoadingIndicator from '../../../components/LoadingIndicator';
import ShowError from '../../../components/ShowError';

export default function HomeScreen(props) {
  const [results, errorMessage] = useApiData('GERAL');
  // console.log(props.navigation)
  console.log(props.route.name)

  // const changeNavigation = () => {
  //   props.navigation.setOptions({ title: 'Hi' })
  // }
  // useEffect(() => {
  //   changeNavigation();
  // }, [])

  if (!results && !errorMessage) {
    return <LoadingIndicator />
  };

  if (errorMessage) {
    return <ShowError errorMessage={errorMessage}/>
  }

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
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

