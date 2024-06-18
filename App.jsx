/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';


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
  
  

  
  render() {  //render()メソッドは、そのコンポーネントがどのように描画されるかを定義する。
    return (
      <View style={styles.container}>
        <Text style={styles.textEn}>NEWS</Text>
        <Text style={{ fontSize: 20 }}>{this.state.data}</Text>
        <Text>お試し追加ですよ！！</Text>
        <Button
                title="現在地取得"
                color="red"
            />
      </View>
    );
    //<View>はReact Nativeでのレイアウトコンポーネント
    //<View>はフレックスボックスのように機能し、justifyContentとalignItemsプロパティを使用して、子要素を配置する。
    //<Text>はテキストを表示するためのコンポーネント
  }
  
}

//Stylesheet
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEn:{
    fontSize: 30,
    fontWeight:'300',
    fontFamily: 'sans-serif-thin',
  },
  textJa:{

  }

});