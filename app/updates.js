import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import logo from "../assets/images/tesla-logo-removebg-preview.png";
import softwareImage from "../assets/images/Tesla-Software.jpg";

export default Updates = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Image source={softwareImage} style={styles.image} resizeMode="contain" />
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>
      <View style={styles.footer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.logoText}>Tesla</Text>
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
  image: {
    width: "100%",
    height: "100%",
  },
  control: {
    width: "100%",
    height: 250,
  },
  logo: {
    width: "100%",
    height: 100,
  },
  logoText: {
    color: "red",
    fontSize: 30,
    fontWeight: 600,
    marginVertical: 20,
  },
  footer: {
    alignItems: "center",
    padding: 12,
    marginBottom: 20,
    marginTop: "auto",
  },
});
