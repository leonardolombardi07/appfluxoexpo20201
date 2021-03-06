import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import LoadingIndicator from '../../../../components/LoadingIndicator';
import ShowError from '../../../../components/ShowError';
import { screenWidth, screenHeight } from '../../../../constants/dimensions';
import { connect } from 'react-redux';
import { abrirPlantao, fecharPlantao, checkPlantaoStatus } from '../../../../redux/actions/plantaoActions';
import useCamera from '../../../../hooks/useCamera';

const QRCodeScreen = (props) => {
    const hasCameraPermission = useCamera();
    const [scanned, setScanned] = useState(false);
    
    const onQRCodeScan = ({ type, data }) => {
        setScanned(true)
        switch (props.statusPlantao) {
            case 'Fechado':
                props.abrirPlantao(data);
                break;
            case 'Aberto':
                props.fecharPlantao(data);
                break;
            default:
                alert("Nao é possivel marcar plantoes agora");
                // props.navigation.navigate('Utilidades')
                break;
        };
    
    };

    if (hasCameraPermission === null) {
        return <LoadingIndicator />
    };

    if (hasCameraPermission === false) {
        return <ShowError />
    };

    return (
        <View style={{flex:1}}>
        <View  style={styles.qrCodeContainer}>
            {/* <StatusBar hidden /> */}
            <BarCodeScanner
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                onBarCodeScanned={scanned ? undefined : onQRCodeScan}
                style={[styles.qrCodeBarCode, StyleSheet.absoluteFillObject]}>
                <View style={styles.qrCodeFocus}></View>
            </BarCodeScanner>        
        </View>
        {/* <View style={{
            height: screenHeight * 0.5, 
            justifyContent: 'space-around',
            backgroundColor: 'red',
            alignItems:'center'
            }}>
            <Button title="Abrir Plantao" onPress={() => props.abrirPlantao()} />
            <Button title="Fechar Plantao" onPress={() => props.fecharPlantao()}/>
        </View> */}
        </View>

    );
};

const styles = StyleSheet.create({
    qrCodeContainer: {
        flex: 1,
        // height: screenHeight * 0.5,  
    },
    qrCodeBarCode: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    qrCodeFocus: {
        height: screenWidth * 0.6,
        width: screenWidth * 0.6,
        backgroundColor: 'transparent',
        borderColor: 'orange',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 5
    }
});

const mapStateToProps = (state) => {
    return { statusPlantao: state.plantaoData.statusPlantao };
};

export default connect(
    mapStateToProps,
    { abrirPlantao, fecharPlantao, checkPlantaoStatus }
)(QRCodeScreen);
