import React, { components } from "react"
import { AppRegistry, StyleSheet, Text, View, TextInput } from "react-native"

import video from "react-native-video"
import LightVideo from "assets/videos/MATRIX BLEND LOVO REVEAL 01.mp4"

export default class rnvideo extends component {
  render() {
    return (
      <view style={styles.container}>
        <video
          repeat
          source={LightVideo}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
        />
        <view>
          <text style={styles.header}>Test</text>
        </view>
      </view>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "create",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    backgroundColor: "white",
    color: "white",
  },
})
