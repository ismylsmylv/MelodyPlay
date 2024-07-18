import { useAppDispatch } from "@/redux/hooks";
import { setMusic } from "@/redux/slice";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import NoIcon from "@/assets/images/no-icon.png";
const windowWidth = Dimensions.get("window").width;
function Duration(duration: string) {
  const minutes = Math.floor(Number(duration) / 60);
  let seconds = (Number(duration) - minutes * 60).toFixed(0);
  if (seconds.length == 1) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}
const SongBox = ({ song }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setMusic(song));
        // router.push("/player");
        alert(JSON.stringify(song));
      }}
    >
      <View style={styles.box}>
        <View style={styles.content}>
          <Image
            source={song.icon ? { uri: song.icon } : NoIcon}
            style={{ width: 60, height: 60, borderRadius: 5 }} // Adjusted style syntax
          />
          <View style={{ marginLeft: 10 }}>
            {/* Adjusted margin style */}
            <Text style={styles.title} numberOfLines={1}>
              {song?.filename}
            </Text>
            <Text style={{ opacity: 0.7 }}>
              {song.artist ? song.artist : "Unknown artist"}
            </Text>
          </View>
        </View>
        <Text>{Duration(song?.duration)}</Text>
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
