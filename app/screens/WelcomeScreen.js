import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, Text, Image } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton/AppButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  buttonContainer: {
    width: "90%",
    margin: 10,
  },
});

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.background}
        blurRadius={10}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="login" color="primary" />
          <AppButton title="register" color="secondary" />
        </View>
      </ImageBackground>
    </View>
  );
}
