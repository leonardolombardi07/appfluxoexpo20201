import { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasCameraPermission(status === 'granted');
        })();
    },[]);

    return [hasCameraPermission];
};