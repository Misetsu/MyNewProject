import React, {useState, useEffect, Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0, // 追加: 緯度の状態を保持する
      longitude: 0, // 追加: 経度の状態を保持する
      error: null, // 追加: エラーの状態を保持する
    };
    if (Geolocation) {
        Geolocation.getCurrentPosition(this.successCallback, this.errorCallback);
      } else {
        console.error('Geolocation is not supported by this browser/device.');
      }
  }

  successCallback = position => {
    const latitudes = position.coords.latitude;
    const longitudes = position.coords.longitude;
    this.setState({
      latitude: latitudes,
      longitude: longitudes,
      data: `緯度: ${latitudes}, 経度: ${longitudes}`,
    });
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View
          style={{
            height: '5%',
          }}>
          <Text>
            {this.state.latitude}/{this.state.longitude}
          </Text>
        </View>
        <View
          style={{
            height: '95%',
          }}>
          <MapView
            style={{...StyleSheet.absoluteFillObject}}
            provider="google"
            ref={ref => {
              this.mapRef = ref;
            }}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            {/* マップ上ピン打ち latitude, longitudeに座標*/}
            <Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              }}
              title="this is a marker"
              description="this is a marker example"
            />
          </MapView>
        </View>
      </View>
    );
  }
}