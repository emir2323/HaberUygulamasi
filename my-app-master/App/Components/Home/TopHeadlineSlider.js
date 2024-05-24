// TopHeadlineSlider.js

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import GlobalApi from "../../Services/GlobalApi";

function TopHeadlineSlider() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    try {
      const result = await GlobalApi.getTopHeadline().data;
      setNewsList(result.articles); // Düzeltme yapıldı, result.data.articles -> result.articles
    } catch (error) {
      console.error("Error fetching top headlines:", error);
    }
  };

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Top Headlines
      </Text>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: Dimensions.get("window").width * 0.84,
              marginRight: 15,
            }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{ height: 200, borderRadius: 10 }}
            />
            <Text
              numberOfLines={3}
              style={{ marginTop: 10, fontSize: 16, fontWeight: "bold" }}
            >
              {item.title}
            </Text>
            <Text style={{ marginTop: 5, color: "grey" }}>
              {item.source.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default TopHeadlineSlider;
