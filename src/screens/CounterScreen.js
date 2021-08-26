import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <View style={styles.buttonStyle}>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Decrease" onPress={() => setCount(count - 1)} />
      </View>
      <Text style={styles.textStyle}>Current Count:</Text>
      <Text style={styles.countStyle}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 5
  },
  textStyle: {
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 20
  },
  countStyle: {
    textAlign: 'center',
    fontSize: 30
  }
});

export default CounterScreen;