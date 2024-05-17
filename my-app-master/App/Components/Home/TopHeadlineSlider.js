import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
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
    <View>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {}}>
            {item.urlToImage && (
              <Image
                source={{ uri: item.urlToImage }}
                style={{ width: "100%", height: 400 }}
                resizeMode="cover"
                onError={() => console.log("Error loading image")}
              />
            )}
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default TopHeadlineSlider;
