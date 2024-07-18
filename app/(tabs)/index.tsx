import GenreContainer from "@/components/GenreContainer";
import NavigationBar from "@/components/NavigationBar";
import PlayerMini from "@/components/PlayerMini";
import Recommended from "@/components/Recommended";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchMusicFiles } from "@/redux/slice";
import { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const musicFiles = useAppSelector((state) => state.player.musicFiles);
  useEffect(() => {
    dispatch(fetchMusicFiles());
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
