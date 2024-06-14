import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import getRoute from './getRoute'; // 上で作成した関数をインポート

const App = () => {
  const [route, setRoute] = React.useState(null);

  React.useEffect(() => {
    const fetchRoute = async () => {
      const start = { latitude: 37.7749, longitude: -122.4194 }; // サンプルの開始地点
      const end = { latitude: 34.0522, longitude: -118.2437 }; // サンプルの終了地点
      const routeData = await getRoute(start, end);
      setRoute(routeData);
    };

    fetchRoute();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {route && (
          <Polyline
            coordinates={route.legs[0].shape.map(([lat, lon]) => ({
              latitude: lat,
              longitude: lon
            }))}
            strokeColor="#000"
            strokeWidth={3}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
