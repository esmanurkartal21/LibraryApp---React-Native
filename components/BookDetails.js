import React from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";

export default function BookDetails({ route }) {
  const { book } = route.params;

  return (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: book.thumbnailUrl }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{book.title}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Author/s:</Text>
          <Text style={styles.info}>{book.authors.join(" | ")}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.info}>{book.shortDescription}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#F5F5F5", 
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#E0E0E0", 
    padding: 20,
    margin: 16,
    alignItems: "center", 
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#333",
  },
  infoContainer: {
    backgroundColor: "#F5F5F5", 
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#E0E0E0", 
    padding: 20,
    margin: 5,
    alignItems: "center", 
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    width: 80,
  },
  info: {
    flex: 1,
    color: "#555",
    fontWeight:"bold",
    marginLeft:5,
    fontStyle:"italic",
  },
});