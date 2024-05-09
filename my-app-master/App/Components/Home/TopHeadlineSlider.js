import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native"; // TouchableOpacity direkt olarak buraya eklendi
import GlobalApi from "../../Services/GlobalApi";

function TopHeadlineSlider() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    try {
      const result = await GlobalApi.getTopHeadline();
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
          <TouchableOpacity onPress={() => console.log(item.title)}>
            {" "}
            {/* Resme tıklandığında başlık konsola yazdırılır */}
            <Image source={{ uri: item.urlToImage }} style={{ height: 400 }} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default TopHeadlineSlider;
