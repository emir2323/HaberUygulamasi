import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firestore } from "../../firebase";

const NewsComponent = () => {
  const navigation = useNavigation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsCollection = await firestore
          .collection("news")
          .orderBy("timestamp", "desc")
          .get();
        setNews(
          newsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (error) {
        console.error("Haberler getirilirken hata oluştu:", error);
      }
    };

    fetchNews();
  }, []);

  const handleHaberDetay = (haberUrl) => {
    navigation.navigate("HaberDetay", { haberUrl });
  };

  const renderItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.content}</Text>
      {item.imageUrl ? (
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      ) : null}
      <TouchableOpacity
        style={styles.detayLink}
        onPress={() => handleHaberDetay(item.link)}
      >
        <Text style={styles.detayLinkText}>Haberi Detaylı İncele</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.haberEkleButton}
        onPress={() => navigation.navigate("AddNewsForm")}
      >
        <Text style={styles.haberEkleButtonText}>Haber Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  newsItem: {
    marginBottom: 20,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
  detayLink: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
  detayLinkText: {
    color: "#0782F9",
    textDecorationLine: "underline",
  },
  haberEkleButton: {
    backgroundColor: "#0782F9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "flex-end",
  },
  haberEkleButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default NewsComponent;
