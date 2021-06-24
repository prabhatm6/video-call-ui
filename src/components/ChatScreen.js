import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import SafeArea from "./SafeArea";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const BottomHeight = height * 0.2;
const TopHeight = height * 0.8;
const WaitingCall = () => {
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);
  const _renderMessageItem = (item, index) => {
    console.log(index);
    return (
      <View style={styles.ChatOuter}>
        {index % 2 !== 0 ? (
          <View
            style={[
              styles.ChatContaineOuter,
              {
                justifyContent: "flex-start",
              },
            ]}
          >
            <TouchableOpacity style={styles.ChatUserContainer}>
              <Text style={styles.ChatUserTitleText}>AB</Text>
            </TouchableOpacity>
            <View style={{ marginLeft: 10, maxWidth: "80%" }}>
              <View
                style={[
                  styles.ChatMessageContainerInner,
                  { backgroundColor: "#fff" },
                ]}
              >
                <Text
                  style={[
                    styles.ChatUserMessageText,
                    {
                      textAlign: "left",
                    },
                  ]}
                >
                  sdfdsf
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View
            style={[
              styles.ChatContaineOuter,
              {
                justifyContent: "flex-end",
              },
            ]}
          >
            <View style={{ marginRight: 10, maxWidth: "80%" }}>
              <View
                style={[
                  styles.ChatMessageContainerInner,
                  { backgroundColor: "#B7EB14" },
                ]}
              >
                <Text
                  style={[
                    styles.ChatUserMessageText,
                    {
                      textAlign: "right",
                    },
                  ]}
                >
                  sdfsdfsadf dsfsd dsfdsaf dsaf sadfdsa fdsafdsa f dsfas fdsa
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.ChatUserContainer}
              onPress={() => {
                // this.props.SetEmployeeDetails(item.item);
                // this.props.navigation.navigate('EmployeeDetailsScreen');
              }}
            >
              <Text style={styles.ChatUserTitleText}>AB</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };
  return (
    <SafeArea>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: "#8F9BB3",
          justifyContent: "space-between",
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 30}
      >
        <View style={styles.headerOuter}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#A6A6A6" />
          <Text style={styles.headerTitleText}>Back to Video</Text>
        </View>
        <FlatList
          inverted
          data={[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 1, 23, 4, 5, 1, 5, 1, 14, 1, 21,
            2132,
          ]}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => _renderMessageItem(item, index)}
          style={{ flex: 1 }}
        />

        <View style={styles.MessageSendOuter}>
          <TextInput
            style={styles.MessageInput}
            placeholder="Type a message..."
            value={message}
            onChangeText={(val) => {
              setmessage(val);
            }}
            placeholderTextColor={"#8C8C8C"}
          />
          <TouchableOpacity style={styles.MessageSendbutton} onPress={() => {}}>
            <MaterialCommunityIcons
              name="chat-alert-outline"
              size={21}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeArea>
  );
};

export default WaitingCall;

const styles = StyleSheet.create({
  container: {
    height,
    width,
  },
  headerOuter: {
    flexDirection: "row",
    paddingLeft: 15,
    height: 50,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerTitleText: {
    fontSize: 18,
    color: "#A6A6A6",
    marginLeft: 5,
    fontFamily: "ui_bold",
  },
  ChatOuter: {
    width: "95%",
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    // justifyContent: index % 2 !== 0 ? "flex-start" : "flex-end",
    alignSelf: "center",
  },
  ChatContaineOuter: { flexDirection: "row", alignItems: "center" },
  ChatUserContainer: {
    flexDirection: "row",
    backgroundColor: "#5D7EC9",
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
    borderRadius: 50,
  },
  ChatUserTitleText: { color: "#fff", fontWeight: "700" },
  ChatUserMessageText: {
    fontSize: 12,
    color: "#2D2D2D",
    flexWrap: "wrap",
  },
  ChatMessageContainer: { marginRight: 10 },
  ChatMessageContainerInner: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  MessageInput: {
    backgroundColor: "#F8F8F8",
    width: "80%",
    height: 41.5,
    borderLeftWidth: 1,
    borderLeftColor: "#E2E2E2",
    borderTopWidth: 1,
    borderTopColor: "#E2E2E2",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingLeft: 10,
    fontFamily: "ui_normal",
  },
  MessageSendbutton: {
    backgroundColor: "#9ACB00",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  MessageSendOuter: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#fff",
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
    borderColor: "#fff",
  },
  callInfoThumbnail: {
    width: 60,
    height: 60,
  },
  callInfoNote: {
    fontSize: 27,
    color: "#fff",
    textTransform: "capitalize",
    fontFamily: "ui_bold",
  },
  callInfoName: {
    fontSize: 27,
    color: "#fff",
    fontFamily: "ui_bold",
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
