import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import GenreContainer from "@/components/GenreContainer";
import NavigationBar from "@/components/NavigationBar";
import PlayerMini from "@/components/PlayerMini";
import Recommended from "@/components/Recommended";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import * as MediaLibrary from "expo-media-library";
export default function HomeScreen() {
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
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" translucent={false} />
        <NavigationBar />
        <ScrollView>
          <View style={styles.home}>
            <PlayerMini />
            <GenreContainer />
            <Recommended heading={"Recommended"} musicFiles={musicFiles} />
            <Recommended heading={"Recently played"} musicFiles={musicFiles} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  home: {
    marginTop: 50,
    paddingTop: StatusBar.currentHeight,
    overflow: "hidden",
  },
});
