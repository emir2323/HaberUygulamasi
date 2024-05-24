// Home.js

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoryTextSlider from "../Components/Home/CategoryTextSlider";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from "../Components/Home/TopHeadlineSlider";
import HeadlineList from "../Components/Home/HeadlineList";

function Home() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.appName}>Yıldırım Haber</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      {/* Category List */}
      <CategoryTextSlider />

      {/* Top Headline Slider */}
      <TopHeadlineSlider />

      {/* Headline List */}
      <HeadlineList />
    </View>
  );
}

const styles = StyleSheet.create({
  appName: {
    fontSize: 25,
    fontWeight: "bold",
    color: Color.primary,
  },
});

export default Home;
