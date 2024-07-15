import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import albumart from "@/assets/images/albumArt.png";
const PlayerMini = () => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={albumart}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.info}>
          <Text style={styles.songName}>Memories</Text>
          <Text style={styles.singer}>Thutmose</Text>
        </View>
        <View style={styles.controls}>
          <AntDesign name="hearto" size={19} color="white" />
          <MaterialIcons name="skip-previous" size={24} color="white" />
          <AntDesign name="pause" size={24} color="white" />
          <View style={styles.tracker}></View>
          <MaterialIcons name="skip-next" size={24} color="white" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginVertical: 20,
    shadowColor: "black",
    elevation: 20,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 20,
  },
  info: {
    padding: 20,
  },
  songName: {
    fontSize: 25,
    color: "white",
    fontWeight: "700",
  },
  singer: {
    fontWeight: "500",
    color: "white",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    height: 200,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  tracker: {
    width: "40%",
    backgroundColor: "white",
    height: 3,
  },
});

export default PlayerMini;
