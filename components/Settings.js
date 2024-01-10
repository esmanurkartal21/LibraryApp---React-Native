import React from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import BooksData from "../BookDetails.json";

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("DeleteBooks")}>
        <View style={styles.box}>
          <Text style={styles.text}>Delete Books</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  box: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
