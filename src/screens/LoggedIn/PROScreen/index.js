import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, RefreshControl  } from 'react-native';
import useApiData from '../../../hooks/useApiData';
import FraseMotivadora from '../../../components/FraseMotivadora';
import TabelaProjetos from '../../../components/TabelaProjetos';
import TabelaNPS from '../../../components/TabelaNPS';
import TempoSemVender from '../../../components/TempoSemVender';
import LoadingIndicator from '../../../components/LoadingIndicator';
import ShowError from '../../../components/ShowError';
import Spacer from '../../../components/Spacer';

export default function PROScreen(props) {
  const [results, errorMessage] = useApiData('PRO');

  if (!results && !errorMessage) {
    return <LoadingIndicator />
  };

  if (errorMessage) {
    return <ShowError errorMessage={errorMessage} />
  }
  
  return (
    <View style={styles.container}>
       <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollViewContainer}
       >
        <Spacer height={0.05} />
        <FraseMotivadora frase={results.frase}/>
        <Spacer height={0.05} />
        <TabelaProjetos
            no_prazo={results.no_prazo}
            atrasados={results.atrasados}
            critico={results.critico}
            total_projetos={results.total_projetos}
        />
        
        <Spacer height={0.05} />
        <TabelaNPS />
        <Spacer height={0.05} />
        <TempoSemVender tempoSemVender={results.tempo_sem_vender}/>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D6D6',
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    // justifyContent:'center'
  }
});

