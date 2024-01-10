import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

const bookImage = require("../assets/book.png");
const settingsImage = require("../assets/settings.png");

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Books")}>
        <View style={styles.box}>
          <Image source={bookImage} style={styles.image} />
          <Text style={styles.text}>Books</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Settings")}>
        <View style={styles.box}>
          <Image source={settingsImage} style={styles.image} />
          <Text style={styles.text}>Settings</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  box: {
    width: 250,
    height: 250,
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
