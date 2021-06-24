import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WaitingCall from "./src/components/WaitingCall";

export default function App() {
  return (
    <View>
      <WaitingCall />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
