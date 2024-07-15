import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const GenreBox = ({ text, icon }) => {
  return (
    <View style={styles.box}>
      <Ionicons name={icon} size={24} color="black" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderCurve: "circular",
    borderColor: "#c3c3c3",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    marginLeft: 10,
  },
});

export default GenreBox;
