import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

const { width, height } = Dimensions.get("screen");
const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#83e85a" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});
