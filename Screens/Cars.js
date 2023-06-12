import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";

import modelY from "../assets/images/Homepage-Model-Y-Global-Desktop-removebg-preview.png";
import modelX from "../assets/images/Homepage-Model-X-Desktop-LHD-removebg-preview.png";
import modelS from "../assets/images/Model-S-homepage-desktop-removebg-preview.png";
import modelThree from "../assets/images/Homepage-Model-3-Desktop-LHD-removebg-preview.png";
import { useDispatch } from "react-redux";
import { setCarimg, setCarname } from "../ReduxSlice/CarSlice";

export default Cars = () => {
  const cars = [
    {
      name: "Model S",
      img: modelS,
    },
    {
      name: "Model Y",
      img: modelY,
    },
    {
      name: "Model 3",
      img: modelThree,
    },
    {
      name: "Modey X",
      img: modelX,
    },
  ];
  const [carNo, setCarNo] = useState(1);
  const [bgImg, setBgImg] = useState(cars[0].img);
  const [carName, setCarName] = useState(cars[0].name);
  const router = useRouter();
  const dispatch = useDispatch();
  const navigate = useNavigation();

  useEffect(() => {
    if (carNo >= cars.length) setCarNo(0);
    if (carNo < 0) setCarNo(3);
  }, [carNo]);

  return (
    <ImageBackground
      style={styles.container}
      source={bgImg}
      resizeMode="contain"
    >
      <View style={styles.about}>
        <Text style={styles.aboutText}>{carName}</Text>
        <TouchableOpacity
          style={styles.carDetail}
          onPress={() => {
            dispatch(
              setCarname({
                carname: carName,
              })
            ),
              dispatch(
                setCarimg({
                  carimg: bgImg,
                })
              ),
              navigate.navigate("App");
          }}
        >
          <Text style={{ color: "white" }}>View Inventory</Text>
        </TouchableOpacity>
      </View>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>

      <Pressable
        style={styles.next}
        onPress={() => {
          setCarNo(carNo + 1);
          setBgImg(cars[carNo].img);
          setCarName(cars[carNo].name);
        }}
      >
        <Text style={styles.nextText}>Next</Text>
        <Entypo name="chevron-down" size={24} color="white" />
      </Pressable>
      <Pressable
        style={styles.prev}
        onPress={() => {
          setCarNo(carNo - 1);
          setBgImg(cars[carNo].img);
          setCarName(cars[carNo].name);
        }}
      >
        <Text style={styles.nextText}>Previous</Text>
        <Entypo name="chevron-up" size={24} color="white" />
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
    position: "relative",
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
  next: {
    position: "absolute",
    bottom: 100,
    left: 25,
    backgroundColor: "#2f3030",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    width: 200,
    justifyContent: "space-between",
  },
  prev: {
    position: "absolute",
    bottom: 100,
    left: 250,
    backgroundColor: "#2f3030",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    width: 200,
    justifyContent: "space-between",
  },
  nextText: {
    color: "gray",
  },
  about: {
    flex: 1,
    alignItems: "center",
    marginTop: "40%",
  },
  aboutText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  carDetail: {
    marginTop: 20,
    backgroundColor: "gray",
    padding: 10,
    width: 200,
    alignItems: "center",
    borderRadius: 6,
  },
});
