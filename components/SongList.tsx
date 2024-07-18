import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchMusicFiles } from "@/redux/slice";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SongBox from "./SongBox";
const SongList = () => {
  const dispatch = useAppDispatch();
  const musicFiles = useAppSelector((state) => state.player.musicFiles);
  useEffect(() => {
    dispatch(fetchMusicFiles());
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
    paddingHorizontal: 20,
  },
});

export default SongList;
