import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoryTextSlider from "../Components/Home/CategoryTextSlider";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from "../Components/Home/TopHeadlineSlider";

function Home() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between", // Metni ve simgeyi karşılıklı kenarlara yerleştirir
          alignItems: "center",
        }}
      >
        <Text style={styles.appName}>Yıldırım Haber</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      {/*Category List*/}
      <CategoryTextSlider />
      {/*Top Headline Slider*/}
      <TopHeadlineSlider />
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
// dsjfhs
