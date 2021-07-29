import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const greeting = <Text>Hi there!</Text>;

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
});

export default ComponentsScreen;