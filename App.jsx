/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


export default class HelloWorldApp extends Component {  //コンポーネントは部品的な意味がある
  constructor(props) {
    super(props);
    this.state = {
      data: "タンクトップマスター",
      latitude: null,  // 追加: 緯度の状態を保持する
      longitude: null, // 追加: 経度の状態を保持する
      error: null      // 追加: エラーの状態を保持する
    };
  }

  handlePress = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.successCallback,
        this.errorCallback
      );
    } else {
      console.error("Geolocation is not supported by this browser/device.");
    }
  };

  successCallback = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    this.setState({ 
      latitude: latitude,
      longitude: longitude,
      data: `緯度: ${latitude}, 経度: ${longitude}`
    });
  };
  
  
  render() {  //render()メソッドは、そのコンポーネントがどのように描画されるかを定義する。
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Text style={{ fontSize: 20 }}>{this.state.data}</Text>
        <Text>お試し追加ですよ！！</Text>
        <Button
                title="現在地取得"
                color="red"
                onPress={this.handlePress}
            />
      </View>
    );
    //<View>はReact Nativeでのレイアウトコンポーネント
    //<View>はフレックスボックスのように機能し、justifyContentとalignItemsプロパティを使用して、子要素を配置する。
    //<Text>はテキストを表示するためのコンポーネント
  }
  
}
