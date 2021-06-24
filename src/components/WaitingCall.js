import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import SafeArea from "./SafeArea";
import ActionBtn from "./ActionBtn";
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import Loader from "./Loader";
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("screen");
const BottomHeight = height * 0.2;
const TopHeight = height * 0.8;
const WaitingCall = () => {
  const [videoEnable, setVideoEnable] = useState(true);
  const [voiceEnable, setVoiceEnable] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <SafeArea>
      {loading ? (
        <Loader />
      ) : (
        <LinearGradient
          colors={["#A8ACB3", "#2B2B2C"]}
          style={styles.container}
        >
          {/* replace below information asa we have new tracks */}
          <View style={styles.callInfoContainer}>
            <View style={styles.callInfoThumbnailWrap}>
              <Image
                style={styles.callInfoThumbnail}
                source={require("../../assets/images/avatar.png")}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.callInfoNote}>waiting for</Text>
            <Text style={styles.callInfoName}>Dr Stranger</Text>
            <View>
              <LottieView
                source={require("../../assets/images/waiting.json")}
                autoPlay
                loop
                style={{ height: 70 }}
              />
            </View>
            {/* <Text style={styles.waitingIcon}>. . .</Text> */}
          </View>
          <View style={styles.localStreamContainer}>
            {/* show rtc view when we have video below */}
            <Image
              style={styles.localStreamThumbnail}
              resizeMode="contain"
              source={require("../../assets/images/user.png")}
            />
          </View>
          <View style={styles.actionBtnContainer}>
            <ActionBtn
              onPress={() => setVideoEnable(!videoEnable)}
              backgroundColor="#fff"
              Icon={
                <Feather
                  name={videoEnable ? "video" : "video-off"}
                  size={25}
                  color="#83e85a"
                />
              }
            />
            <ActionBtn
              onPress={() => setVoiceEnable(!voiceEnable)}
              backgroundColor="#fff"
              Icon={
                <Feather
                  name={voiceEnable ? "mic" : "mic-off"}
                  size={25}
                  color="#83e85a"
                />
              }
            />
            <ActionBtn
              backgroundColor="#83e85a"
              Icon={
                <Ionicons
                  name="chatbox-ellipses-outline"
                  size={25}
                  color="#fff"
                />
              }
            />
            <ActionBtn
              backgroundColor="#d72323"
              Icon={
                <MaterialIcons name="phone-disabled" size={25} color="#fff" />
              }
            />
          </View>
        </LinearGradient>
      )}
    </SafeArea>
  );
};

export default WaitingCall;

const styles = StyleSheet.create({
  container: {
    height,
    width,
  },
  callInfoContainer: {
    height: TopHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  callInfoThumbnailWrap: {
    borderRadius: 45,
    borderWidth: 2,
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderColor:"#fff"
  },
  callInfoThumbnail: {
    width: 60,
    height: 60,
  },
  callInfoNote: {
    fontSize: 27,
    color: "#fff",
    textTransform: "capitalize",
    fontFamily:"ui_bold"
  },
  callInfoName: {
    fontSize: 27,
    color: "#fff",
    fontFamily:"ui_bold",
    textTransform: "capitalize",
  },
  waitingIcon: {
    fontSize: 40,
  },
  localStreamContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 15,
    elevation: 10,
    backgroundColor: "#EDEDED",
  },
  localStreamThumbnail: {
    width: 105,
    height: 160,
  },
  actionBtnContainer: {
    width,
    height: BottomHeight,
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 48,
  },
});
