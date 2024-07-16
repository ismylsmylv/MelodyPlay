import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const SongBox = ({ song }) => {
  return (
    <View style={styles.box}>
      <View style={styles.content}>
        <Image
          source={{ uri: song.icon }}
          height={60}
          width={60}
          borderRadius={5}
        />
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {song.title}
          </Text>
          <Text>{song.singer}</Text>
        </View>
      </View>
      <Text>{song.duration}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    maxWidth: windowWidth - 150,
  },
});

export default SongBox;
