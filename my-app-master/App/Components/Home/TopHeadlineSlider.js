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
  console.log("Log", newsList);
  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    try {
      const result = (await GlobalApi.getTopHeadline()).data;
      setNewsList(result.data.articles);
    } catch (error) {
      console.error("Error fetching top headlines:", error);
    }
  };

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: Dimensions.get("screen").width * 0.84,
              marginRight: 15,
            }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{ height: 350, borderRadius: 10 }}
            />
            <Text
              numberOfLines={3}
              style={{ marginTop: 10, fontSize: 23, fontWeight: "800" }}
            >
              {item.title}
            </Text>
            <Text style={{ marginTop: 5, color: Colors.primary }}>
              {item?.source?.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default TopHeadlineSlider;
