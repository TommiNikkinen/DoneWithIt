import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

export default function AppButton({ title, onPress, color }) {
  return (
    <TouchableOpacity
      style={[styles.appButton, { backgroundColor: colors[color] }]}
      onPress={onPress}
      color={color}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButton: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    margin: 10,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
