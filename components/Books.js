import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import BooksData from "../BookDetails.json";

export default function Books({ navigation }) {
  return (
    <FlatList
      data={BooksData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer} key={item.id}>
          <Image
            source={{ uri: item.thumbnailUrl }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("BookDetails" , { book: item })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      )}
    />
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
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#F5F5F5",
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#000000",
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-end",
    elevation: 5, // Android için gölge
  },  
  buttonText: {
    color:"black",
    fontSize: 15,
    fontWeight: "bold",
  },
});
