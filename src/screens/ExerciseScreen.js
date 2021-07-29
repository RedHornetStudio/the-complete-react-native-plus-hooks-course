import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const myName = 'Dmitry';

const ExerciseScreen = () => {
  return (
    <View>
      <Text style={style.firstTextElementStyle}>Getting started with React Native!</Text>
      <Text style={style.secondTextElementStyle}>My name is {myName}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  firstTextElementStyle: {
    fontSize: 45
  },
  secondTextElementStyle: {
    fontSize: 20
  }
});

export default ExerciseScreen;