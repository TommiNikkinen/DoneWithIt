import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    height: 200,
    resizeMode: "cover",
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    color: colors.black,
    marginBottom: 5,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
