import { Audio } from "expo-av";
import * as MediaLibrary from "expo-media-library";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SongBox from "./SongBox";
const SongList = () => {
  const [musicFiles, setMusicFiles] = useState([]);
  const [playing, setPlaying] = useState(-1);
  const [sound, setSound] = useState(null);
  const [progressDuration, setProgressDuration] = useState(0);
  const fetchMusicFiles = async () => {
    const permission = await MediaLibrary.requestPermissionsAsync();
    const media = await MediaLibrary.getAssetsAsync({
      mediaType: MediaLibrary.MediaType.audio,
    });
    setMusicFiles(media.assets);
  };
  const playMusic = async (fileUri) => {
    const { sound } = await Audio.Sound.createAsync({
      uri: fileUri,
    });
    setSound(sound);
    await sound.playAsync();
  };

  const pauseMusic = async () => {
    await sound.pauseAsync();
  };
  useEffect(() => {
    if (!sound) {
      return;
    }
    sound.setOnPlaybackStatusUpdate(async (status) => {
      if (status.didJustFinish) {
        setPlaying(-1);
        await sound.unloadAsync();
        console.log("finished");
        setSound(null);
      } else {
        setProgressDuration(status.positionMillis / 1000);
      }
    });
  }, [sound]);
  useEffect(() => {
    fetchMusicFiles();
  }, []);

  return (
    <View style={styles.box}>
      <Text style={styles.heading}>Music</Text>
      <FlatList
        // style={styles.list}
        data={musicFiles}
        renderItem={({ item }) => <SongBox song={item} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: { id: string }) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
};
{
  /*  */
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: "black",
    fontWeight: "500",
    textTransform: "capitalize",
    marginBottom: 20,
  },
  box: {
    padding: 20,
  },
});

export default SongList;
