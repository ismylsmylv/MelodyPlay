import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment } from "@/redux/slice";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
export default function Player() {
  const router = useRouter();
  const song = useAppSelector((state) => state.player.music);
  const dispatch = useAppDispatch();
  const [liked, setliked] = useState(false);
  const [pause, setpause] = useState(false);
  return (
    <ImageBackground
      source={{ uri: song.icon }}
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
        padding: 30,
      }}
      blurRadius={10}
    >
      <View style={styles.navs}>
        <TouchableOpacity
          onPress={() => {
            router.push("(tabs)");
          }}
        >
          <Entypo name="chevron-thin-down" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white" }}>Ambiance sound</Text>
        <Entypo name="dots-three-vertical" size={24} color="white" />
      </View>
      <View>
        <Image
          source={{ uri: song.icon }}
          height={300}
          width={300}
          borderRadius={10}
          style={{ marginBottom: 20 }}
        />
        <View style={styles.content}>
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {song.title}
            </Text>
            <Text style={styles.singer} numberOfLines={1}>
              {song.singer}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setliked(!liked);
            }}
          >
            <AntDesign
              name={liked ? "heart" : "hearto"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.duration}>
          <View style={styles.line}></View>
          <View style={styles.times}>
            <Text style={styles.time}>1:15</Text>
            <Text style={styles.time}>{song.duration}</Text>
          </View>
        </View>
      </View>
      <View style={styles.controls}>
        <Ionicons name="repeat" size={24} color="white" />
        <MaterialIcons name="skip-previous" size={24} color="white" />
        <TouchableOpacity
          style={styles.pause}
          onPress={() => {
            setpause(!pause);
          }}
        >
          <Ionicons name={pause ? "pause" : "play"} size={40} color="black" />
        </TouchableOpacity>
        <MaterialIcons name="skip-next" size={24} color="white" />
        <MaterialCommunityIcons name="playlist-music" size={25} color="white" />
      </View>
      <View></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  navs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 5,
    color: "white",
    maxWidth: windowWidth - 100,
  },
  singer: {
    color: "white",
  },
  duration: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
  times: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  time: {
    color: "white",
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor: "gray",
    marginBottom: 5,
  },
  controls: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  pause: {
    height: 70,
    width: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 100,
  },
});
