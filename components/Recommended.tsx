import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AlbumBox from "./AlbumBox";
const datas = [
  {
    text: "chill",
    icon: "https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-cover-art-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts%20=%201698245952",
  },
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
type Props = {
  heading: string;
};
const Recommended = ({ heading }: Props) => {
  return (
    <View style={styles.box}>
      <Text style={styles.heading}>{heading}</Text>
      <View>
        <FlatList
          // style={styles.list}
          data={datas}
          horizontal={true}
          renderItem={({ item }) => <AlbumBox album={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: { id: string }) => item.id}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
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
