import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "expo-router";
import TypeWriter from "react-native-typewriter";
import car from "../assets/images/car.png";

export default HomeScreen = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={car} resizeMode="contain" style={styles.image}>
        <View style={styles.head}>
          <Text
            style={{
              marginLeft: 20,
              color: "white",
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            Tesla
          </Text>
        </View>
        <View style={styles.actinContainer}>
          <View style={styles.actionTextContainer}>
            <TypeWriter style={styles.actionText} typing={1}>
              Experience Tesla
            </TypeWriter>
            <Text style={styles.subText}>Schedule a Demo Drive Today</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate.navigate("Cars")}
          >
            <TypeWriter
              style={{
                color: "white",
                fontSize: 16,
              }}
              typing={1}
            >
              Choose your rid
            </TypeWriter>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  head: {
    flexDirection: "row",
    position: "absolute",
    top: 60,
    width: "100%",
    zIndex: 1,
  },
  actinContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    zIndex: 1,
    position: "absolute",
    alignSelf: "center",
  },
  actionTextContainer: {
    alignItems: "center",
  },
  actionText: {
    color: "white",
    fontSize: 30,
    marginBottom: 10,
  },
  subText: {
    color: "gray",
    fontSize: 16,
  },
  button: {
    width: "60%",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "white",
    height: "5%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    position: "absolute",
    backgroundColor: "red",
    width: "10%",
  },
});
