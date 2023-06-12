import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import menuOptions from "../assets/menuOptions";
import MenueOption from "../components/MenueOption";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";

export default App = () => {
  const router = useRouter();
  const { carname } = useSelector((state) => state.car.carname);
  const { carimg } = useSelector((state) => state.car.carimg);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.back}>
          <Entypo name="chevron-left" size={24} color="white" />
        </Pressable>
        <View>
          <Text style={styles.title}>My {carname}</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>
      <Image source={carimg} style={styles.image} resizeMode="contain" />

      {/* List of horizontal arranged icon */}
      <View style={styles.controls}>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </View>

      {/* flatlist for menu items */}
      <FlatList
        data={menuOptions} //array of items
        showsVerticalScrollIndicator={false} //remove scrollbar
        renderItem={MenueOption} // calling manue option
        // ListHeaderComponent={Controls} this is added to scroll the controls function
      />
      {/*  this code can be written in inside the renderItem
        (
          { item } //how to render a single item
        ) => <MenuOption item={item} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#eee",
    marginBottom: 8,
  },
  subtitle: {
    fontWeight: "500",
    color: "gray",
  },
  image: {
    width: "100%",
    height: 300,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  back: {
    backgroundColor: "#2f3030",
    padding: 10,
    borderRadius: 5,
  },
});
