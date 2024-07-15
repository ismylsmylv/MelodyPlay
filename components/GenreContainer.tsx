import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GenreBox from "./GenreBox";
const datas = [
  { text: "chill", icon: "logo-ionitron" },
  { text: "pop", icon: "logo-ionic" },
  { text: "chill", icon: "logo-ionitron" },
  { text: "pop", icon: "logo-ionic" },
  { text: "chill", icon: "logo-ionitron" },
  { text: "pop", icon: "logo-ionic" },
  { text: "chill", icon: "logo-ionitron" },
  { text: "pop", icon: "logo-ionic" },
  { text: "chill", icon: "logo-ionitron" },
  { text: "pop", icon: "logo-ionic" },
  { text: "chill", icon: "logo-ionitron" },
  { text: "pop", icon: "logo-ionic" },
  { text: "chill", icon: "logo-ionitron" },
  { text: "pop", icon: "logo-ionic" },
  { text: "chill", icon: "logo-ionitron" },
  { text: "pop", icon: "logo-ionic" },
];
const GenreContainer = () => {
  return (
    <View style={{ paddingHorizontal: 20, paddingRight: 0 }}>
      <Text style={styles.heading}>vibes & genres</Text>
      <FlatList
        style={styles.list}
        data={datas}
        horizontal={true}
        renderItem={({ item }) => (
          <GenreBox text={item.text} icon={item.icon} />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
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
  list: {},
});

export default GenreContainer;
