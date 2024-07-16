import Recommended from "@/components/Recommended";
import SongList from "@/components/SongList";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Recommended heading={"Recently played"} />
        <SongList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
