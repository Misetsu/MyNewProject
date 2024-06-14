import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation, {GeolocationResponse} from 'react-native-geolocation-service';

const coords = () => {
    const [location, setLocation] = useState<GeolocationResponse['coords']>({
        latitude: 0,
        longitude: 0
    });

    useEffect(() => {
        Geolocation.getCurrentPosition(
        location => setLocation(location.coords),
        err => alert(err.message),
        {enableHighAccuracy: true, timeout: 10000},
        );
    }, []);

    return location;
}

export default class Map extends React.Component{
    render() {
    
    return (
        <View style={{ height: "100%", backgroundColor: "#DDDDDD", flexDirection: "column"}}>
            {coords && (
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
            )}
        </View>
    )
    }
};


