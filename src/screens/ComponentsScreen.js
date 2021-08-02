import React from "react";
import { View, Text, StyleSheet } from "react-native";

const myName = 'Dmitry';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.firstTextElementStyle}>Getting started with React Native!</Text>
      <Text style={styles.secondTextElementStyle}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  firstTextElementStyle: {
    fontSize: 45
  },
  secondTextElementStyle: {
    fontSize: 20
  }
});

export default HomeScreen;