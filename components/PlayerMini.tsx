import React, { useEffect, useState } from "react";
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
import { Audio } from "expo-av";
import * as MediaLibrary from "expo-media-library";

const PlayerMini = () => {
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
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => {
        // dispatch(setMusic(datas[0]));
        // router.push("/player");
        // playing !== index
        //   ? () => {
        playMusic(musicFiles[0].uri);
        // alert(JSON.stringify(musicFiles[0].uri));
        // setPlaying(index);
        //   }
        // : () => {
        //     pauseMusic();
        //     setPlaying(-1);
        //   };
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
