import React from 'react';
import { View, Modal, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { closePrioridadesModal } from '../redux/actions/reunioesActions';
import { screenHeight, screenWidth } from '../constants/dimensions';
import { AntDesign } from '@expo/vector-icons';
import { 
    PRIORIDADE_1_COLOR, 
    PRIORIDADE_2_COLOR, 
    PRIORIDADE_3_COLOR, 
    PRIORIDADE_4_COLOR, 
    PRIORIDADE_OUTRO_COLOR
} from '../constants/colors/prioridadeColors';
import Circle from '../components/Circle';


const PrioridadesModal = (props) => {
    return (
    <View style={styles.centeredView}>
      <Modal
        onRequestClose={() => alert("hi")}
        animationType="slide"
        transparent={true}
        visible={props.isPrioridadesModalOpen}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View style={styles.headerStyle}>
                  <TouchableHighlight
                    activeOpacity={1}
                    style={styles.closeButton}
                    onPress={() => props.closePrioridadesModal()}
                    >
                    <AntDesign name="close" size={screenWidth*0.06} color="black" />
                  </TouchableHighlight>
                  <Text style={styles.modalTitle}>Ordem de precedência{'\n'}                 do mezanino</Text>
                  {/* <View style={styles.prioridadesCircle}>
                      <AntDesign name="question" size={screenWidth*0.1} color="black" />
                    </View> */}
              </View>
              <View style={styles.cardStyle}>
                  <Circle color={PRIORIDADE_1_COLOR} />
                  <Text style={styles.explicacaoStyle}>1- Reunião com clientes de projeto/estagiários/professores/parceiros</Text>
              </View>
              <View style={styles.cardStyle}>
                <Circle color={PRIORIDADE_2_COLOR} />
                  <Text style={styles.explicacaoStyle}>2- Reunião de Diretoria/Coordenação</Text>
              </View>
              <View style={styles.cardStyle}>
                <Circle color={PRIORIDADE_3_COLOR} />
                  <Text style={styles.explicacaoStyle}>3- Entrevista do PAME</Text>
              </View>
              <View style={styles.cardStyle}>
                <Circle color={PRIORIDADE_4_COLOR} />
                  <Text style={styles.explicacaoStyle}>4- Benchmarking</Text>
              </View>
              <View style={styles.cardStyle}>
                    <Circle color={PRIORIDADE_OUTRO_COLOR} />
                  <Text style={styles.explicacaoStyle}>5- Outro</Text>
              </View>
          </View>
        </View>
      </Modal>
    </View>
    );
};

const mapStateToProps = (state) => {
    return { isPrioridadesModalOpen: state.reunioesData.isPrioridadesModalOpen }
}


const styles = StyleSheet.create({
    centeredView: {
      justifyContent: "center",
      alignItems: "center",

    },
    modalView: {
        position: 'absolute',
        top: screenHeight * 0.3,
        width: screenWidth * 0.9,
        height: screenHeight * 0.5,
        backgroundColor: "white",
        borderRadius: screenWidth * 0.05,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10
    },
    headerStyle: {
        flexDirection: 'row',
        height: '20%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        width: '100%',
        paddingHorizontal: screenWidth * 0.05,
        borderTopRightRadius: screenWidth * 0.05,
        borderTopLeftRadius: screenWidth * 0.05
    },
    modalTitle: {
        fontSize: screenHeight * 0.035,
        fontWeight: 'bold',
        paddingVertical: screenHeight *0.02,
        lineHeight: screenHeight * 0.032
    },
    prioridadesCircle: {
        backgroundColor: '#D6D6D6',
        width: screenHeight * 0.07,
        height: screenHeight * 0.07,
        borderRadius: screenHeight * 0.07 / 2,
        marginRight: screenWidth * 0.02,
        alignItems: 'center',
        justifyContent:'center'
    },
    cardStyle: {
        height: '12%',
        width: '95%',
        flexDirection: 'row',
        // backgroundColor: 'lightgreen',
        borderColor: 'lightgrey',
        borderTopWidth: 0.4,
        borderBottomWidth: 0.4,
        marginVertical: screenHeight * 0.01,
        alignItems: 'center',
        paddingHorizontal: screenWidth * 0.01,
    },
    iconStyle: {
        marginHorizontal: screenWidth * 0.03
    },
    explicacaoStyle: {
        fontSize: screenHeight * 0.02
    },
    closeButton: {
        position:'absolute',
        top: screenWidth * 0.01,
        right: screenWidth * 0.01,
        elevation: 2
    },
  });

export default connect(
    mapStateToProps,
    { closePrioridadesModal }
)(PrioridadesModal);