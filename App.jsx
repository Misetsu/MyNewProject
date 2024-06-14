/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class HelloWorldApp extends Component {  //コンポーネントは部品的な意味がある
  render() {  //render()メソッドは、そのコンポーネントがどのように描画されるかを定義する。
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Text>タンクトップマスター</Text>
      </View>
    );
    //<View>はReact Nativeでのレイアウトコンポーネント
    //<View>はフレックスボックスのように機能し、justifyContentとalignItemsプロパティを使用して、子要素を配置する。
    //<Text>はテキストを表示するためのコンポーネント
  }
}
