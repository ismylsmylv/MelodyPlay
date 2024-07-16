import {
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

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" translucent={false} />
        <NavigationBar />
        <ScrollView>
          <View style={styles.home}>
            <PlayerMini />
            <GenreContainer />
            <Recommended />
            <Recommended />
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
