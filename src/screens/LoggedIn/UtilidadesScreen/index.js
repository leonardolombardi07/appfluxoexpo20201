import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, Alert, RefreshControl, Text } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { checkPlantaoStatus, abrirPlantao } from '../../../redux/actions/plantaoActions';
//Components
import LargeCard from '../../../components/LargeCard';
import SmallCard from '../../../components/SmallCard';
//Assets and Styles
import { screenWidth } from '../../../constants/dimensions';
import { Ionicons, AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../constants/colors';

const UtilidadesScreen = (props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    props.checkPlantaoStatus();
  },[])

  const handleRefresh = async () => {
      setIsRefreshing(true);
      try {
        await props.checkPlantaoStatus();
      } catch (error) {
        alert(error.message)
      } finally {
        setIsRefreshing(false)
      }
  };

  const handlePlantao = () => {
    props.navigation.navigate('QRCodeScreen');
  }

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh} />
        }
        >
      <LargeCard 
        cardTitle="Plantao" 
        cardSubTitle="e Plantonistas"
        icon={<Ionicons name='md-person' size={screenWidth * 0.16 } color={SECONDARY_COLOR} />}
        withStatus={true}
        status={props.plantaoData.statusPlantao}
        firstButtonTitle="CHECAR HISTÓRICO"
        secondButtonTitle={
          props.plantaoData.statusPlantao === 'Fechado' ? 
          "ABRIR PLANTÃO" : "FECHAR PLANTÃO"
        }
        firstButtonOnPress={() => console.log("1")}
        secondButtonOnPress={handlePlantao}
      />

      <LargeCard 
        cardTitle="Agenda" 
        cardSubTitle="do mezanino"
        icon={<AntDesign name='calendar' size={screenWidth * 0.16 } color={SECONDARY_COLOR} />}
        firstButtonTitle="VISUALIZAR AGENDA"
        secondButtonTitle="AGENDAR REUNIÃO"
        firstButtonOnPress={() => props.navigation.navigate('Agenda')}
        secondButtonOnPress={() => props.navigation.navigate('MarcarReuniaoScreen')}
      />
      
      <View style={styles.smallCardsContainer}>
        <SmallCard 
          cardTitle="Fórum"
          icon={<MaterialIcons name='forum' size={screenWidth * 0.13 } color={SECONDARY_COLOR} />}
          firstButtonTitle="ABRIR FÓRUM"
          firstButtonOnPress={
            () => Alert.alert(
            'BAIT', 
            'Desculpa, não existe Fórum nenhum...',
            [
              {text: 'QUE PALHAÇADA HEIN', style: 'default'},
  
            ]
          )}
        />
        <SmallCard 
          cardTitle="Régua"
          icon={<Entypo name='ruler' size={screenWidth * 0.13 } color={SECONDARY_COLOR} />}
          firstButtonTitle="BAIXAR PDF"
          firstButtonOnPress={
            () => Alert.alert(
              'BAIT', 
              'Desculpa, não existe PDF nenhum...',
              [
                {text: 'QUE PALHAÇADA HEIN', style: 'default'},
    
              ]
            )}
        />
      </View>
    
      <LargeCard 
          cardTitle="Outra" 
          cardSubTitle="coisa qualquer"
          icon={<AntDesign name='question' size={screenWidth * 0.16 } color={SECONDARY_COLOR} />}
          firstButtonTitle="SEI LA"
          secondButtonTitle="SEM BAIT, RELAXA"
          firstButtonOnPress={() => console.log("1")}
          secondButtonOnPress={() => alert("MENTIRA, TEM BAIT SIM")}
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
  },
  smallCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

const mapStateToProps = (state) => {
  return { plantaoData: state.plantaoData };
};

export default connect(
  mapStateToProps,
  { checkPlantaoStatus, abrirPlantao }
)(UtilidadesScreen);

