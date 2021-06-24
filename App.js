import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatScreen from "./src/components/ChatScreen";
import WaitingCall from "./src/components/WaitingCall";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <WaitingCall /> */}
      <ChatScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
