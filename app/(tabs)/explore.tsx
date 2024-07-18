import Recommended from "@/components/Recommended";
import SongList from "@/components/SongList";
import * as MediaLibrary from "expo-media-library";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function TabTwoScreen() {
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
  useEffect(() => {
    fetchMusicFiles();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" translucent={false} />
        <ScrollView>
          <Recommended heading={"Recently played"} musicFiles={musicFiles} />
          <SongList />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
