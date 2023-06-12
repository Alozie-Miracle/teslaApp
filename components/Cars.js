import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

export default Cars = ({ car }) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.optionText}>{car.name}</Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color="gray"
        style={{ marginLeft: "auto" }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#eee",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 300,
  },
  optionRow: {
    marginTop: "auto",
  },
  name: {
    color: "white",
  },
});
