import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    top: 40,
    left: 30,
    position: "absolute",
    backgroundColor: colors.primary,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    top: 40,
    right: 30,
    position: "absolute",
    backgroundColor: colors.secondary,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
