import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { Button, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function App() {
  // let horMode = false;
  const [horMode, setHorMode] = useState(false);

  return (
    <View style={tw`flex-1 bg-white justify-center items-center`}>
      <StatusBar style="auto" />
      <Button
        onPress={() => {
          setHorMode(true);
        }}
        title="반전"
      />
      <View style={{ height: 10 }} />
      <Button
        onPress={() => {
          setHorMode(false);
        }}
        title="회복"
      />
      <View style={{ height: 10 }} />
      <Button
        onPress={() => {
          setHorMode(!horMode);
        }}
        title="토글"
      />
      <View
        style={tw.style(`w-20 h-20 m-10 rounded bg-red-500`, {
          "bg-blue-500": horMode,
        })}
      />
      <View
        style={tw.style(`w-20 h-20 m-10 rounded bg-green-500`, {
          "bg-yellow-500": horMode,
        })}
      />
      <View
        style={tw.style(`w-20 h-20 m-10 rounded bg-blue-500`, {
          "bg-red-500": horMode,
        })}
      />
    </View>
  );
}
