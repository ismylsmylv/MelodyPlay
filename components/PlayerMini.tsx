import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import albumart from "@/assets/images/albumArt.png";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "expo-router";
import { setMusic } from "@/redux/slice";
const datas = [
  {
    singer: "Thutmose",
    title: "MemoriesMemoriesMemoriesMemoriesMemoriesMemories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },

  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
];
const PlayerMini = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => {
        dispatch(setMusic(datas[0]));
        router.push("/player");
      }}
    >
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
    </TouchableOpacity>
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
