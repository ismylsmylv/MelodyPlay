import albumart from "@/assets/images/albumArt.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchMusicFiles } from "@/redux/slice";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const PlayerMini = () => {
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [progressDuration, setProgressDuration] = useState(0);

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
        setPlaying(false);
        await sound.unloadAsync();
        console.log("finished");
        setSound(null);
      } else {
        setProgressDuration(status.positionMillis / 1000);
      }
    });
  }, [sound]);
  const dispatch = useAppDispatch();
  const musicFiles = useAppSelector((state) => state.player.musicFiles);
  useEffect(() => {
    dispatch(fetchMusicFiles());
  }, []);
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
