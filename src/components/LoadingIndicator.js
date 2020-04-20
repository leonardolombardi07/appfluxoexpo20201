import React from "react";
import { View, ActivityIndicator } from 'react-native';

export default function LoadingIndicator() {
    return (
        <View style={{ flex: 1, alignItems:'center', justifyContent: 'center', backgroundColor:'lightgrey'}}>
            <ActivityIndicator size="large" />
        </View>
    );
}