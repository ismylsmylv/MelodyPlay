import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment } from "@/redux/slice";

export default function Player() {
  const router = useRouter();
  const value = useAppSelector((state) => state.player.value);
  const dispatch = useAppDispatch();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Player {value}</Text>
      <Button
        title="Go to New Page"
        onPress={
          () => {
            dispatch(increment());
          }
          // router.push("/newpage")
        }
      />
    </View>
  );
}
