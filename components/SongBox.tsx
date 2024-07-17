import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const SongBox = ({ navigation }) => {
  const router = useRouter();
  // Destructure navigation from props
  const song = {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  };

  return (
    <TouchableOpacity onPress={() => router.push("/player")}>
      <View style={styles.box}>
        <View style={styles.content}>
          <Image
            source={{ uri: song.icon }}
            style={{ width: 60, height: 60, borderRadius: 5 }} // Adjusted style syntax
          />
          <View style={{ marginLeft: 10 }}>
            {/* Adjusted margin style */}
            <Text style={styles.title} numberOfLines={1}>
              {song.title}
            </Text>
            <Text>{song.singer}</Text>
          </View>
        </View>
        <Text>{song.duration}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    maxWidth: windowWidth - 150,
  },
});

export default SongBox;
