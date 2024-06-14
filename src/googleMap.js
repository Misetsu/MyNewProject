import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default class Map extends React.Component {
    render() {
        return (
            <View style={{ height: "100%", backgroundColor: "#DDDDDD", flexDirection: "column"}}>
                <MapView style={{...StyleSheet.absoluteFillObject}}
                provider="google"
                ref={(ref) => {this.mapRef = ref}}
                initialRegion={{
                    latitude: 34.694,
                    longitude: 135.193,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}>
                    {/* マップ上ピン打ち latitude, longitudeに座標*/}
                    <Marker
                        coordinate={{latitude: 34.694, longitude: 135.193}}
                        title="this is a marker"
                        description="this is a marker example"
                    />
                    
                </MapView>
            </View>
        )
    }
}


