import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SongBox from "./SongBox";
const datas = [
  {
    singer: "Thutmose",
    title: "MemoriesMemoriesMemoriesMemoriesMemoriesMemories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },

  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
  {
    singer: "Thutmose",
    title: "Memories",
    icon: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
    duration: "3:19",
  },
];
const SongList = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.heading}>Music</Text>
      <FlatList
        // style={styles.list}
        data={datas}
        renderItem={({ item }) => <SongBox song={item} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: { id: string }) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
};

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
