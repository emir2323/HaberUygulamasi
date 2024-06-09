import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./App/Components/HomeScreen";
import AddNewsForm from "./App/Components/AddNewsForm";
import NewsComponent from "./App/Components/NewsComponent";
import HaberDetay from "./App/Components/HaberDetay";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Yıldırım Haber" }}
        />
        <Stack.Screen
          name="AddNewsForm"
          component={AddNewsForm}
          options={{ title: "Haber Ekle" }}
        />
        <Stack.Screen
          name="NewsComponent"
          component={NewsComponent}
          options={{ title: "Haberler" }}
        />
        <Stack.Screen
          name="HaberDetay"
          component={HaberDetay}
          options={{ title: "Haber Detayı" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
