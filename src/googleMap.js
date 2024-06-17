import React, {useState, useEffect, Component} from 'react';
import {View, StyleSheet, Button, Text, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('window');

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      currentPosition: {
        latitude: 0, // 追加: 緯度の状態を保持する
        longitude: 0, // 追加: 経度の状態を保持する
      },
    };
  }

  watchId = null

  componentDidMount() {
    Geolocation.getCurrentPosition((position) => {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({initialPosition: initialRegion})
      this.setState({currentPosition: initialRegion})
    }, (error) => alert(JSON.stringify(error)), 
    {enableHighAccuracy: true, timeout: 10000},)

    this.watchId = Geolocation.watchPosition((position) => {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      var lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({initialPosition: lastRegion})
      this.setState({currentPosition: lastRegion})
    })
  }

  componentWillUnmount() {
    Geolocation.clearWatch(this.watchId)
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     latitude: 0, // 追加: 緯度の状態を保持する
  //     longitude: 0, // 追加: 経度の状態を保持する
  //     error: null, // 追加: エラーの状態を保持する
  //   };
  // }

  // handlePress = () => {
  //   if (Geolocation) {
  //     Geolocation.getCurrentPosition(this.successCallback, this.errorCallback);
  //   } else {
  //     console.error('Geolocation is not supported by this browser/device.');
  //   }
  // };

  // successCallback = position => {
  //   const latitude = position.coords.latitude;
  //   const longitude = position.coords.longitude;
  //   this.setState({
  //     latitude: latitude,
  //     longitude: longitude,
  //     data: `緯度: ${latitude}, 経度: ${longitude}`,
  //   });
  // };

  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View
          style={{
            height: '10%',
          }}>
          <Button title="現在地取得" color="blue" onPress={this.handlePress} />
          <Text>
            {this.state.latitude}/{this.state.longitude}
          </Text>
        </View>
        <View
          style={{
            height: '90%',
          }}>
          <MapView
            style={{...StyleSheet.absoluteFillObject}}
            provider="google"
            ref={ref => {
              this.mapRef = ref;
            }}
            Region={this.state.initialPosition}>
            {/* マップ上ピン打ち latitude, longitudeに座標*/}
            <Marker coordinate={this.state.currentPosition}>
              <View style={styles.radius}>
                <View style={styles.marker}/>
              </View>
            </Marker>
          </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  radius: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 112, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    width: 20,
    height: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  }
})
