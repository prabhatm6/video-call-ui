import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";

const isAndroid = Platform.OS === "android";

const SafeArea = ({ children }) => {
  return (
    <SafeAreaView style={{ marginTop: isAndroid && StatusBar.currentHeight }}>
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;

const styles = StyleSheet.create({});
