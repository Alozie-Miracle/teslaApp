import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";

import climateImage from "../assets/images/climate.png";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

export default climate = () => {
  const [toggle, settoggle] = useState(false);
  const [temperature, setTemperature] = useState(25);

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={climateImage} style={styles.image} resizeMode="cover" />
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.label}>Interior 74°F - Exterior 66°F</Text>

        <View style={styles.controlsRow}>
          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons
              onPress={() => settoggle(!toggle)}
              name="power"
              size={42}
              color="white"
            />
            <Text style={styles.iconButtonText}>{toggle ? "On" : "Off"}</Text>
          </View>

          <View style={styles.temperatureContainer}>
            <Entypo
              onPress={() => setTemperature(temperature - 1)}
              name="chevron-left"
              size={30}
              color="gray"
            />
            <Text style={styles.temperatureText}>{temperature}°</Text>
            <Entypo
              onPress={() => setTemperature(temperature + 1)}
              name="chevron-right"
              size={30}
              color="gray"
            />
          </View>
        </View>
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
    height: "65%",
  },
  footer: {
    alignItems: "center",
    padding: 12,
    marginBottom: 20,
    marginTop: "auto",
  },
  label: {
    color: "gray",
    fontSize: 18,
    fontWeight: 600,
    marginVertical: 20,
  },
  controlsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  iconButtonContainer: {
    alignItems: "center",
  },
  iconButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  temperatureContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: "300",
    color: "white",
    marginHorizontal: 20,
  },
});
