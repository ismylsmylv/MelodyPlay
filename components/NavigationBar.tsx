import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
export default function NavigationBar() {
  return (
    <View style={styles.navigation}>
      <View>
        <Entypo name="menu" size={24} color="#333333" />
      </View>
      <View style={styles.right}>
        <FontAwesome name="search" size={20} color="#333333" />
        <MaterialCommunityIcons
          name="playlist-music"
          size={25}
          color="#333333"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  right: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
