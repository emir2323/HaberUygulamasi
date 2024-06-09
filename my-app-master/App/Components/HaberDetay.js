import React from "react";
import { View, Text, StyleSheet, Button, Linking } from "react-native";
import { useRoute } from "@react-navigation/native";

const HaberDetay = () => {
  const route = useRoute();
  const { haberUrl } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Haber Detay</Text>
      {haberUrl ? (
        <Button
          title="Haberi Görüntüle"
          onPress={() => Linking.openURL(haberUrl)}
        />
      ) : (
        <Text>Link mevcut değil</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default HaberDetay;
