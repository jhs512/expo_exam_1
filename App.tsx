import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function App() {
  return (
    <View style={tw`flex-1 bg-white justify-center items-center`}>
      <Text style={tw`text-white font-bold`}>안녕하세요.</Text>
      <Text style={tw`text-white font-bold`}>반갑습니다.</Text>
      <Text style={tw`text-white`}>또 만나요.</Text>
      <StatusBar style="auto" />
    </View>
  );
}
