/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class ActionBtn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onPress, Icon, text, backgroundColor } = this.props;
    return (
      <View style={styles.bottomBtnBox}>
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.bottomBtn,
            {
              backgroundColor: backgroundColor,
              elevation: 5,
            },
          ]}
        >
          {Icon}
        </TouchableOpacity>
        {text && <Text style={styles.btnText}>{text}</Text>}
      </View>
    );
  }
}

export default ActionBtn;

const styles = StyleSheet.create({
  bottomBtnBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  bottomBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#fff",
  },
  btnText: {
    marginTop: 6,
    fontSize: 15,
    color: "#000",
    fontWeight: "700",
  },
});
