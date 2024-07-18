import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AlbumBox from "./AlbumBox";
type Props = {
  heading: string;
  musicFiles: [];
};
const Recommended = ({ heading, musicFiles }: Props) => {
  return (
    <View style={styles.box}>
      <Text style={styles.heading}>{heading}</Text>
      <View>
        <FlatList
          // style={styles.list}
          data={musicFiles}
          horizontal={true}
          renderItem={({ item }) => <AlbumBox album={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: { id: string }) => item.id}
          // ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />
      </View>
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
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingRight: 0,
  },
});

export default Recommended;
