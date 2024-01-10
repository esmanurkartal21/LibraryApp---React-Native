import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import Settings from "./components/Settings";
import DeleteBooks from "./components/DeleteBooks";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="BookDetails" component={BookDetails}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="DeleteBooks" component={DeleteBooks}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
