import { SafeAreaView, Image, StyleSheet, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { useRouter } from "expo-router";
import gps from "../assets/images/gps.jpg";

export default places = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={gps} style={styles.image} resizeMode="contain" />
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  back: {
    position: "absolute",
    top: 50,
    left: 25,
    backgroundColor: "#2f3030",
    padding: 10,
    borderRadius: 5,
  },
});
