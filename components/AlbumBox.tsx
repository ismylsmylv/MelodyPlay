import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { Image } from "react-native";
import albumart from "@/assets/images/albumArt.png";
const AlbumBox = (album) => {
  //   const { uri } = Image.resolveAssetSource(require(album.icon));
  return (
    <View style={styles.album}>
      <ImageBackground
        source={albumart}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Into the spider-verse</Text>
      </ImageBackground>
      <View style={styles.footer}>
        <Text style={styles.name}>Into the spider-verse</Text>
        <Text style={styles.artist}>Into the spider-verse</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  album: {},
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
