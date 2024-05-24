import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { firebase, firestore, storage } from "../../firebase";
import * as ImagePicker from "expo-image-picker";

const AddNewsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = storage.ref().child(new Date().toISOString());
    const snapshot = await ref.put(blob);
    return await snapshot.ref.getDownloadURL();
  };

  const handleSubmit = async () => {
    let imageUrl = "";
    if (image) {
      imageUrl = await uploadImage(image);
    }

    try {
      await firestore.collection("news").add({
        title: title,
        content: content,
        imageUrl: imageUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setTitle("");
      setContent("");
      setImage(null);
      Alert.alert("Başarılı", "Haber başarıyla eklendi!");
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
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
        placeholder="İçerik"
      />
      <Button title="Resim Seç" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Haberi Ekle" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
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
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default AddNewsForm;
