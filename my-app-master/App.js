import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import AddNewsForm from "./App/Components/AddNewsForm";
import NewsComponent from "./App/Components/NewsComponent";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewsForm />
      <NewsComponent />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    padding: 30,
  },
});
