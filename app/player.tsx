import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Player() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Player</Text>
      <Button title="Go to New Page" onPress={() => router.push("/newpage")} />
    </View>
  );
}
