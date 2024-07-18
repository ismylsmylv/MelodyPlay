import albumart from "@/assets/images/albumArt.png";
import { useAppDispatch } from "@/redux/hooks";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import * as MediaLibrary from "expo-media-library";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import musicMetadata from "react-native-music-metadata";

const PlayerMini = () => {
  const [musicFiles, setMusicFiles] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [progressDuration, setProgressDuration] = useState(0);

  const fetchMusicFiles = async () => {
    const permission = await MediaLibrary.requestPermissionsAsync();
    const media = await MediaLibrary.getAssetsAsync({
      mediaType: MediaLibrary.MediaType.audio,
    });

    const filesWithMetadata = await Promise.all(
      media.assets.map(async (file) => {
        const metadata = await musicMetadata.fetchFromUri(file.uri);
        return {
          ...file,
          albumArt: metadata.common.picture
            ? `data:image/jpeg;base64,${metadata.common.picture[0].data}`
            : null,
        };
      })
    );

    setMusicFiles(filesWithMetadata);
  };

  const playMusic = async (fileUri) => {
    const { sound } = await Audio.Sound.createAsync({ uri: fileUri });
    setSound(sound);
    await sound.playAsync();
    setPlaying(true);
  };

  const pauseMusic = async () => {
    await sound.pauseAsync();
    setPlaying(false);
  };

  useEffect(() => {
    if (!sound) return;

    sound.setOnPlaybackStatusUpdate(async (status) => {
      if (status.didJustFinish) {
        setPlaying(false);
        await sound.unloadAsync();
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
    <View style={styles.main}>
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
          <TouchableOpacity
            onPress={() => {
              // dispatch(setMusic(datas[0]));
              // router.push("/player");
              // playing !== index
              //   ? () => {
              setPlaying(!playing);
              playing ? pauseMusic() : playMusic(musicFiles[0].uri);
              // alert(JSON.stringify(musicFiles[0].uri));
              // setPlaying(index);
              //   }
              // : () => {
              //     pauseMusic();
              //     setPlaying(-1);
              //   };
            }}
          >
            <AntDesign
              name={!playing ? "pause" : "play"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <View style={styles.tracker}></View>
          <MaterialIcons name="skip-next" size={24} color="white" />
        </View>
      </ImageBackground>
    </View>
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
