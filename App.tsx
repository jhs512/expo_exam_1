import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function App() {
  return (
    <View style={tw`flex-1 bg-white justify-center items-center`}>
      <StatusBar style="auto" />
      <Button
        onPress={() => {
          console.log("버튼 클릭됨!");
        }}
        title="버튼1"
      />
      <View style={tw`w-20 h-20 m-10 rounded bg-red-500`}></View>
      <View style={tw`w-20 h-20 m-10 rounded bg-green-500`}></View>
      <View style={tw`w-20 h-20 m-10 rounded bg-blue-500`}></View>
    </View>
  );
}
