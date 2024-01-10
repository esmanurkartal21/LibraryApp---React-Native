import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList ,TouchableOpacity} from "react-native";
import BooksData from "../BookDetails.json";

export default function DeleteBooks() {
  const [books, setBooks] = useState(BooksData);

  const handleDeleteBook = (id) => {
    const deletedBooks = books.filter((book) => book.id !== id);
    setBooks(deletedBooks);
  };

  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer} key={item.id}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity
            onPress={() => handleDeleteBook(item.id)} 
            style={styles.button}
          >
            <Text style={styles.buttonText}>Delete</Text>
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
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  button: {
    borderColor: "#2E4053",
    borderWidth: 4,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-end",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
