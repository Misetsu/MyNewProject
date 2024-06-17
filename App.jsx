/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Map from './src/googleMap';


export default function App(){  //コンポーネントは部品的な意味がある
  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      <Map/>
    </View>
  )
}
