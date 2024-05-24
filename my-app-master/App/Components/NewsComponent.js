import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { firestore } from "../../firebase";

const NewsComponent = () => {
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

  const renderItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.content}</Text>
    </View>
  );

  return (
    <FlatList
      data={news}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
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
});

export default NewsComponent;
