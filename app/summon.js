import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import car from "../assets/images/car.png";

export default Summon = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 24 }}>Forward</Text>
        </TouchableOpacity>

        <Image source={car} resizeMode="contain" style={styles.image} />

        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 24 }}>Forward</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.lastButton]}>
          <Text style={{ fontSize: 24 }}>Stop</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
  },
  back: {
    position: "absolute",
    top: 50,
    left: 25,
    backgroundColor: "#2f3030",
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    marginBottom: 20,
    height: "100%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDCC",
    padding: 10,
    width: "50%",
    marginVertical: 20,
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
  },
  lastButton: {
    marginTop: "10%",
  },
  image: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
