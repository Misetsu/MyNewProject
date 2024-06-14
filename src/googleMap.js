import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class Map extends React.Component {
    render() {
        return (
            <View style={{ height: "100%", backgroundColor: "#DDDDDD", flexDirection: "column"}}>
                <MapView style={{...StyleSheet.absoluteFillObject}}
                provider="google"
                ref={(ref) => {this.mapRef = ref}}
                initialRegion={{
                    latitude: 6.8523,
                    longitude: 79.8895,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}>
                </MapView>
            </View>
        )
    }
}