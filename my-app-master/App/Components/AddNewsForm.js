import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firestore } from "../../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const AddNewsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [link, setLink] = useState("");

  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      await firestore.collection("news").add({
        title: title,
        content: content,
        imageUrl: imageUrl,
        link: link, // Link burada kaydediliyor
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setTitle("");
      setContent("");
      setImageUrl("");
      setLink("");
      Alert.alert("Başarılı", "Haber başarıyla eklendi!");
      navigation.navigate("NewsComponent"); // Haberler sayfasına yönlendir
    } catch (error) {
      console.error("Haber eklenirken hata oluştu:", error);
      Alert.alert("Hata", "Haber eklenirken bir hata oluştu.");
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Başlık</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="Başlık"
      />
      <Text style={styles.label}>İçerik</Text>
      <TextInput
        style={[styles.input, { height: 150 }]}
        value={content}
        onChangeText={(text) => setContent(text)}
        placeholder="İçerik"
        multiline
      />
      <Text style={styles.label}>Resim URL</Text>
      <TextInput
        style={styles.input}
        value={imageUrl}
        onChangeText={(text) => setImageUrl(text)}
        placeholder="Resim URL (isteğe bağlı)"
      />
      <Text style={styles.label}>Link</Text>
      <TextInput
        style={styles.input}
        value={link}
        onChangeText={(text) => setLink(text)}
        placeholder="Link (isteğe bağlı)"
      />
      <Button title="Haberi Ekle" onPress={handleSubmit} />
      <Button
        title="Haberleri Görüntüle"
        onPress={() => navigation.navigate("NewsComponent")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
    padding: 10,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddNewsForm;
