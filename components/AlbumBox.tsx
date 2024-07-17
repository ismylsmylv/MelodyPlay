import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Image } from "react-native";
import albumart from "@/assets/images/albumArt.png";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "expo-router";
import { setMusic } from "@/redux/slice";
const AlbumBox = ({ album }) => {
  //   const { uri } = Image.resolveAssetSource(require(album.icon));
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.album}
      onPress={() => {
        // alert(JSON.stringify(album));
        dispatch(setMusic(album));
        router.push("/player");
      }}
    >
      <ImageBackground
        source={albumart}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Into the spider-verse</Text>
      </ImageBackground>
      <View style={styles.footer}>
        <Text style={styles.name}>{album.filename}</Text>
        <Text style={styles.artist}>{album.artist}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  album: {
    marginRight: 5,
  },
  image: {
    height: 150,
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  footer: {
    marginTop: 10,
    maxWidth: 150,
    overflow: "hidden",
  },
  name: {
    fontWeight: "700",
  },
  artist: {
    color: "gray",
  },
});

export default AlbumBox;
